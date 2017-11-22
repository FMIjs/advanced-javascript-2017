const https = require('https')
const http = require('http')

// the runner gets the iterator
// and passes it to the generator
// in a way that enables the generator
// to "see" the iterator object

function runner(g) {
    let arr = {}
    arr.it = g(arr)
    arr.it.next()
}

// some async code organized as generator
function *acode(arr) {
    // we can have the runback function here
    // even though this is a bit messy
    // and we'd rather have it in runner()
    function runback(arg) {
        arr.it.next(arg)
    }    

    var res;
    var im = yield http.get("http://cristal.inria.fr/~weis/info/commandline.html", runback)
    im.on('data', cd => res += cd)
    yield im.on('end', runback)
    console.log(`got all data from req 2. size is ${res.length}`)
    
    res = ''
    im = yield https.get("https://ma.ttias.be/how-to-read-ssl-certificate-info-from-the-cli/", runback)
    im.on('data', cd => res += cd)
    yield im.on('end', runback)
    console.log(`got all data from req 2. size is ${res.length}`)
}

runner(acode)
