var $ = window.jQuery = require("jQuery"),
    bootstrap = require('bootstrap-sass'),
    DOMHANDLER = {};


DOMHANDLER.checkWidth = function() {
    var wWidth = window.innerWidth;

    if (wWidth > 767) {
        document.addEventListener('scroll', DOMHANDLER.navStyling, false);
    } else {
        document.removeEventListener('scroll', DOMHANDLER.navStyling, false);
    }
};
DOMHANDLER.navStyling = function() {
    var headerH = document.querySelector('.header').offsetHeight,
        navBar = document.getElementById('navigation'),
        pageOffset = window.pageYOffset || document.documentElement.scrollTop;

        if (pageOffset > headerH - 50) {
            navBar.classList.add('navigation--no-opacity');
        } else {
            navBar.classList.remove('navigation--no-opacity');
        }
};


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
        DOMHANDLER.checkWidth();
        window.addEventListener('resize', DOMHANDLER.checkWidth, false);


//
}());
