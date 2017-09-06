var $ = window.jQuery = require("jQuery"),
    bootstrap = require('bootstrap-sass');

(function(){
    var title = document.title,
        imageHeader = document.getElementById('image-header');

        if(imageHeader){
            imageHeader.style.backgroundImage = `url('../images/hills/${title}.jpg')`;
        }

}());
