const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

const app = express();
const PORT = 3000;

// Handlebars Config
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Static folder Config
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.render("index");
});

app.use('/country', require('./routes/country'));

app.get('/*', (req, res) => {
  res.render("notFound");
});

// Start Server
app.listen(PORT, () => {
});