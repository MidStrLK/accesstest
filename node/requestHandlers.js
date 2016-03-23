function submitRequest(response, handle, pathname, postData, testResult){

  if(!pathname || !response){
    response.writeHead(500, { 'Content-Type': 'application/json', 'charset':'utf-8' });
    response.write('Ошибка в запросе ' + pathname);
    response.end();
  }else if(pathname === '/reset'){
      testResult.length = 0;
      response.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
      response.end(getReturnButton());

  }else{
    if(pathname === '/'){
        response.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});

        var res = getReturnButton() + getButton() + getTable(testResult);

        response.end(res);
    }
  }
}

function getReturnButton(){
    return '<input type="submit" value="Обновить" onclick="window.location=\'/\';" />';

}

function getButton(){
    return '<input type="submit" value="Сбросить" onclick="window.location=\'/reset\';" /><br><br>';

    /*return '<form action="/reset" method="get">' +
                '<input type="submit" value="Сбросить"' +
                    'name="Submit" id="frm1_submit" />' +
                '</form>';*/

}

function getTable(obj){
    var res = '<table>\n';
    obj.forEach(function(val){
        var color = (val[2] == true) ? 'green' : 'red',
            result = (val[2] == true) ? 'OK' : 'error';
        res += '<tr style="color: yellow; background-color: ' + color + '"><td>' + val[0] + '</td><td>' + val[1] + '</td><td>' + result + '</td></tr>\n'
    });

    res += '</table>';

    return res;
}

exports.submitRequest       = submitRequest;