var express = require('express'),
    router = express.Router();

router.get('/about', function(req, res){


    res.render('view_about', {
        pageId: 'About'
    });
});


module.exports = router;
