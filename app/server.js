var express = require('express'),
    app = express(),
    calendar = require('./data/calendar.json');

app.set('calendar', calendar);
app.set('view engine', "ejs");
app.set('views', "./app/views");

app.use(express.static('app/public'));
app.use(require('./routes/index'));
app.use(require('./routes/calendar'));

app.listen(5000);
console.log('Express listening on port 5000');
