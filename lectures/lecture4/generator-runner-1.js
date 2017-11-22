const https = require('https')
const http = require('http')

function runner(g) {
    // runback is usable here as all 
    // function names hoist to the top
    let it = g(runback)

    // actually start the iterator
    it.next()

    // this function will hoist to the top
    function runback(arg) {
        it.next(arg)
    }    
}

function *acode(runback) {
    // async request and async reading
    var res = ''
    imsg = yield http.get("http://cristal.inria.fr/~weis/info/commandline.html", runback)
    imsg.on('data', cd => res += cd)
    yield imsg.on('end', runback)
    console.log(`got all data from req 2. size is ${res.length}`)
    
    // lets do some more async stff
    res = ''
    imsg = yield https.get("https://ma.ttias.be/how-to-read-ssl-certificate-info-from-the-cli/", runback)
    imsg.on('data', cd => res += cd)
    yield imsg.on('end', runback)
    console.log(`got all data from req 2. size is ${res.length}`)
}

runner(acode)
