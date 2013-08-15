$(window).on("load resize", function() {

	var div = $('div');
	var divHeight = $(div).height();
   	var divWidth  = $(div).width();

   	 $('img').each(function hipperRespond() {

        var height = $(this).height();  // Current image height
        var width  = $(this).width();    // Current image width
        var ratio  = width/height; 

        var image = [height,width,ratio];

    	if ((divWidth >= image[1]) ||  (image[1] < divWidth)){
    		$(this).css("width","100%");
    	} 

    	if (divHeight >= image[0]) {
    		$(this).attr("height", divHeight);
    		$(this).attr("width", divHeight * ratio);
    	}

    	if (divHeight < image[0]) {
    		$(this).removeAttr("height");
    		$(this).removeAttr("width");
    	}

    	if (image[0] < divHeight){
    		$(this).removeAttr('style');
    	}


 	 });
}); 