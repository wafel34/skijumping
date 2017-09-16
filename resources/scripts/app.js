var $ = window.jQuery = require("jQuery"),
    bootstrap = require('bootstrap-sass'),
    DOMHANDLER = {};


/*
This function check the width of window and depending on size it adds or removes
event listener that is responsible for styling the navbar.
*/
DOMHANDLER.checkWidth = function() {
    var wWidth = window.innerWidth;

    if (wWidth > 767) {
        document.addEventListener('scroll', DOMHANDLER.navStyling, false);
    } else {
        document.removeEventListener('scroll', DOMHANDLER.navStyling, false);
    }
};

/*
This function is responsible for styling navigation bar.
It checks if Page Offset from the top is greater than header height and applies relevant class.
*/
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


        //attach event listener for window resize
        window.addEventListener('resize', DOMHANDLER.checkWidth, false);
        //call fucntion also when page loaded
        DOMHANDLER.checkWidth();


//
}());
