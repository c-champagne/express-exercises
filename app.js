const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(__dirname + "/public"));

app.get('/', function (req, res, next) {
    res.send('Hello, world!')
});

app.get('/cats', function (req, res, next) {
    /* res.send('Meow...') */
    res.render('cats', {
        pageTitle: 'For cats only',
        greeting:'Meow...'
    })
});

app.get('/dogs', function (req, res, next) {
    res.send('Woof!')
});

app.get('/cats_and_dogs', function (req, res, next) {
    res.send('Living together')
});

app.get('/greet/:userName', function (req, res, next){
    const userName = req.params.userName;
    res.send(`Hello, ${userName}`);
})

app.get('/year', function(req, res, next){
    let age = req.query.age;
    let birthYear = 2020 - age;

    res.send(`You were born in ${birthYear}`);
})



app.listen(3000, function(){
    console.log('Ready to go!')
})