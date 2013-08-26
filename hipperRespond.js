// jquery.pjax.js



$(window).on("load resize", function hipperRespond() {

 $('img').each(function() {

    var divHeight = $(this).parent().height(); // get height of parent div
    var divWidth  = $(this).parent().width(); // get width of parent div 
    var height = $(this).height();  // Current image height
    var width  = $(this).width();    // Current image width
    var height100 = 'height:100%;width:auto';
    var width100 = 'width:100%;height:auto';

    if ((divWidth/width) > (divHeight/height)) {
        $(this).removeAttr('style');
        $(this).attr("style", width100); 

    } else {
        $(this).removeAttr('style');
        $(this).attr("style", height100); 
    }
 });
}); 
