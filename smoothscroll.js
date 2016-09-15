/**
 * Created by User on 15.09.2016.
 */
$(document).ready(function(){
    $("#return").on("click","a", function (event) {
        //call off default settings
        event.preventDefault();
        //take id from href
        var id  = $(this).attr('href'),
        //receive the height to top
        top = $(id).offset().top;
        //animating
        $('body,html').animate({scrollTop: top}, 1500);
    });
});
