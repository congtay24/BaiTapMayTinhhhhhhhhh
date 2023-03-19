const express = require('express');
const exphbs = require('express-handlebars');

var app = express();
app.listen(4000,()=>{
    console.log("Sever đang chạy !!!");
});


app.engine('.hbs', exphbs({
    extname: '.hbs',
    defaultLayout: 'mayTinh',
    layoutsDir: __dirname + '/views/layouts',

}))
app.set('view engine', '.hbs');

app.get('/', function (req, res) {
    res.render('index', { 
        layout: 'mayTinh',
    });
});

