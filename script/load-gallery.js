$(document).ready(function(){
    $('.gallery img').hide();
    //keep count of images on the page
    var imagesLoaded = 0;
    var totalImages = $('.gallery img').length;
    
    //clone images while counting
    $('.gallery img').each(function(idx, img){
        $('<img>').on('load', imageLoaded).attr('src', $(img).attr('src'));
    })

    //check if all images were processed
    function imageLoaded(){
        imagesLoaded++
        if (imagesLoaded == totalImages){
            allImagesLoaded();
        }
    }

    //remove the loading gif as the gallery's background image, show fully loaded gallery
    function allImagesLoaded() {
        $('.gallery img').show();
        $('.gallery').css('background', 'white')
                     .css('height', 'auto');
    }
});