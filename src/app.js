const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');

const static_path = path.join(__dirname, '../public');
const partial_path = path.join(__dirname, '../templates/partials');
const template_path = path.join(__dirname, '../templates/views');

// Set the view engine and views directory
app.set('view engine', 'hbs');
app.set('views', template_path);

// Register partials
hbs.registerPartials(partial_path);

// Serve static files
app.use(express.static(static_path));

// Route for the root URL ("/")
app.get('/', (req, res) => {
    res.render('index');
});

// Route for the "/about" URL
app.get('/about', (req, res) => {
    res.render('about');
});

// Route for the "/contact" URL
app.get('/weather', (req, res) => {
    res.render('weather');
});

// Route for handling 404 errors
app.get('*', (req, res) => {
    res.send('404 error, page not found');
});

// Start the server
app.listen(8000, '127.0.0.1', () => {
    console.log('Server is running, listening on port 8000');
});
