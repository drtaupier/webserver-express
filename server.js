const express = require('express')
const app = express()
const hbs = require('hbs');
require('./hbs/helpers');
app.use(express.static(__dirname + '/public'));
//Express hbs
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'David',
    });
});

app.get('/about', (req, res) => {
    res.render('about');
});

const port = process.env.PORT || 3000;
app.listen(3000, () => {
    console.log(`Listening from port: ${port}`);
})