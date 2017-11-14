
const saxStream = require('sax-stream')
const http = require('http')
const express = require('express')
const { Transform } = require('stream')

const app = express();
const rssloc = 'http://abcnews.go.com/abcnews/topstories'

app.get('/', (req ,res) => {
    res.set({'Content-type': 'text/html'})
    
    // it is important to instantiate the 
    // transformer each time, as it gets
    // closed after 'previous' stream in a
    // chain of pipes emits 'end'
    
    const tolistTransform = new Transform({
        objectMode: true,
        transform(obj, encoding, callback) {
            this.push(`<li>${obj.value}</li>`);
            callback();
        }
    })

    http.get(rssloc, im => {
        im.pipe(saxStream({strict: true, tag: 'title'}))
        .pipe(tolistTransform)
        .pipe(res)
        // look! we don't even need to 'end' the res
        // as it gets automatically 'end'-ed by the 
        // propagated 'end' of parent streams
        // im.on('end', () => res.end())
    })
})

app.listen(3001)