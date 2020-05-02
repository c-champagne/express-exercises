const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(__dirname + '/public'));

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
    /* res.send('Woof!') */
    res.render('dogs', {
        pageTitle: 'Who\'s a good boy?',
        greeting: 'Woof!'
    })
});

app.get('/cats_and_dogs', function (req, res, next) {
    /* res.send('Living together') */
    res.render('together', {
        pageTitle: 'In harmony',
        greeting: 'Woof-meow!'
    })
});

app.get('/greet/:userName', function (req, res, next){
    const userName = req.params.userName;
    /* res.send(`Hello, ${userName}`); */
    res.render('user', {
        pageTitle: 'Must have thumbs to use this page',
        greeting: 'Hello, ' + userName + '!'
    })
})

app.get('/year', function(req, res, next){
    let age = req.query.age;
    let birthYear = 2020 - age;
    //query parameter is /year?age=27
    /* res.send(`You were born in ${birthYear}`); */
    res.render('year', {
        pageTitle:'Forget what year you were born?',
        userAge: 'If you are ' + age + ' years old...',
        greeting: 'You were born in ' + birthYear

    })
})



app.listen(3000, function(){
    console.log('Ready to go!')
})