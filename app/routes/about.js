var express = require('express'),
    router = express.Router();

router.get('/about', function(req, res){

    res.render('view_about', {
        pageId: 'About project',
        keywords: 'front-end developer, expressjs developer, junior developer london, developer profile, developer portfolio',
        description: 'Static web page project made with express js, sass, bootstrap and other techniques. Check my junior front-end developer github profile.'
    });
});


module.exports = router;
