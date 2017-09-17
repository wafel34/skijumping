var express = require('express'),
    minifyHTML = require('express-minify-html'),
    app = express(),
    calendar = require('./data/calendar.json'),
    hillsList = require('./data/hills.json'),
    jumpersList = require('./data/skijumpers.json');

app.set('port', (process.env.PORT || 5000))
app.set('calendar', calendar);
app.set('hillsList', hillsList);
app.set('jumpersList', jumpersList);
app.set('view engine', "ejs");
app.set('views', "./app/views");


app.use(minifyHTML({
    override:      true,
    exception_url: false,
    htmlMinifier: {
        removeComments:            true,
        collapseWhitespace:        true,
        collapseBooleanAttributes: true,
        removeAttributeQuotes:     true,
        removeEmptyAttributes:     true,
        minifyJS:                  true
    }
}));

app.use(express.static('app/public'));
app.use(require('./routes/index'));
app.use(require('./routes/calendar'));
app.use(require('./routes/hill'));
app.use(require('./routes/skijumpers'));
app.use(require('./routes/about'));

app.listen(app.get('port'));
console.log('Express listening on port 5000');
