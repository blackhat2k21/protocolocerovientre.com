$(document).ready(function() { 

    /*if (jQuery(window).width() < 480){
        $('.hero').parallax({
            imageSrc: 'img/bg1.jpg',
            naturalWidth: 600,
            naturalHeight: 400
        });
    }*/

    if (jQuery(window).width() > 480){
        $('.hero').parallax({
            imageSrc: 'img/bg1.jpg',
            naturalWidth: 600,
            naturalHeight: 400
        });
    }

    setTimeout(function(){
        $('#button_chechout_hero').show(); 
        $('#button_chechout_final').show(); 
 }, 1900000); 
});

var scrollEventHandler = function()
{
  window.scroll(0, window.pageYOffset)
}

window.addEventListener("scroll", scrollEventHandler, false);