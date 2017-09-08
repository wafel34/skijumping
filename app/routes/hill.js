var express = require('express'),
    router = express.Router();

router.get('/hills/:hill', function(req, res){


    var hillsList = req.app.get('hillsList'),
        hill = req.params.hill,
        result = {};

        hillsList.map(function(item){
            if (item.place === hill) {
                result = item;
            }
        });

    res.render('view_hill', {
        data: result,
        pageId: hill
    });
});


module.exports = router;
