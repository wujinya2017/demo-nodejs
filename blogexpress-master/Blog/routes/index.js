var express = require('express');
var router = express.Router();
const path =require('./data.json');

var user = path.users;
var chapterList = path.chapterList;
router.get('/', function(req, res, next) {
    res.render('index', { title: '登录' });
});
router.post('/home',function(req,res){ 
    if(req.body.username===user[0].username&&req.body.pwd===user[0].password){
        res.render('home',{title:'home'})
    }else{
        res.send('用户名或密码错误，请重新输入');
    }
});

router.get('/home', function(req, res,next) {
    res.render('home', { title: '详情' });
});

router.get('/add',function(req,res){
    var data = JSON.stringify(chapterList);
    res.writeHead(200, {
        'Content-Length': Buffer.byteLength(data),
        'Content-Type': 'text/plain;charset="utf-8"'
    })
  res.end(data)
})

module.exports = router;



