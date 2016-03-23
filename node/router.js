function route(handle, pathname, response, postData, testResult) {

  if (typeof handle[pathname] === 'function') {
    handle[pathname](response, handle, pathname, postData,testResult);


  }else {
    response['writeHead'](404, {"Content-Type": "text/plain"});
    response.write("404 Not found");
    response.end();
  }
}

exports.route = route;