var request  	= require("request"),
    formatDate  = require('./formatdate'),
	min = 30;   // Минуты

testServers = ['http://compareweather-midstr.rhcloud.com/', 'http://accesstest-mdstr.rhcloud.com/'];

function start(testResult){
    setInterval(function(){
        testServers.forEach(function(val){
            console.log('TEST -- ', val, ' - ', formatDate.dateToLocal());
            ping(val, testResult);
        });
    },  min*60*1000)
}

function ping(url, testResult){
    request({
        uri: url
    }, function(error, response, body) {
        console.info('error - ',error);
        testResult.push([url, formatDate.dateToLocal(), error || 'OK']);

    });
}


exports.start = start;