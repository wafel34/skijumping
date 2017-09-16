var express = require('express'),
    router = express.Router();

router.get('/team', function(req, res){


    var jumpersList = req.app.get('jumpersList');


    res.render('view_skijumpers', {
        jumpersList: jumpersList,
        pageId: 'Polish Squad',
        keywords: 'polish skijumping team, kamil stoch, piotr zyla, dawid kubacki, maciej kot, polish skijumpers',
        description: 'Polish skijumping team for 2017/18 season. Kamil Stoch will be the team leader as most titled sportsman in the team. He won 2 gold medals at Winder Olympis, and many individual and team titles. He will be supported by talender Maciej Kot and unpredictable Piotr Zyla. Dawid Kubacki will want to continue good performaces from Summer grand Prix.'
    });
});


module.exports = router;
