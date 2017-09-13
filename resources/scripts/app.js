var $ = window.jQuery = require("jQuery"),
    bootstrap = require('bootstrap-sass');

(function(){

    // If JS is not active in the browser default image from view_hill.js is displayed.
    // If JS is available this image gets hidden by bylow function and set as background image for div
    // This is because background image position is better supported than img object positioning
    var title = document.title,
        imageHeader = document.getElementById('image-header'),
        image = document.querySelector('#image-header img');

        if(imageHeader){
            image.style.display = 'none';
            imageHeader.style.backgroundImage = "url('../images/hills/"+title+".jpg')";
        }

}());
