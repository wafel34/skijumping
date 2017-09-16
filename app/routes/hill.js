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
        pageId: hill,
        keywords: result.name + ', ski jumping hill, ' + result.place + ' hill, ' + result.country,
        description: result.name +' is as ski jumping hill located in ' + result.place +', '+ result.country + '. Its size is: '+ result.hillSize + ' and hill record is: ' + result.hillRecord
    });
});


module.exports = router;
