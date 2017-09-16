var express = require('express'),
    router = express.Router();


router.get('/', function(req, res){
    var calendar = req.app.get('calendar'),
        today = new Date(),
        nextEvent = null,
        previousEvent = null,
        previousEventDate = null,
        data = [];

        // map through calendar file
        data = calendar.map(function(item){
            var temp = item.date.split(/\/| -/), //Split date with slash or space+dash combination ( -)
                date = new Date(Date.UTC(temp[2], temp[1]-1, temp[0],21,0,0)); //create new date from details extracted in above split

                //Find event dates:

                //If previousEventDate is set to Null set it to current item
                if (!previousEventDate) {
                    previousEventDate = date;
                    previousEvent = item;
                } else { //If previousEventDate is NOT set as NULL check if current item date is bigger then previous item date and smaller than today
                    if(date > previousEventDate && date < today) {
                        previousEventDate = date;
                        previousEvent = item;
                    }
                }

                //Check if date is bigger then today and assingn it to nextEvent variable (but only do it for first date found)/
                if (!nextEvent && date > today) {
                    nextEvent = item;
                }

        });

    res.render('view_index', {
        pageId: 'Ski Jumping 2017/18',
        prevEvent: previousEvent,
        nextEvent: nextEvent,
        keywords: 'ski jumping, polish team in skijumping, polish skijumping team fanpage, season 2017 2018 ski jumping, winter sports',
        description: 'Fanpage website of polish ski jumping team. Check out polish team squad, 2017/18 ski jumping calendar, and hills details.'
    });
});


module.exports = router;
