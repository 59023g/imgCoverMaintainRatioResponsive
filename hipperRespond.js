

$(window).on("load resize", function() {

var div = $('.oneHundred, .twoThird, .third' );
var divHeight = $(div).height();
var divWidth  = $(div).width();

console.log(divWidth);

 $('img').each(function() {

    var height = $(this).height();  // Current image height
    var width  = $(this).width();    // Current image width
    var ratio  = width/height; 

      //console.log(height + " " + width + " " + ratio);

    var image = [height,width,ratio];

    console.log(height + " " +width+ " " +ratio);

        //console.log(image);


        if (ratio ==1) { //square 
                                                         
                if ((divHeight >= height) && (divWidth <= width )) { 
                    $(this).removeAttr('style');
                    $(this).attr("height", divHeight);
                    $(this).attr("width", divHeight);

                    console.log("static height");
                    }

                 else{
                    $(this).attr('style','width:100%');
                    console.log("else");
                     }                  
                }

        if (ratio > 1) { // width > height

            if ((divWidth >= width) && (height >= divHeight)) { //img w less than divW and h > divH
                $(this).attr("style","width:100%;height:auto"); // width set to 100%, height auto
                console.log("b")
                                        
            } else {
                $(this).removeAttr('style');                        
                $(this).attr("width", divHeight*ratio);
                $(this).attr("height", divHeight);                      
                console.log("a")
            }
        }

 });
}); 