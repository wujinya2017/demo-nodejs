const http = require("http");
      fs = require("fs"),
      url = require("url"),
      qs=require('querystring');

//var chapterList = JSON.parse(fs.readFileSync('./js/data.js','utf8'));
var userList = [{username: "admin", pwd: "admin"}];

http.createServer((req,res)=>{
  var path = url.parse(req.url).pathname;
  var path1 = path.split('/');
  var path2 = path1.slice(2);
  var path3 = "./"+path2.join('/');
  var path5 = path2.join('/');
  var length = path2.length;
  var dirpath = path2[length-1];
  if(dirpath){
    var dirpath1 = dirpath.split('.')[1];
  }
  switch(dirpath1){
      case 'css':
          var data=fs.readFileSync(path3);
          res.writeHead(200,{"Content-type":"text/css;charset=UTF-8"});
          res.end(data);      
          break;
      case 'jpg':
          var data = fs.readFileSync(path3);
          res.writeHead(200,{"Content-type":"application/x-jpg;charset=UTF-8"});
          res.end(data);           
          break;
      case 'jpeg':
          var data = fs.readFileSync(path3);
          res.writeHead(200,{"Content-type":"image/jpeg;charset=UTF-8"});
          res.end(data);           
          break;
      case 'js':
          var data = fs.readFileSync(path3);
          res.writeHead(200,{"Content-type":"application/x-javascript;charset=UTF-8"});
          res.end(data);           
          break;
      default:
          break;
  }
  if(req.url =='/list/'){
       var data = fs.readFileSync("./chapterList.html","utf-8");
       res.writeHead(200,{"Content-type":"text/html;charset=UTF-8"});
       res.end(data);
            
  }else if (req.url == "/login/"){
    fs.readFile("./login.html",function(err,data){
            res.writeHead(200,{"Content-type":"text/html;charset=UTF-8"});
            res.end(data);
                      
    });
  }else if(req.url == '/listmanager/') {
    fs.readFile("./list.html",function(err,data){
            res.writeHead(200,{"Content-type":"text/html;charset=UTF-8"});
            res.end(data);
                      
    });
  }else if (req.url == "/addChapter/"){
    fs.readFile("./addChapter.html",function(err,data){
            res.writeHead(200,{"Content-type":"text/html;charset=UTF-8"});
                  res.end(data);
                      
    });
  }else{
    fs.readFile("../."+req.url,function(err,data){
    res.end(data);            
    });     
  }
  var file = '';
  if(req.url === '/login/' && req.method === 'POST'){
    req.on('data',(data)=>{
      file += data;
    });
    req.on('end',()=>{
      file = JSON.parse(file);
      userList.forEach((userlist)=>{
        if(userlist.username === file.username && userlist.pwd === file.pwd){
            res.statusCode = 200;
            res.end('OK');                         
        }else{
            res.statusCode = 404;
            res.end('no');                         
        }
      })
    })
  }

}).listen(8080);
