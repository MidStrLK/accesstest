var request  	= require("request"),
    formatDate  = require('./formatdate');

testServers = ['https://www.yandex.ru/'];

function start(testResult){
    setInterval(function(){
        testServers.forEach(function(val){
            console.log('TEST -- ', val, ' - ', formatDate.dateToLocal());
            ping(val, testResult);
        });
    }, 10000)
}

function ping(url, testResult){
    request({
        uri: url
    }, function(error, response, body) {
        testResult.push([url, formatDate.dateToLocal(),!!body]);

    });
}


exports.start = start;