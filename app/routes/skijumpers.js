var express = require('express'),
    router = express.Router();

router.get('/team', function(req, res){


    var jumpersList = req.app.get('jumpersList');


    res.render('view_skijumpers', {
        jumpersList: jumpersList,
        pageId: 'Squad'
    });
});


module.exports = router;
