var express = require('express'),
    router = express.Router();


router.get('/', function(req, res){
    var calendar = req.app.get('calendar');

    res.render('view_index');
});


module.exports = router;
