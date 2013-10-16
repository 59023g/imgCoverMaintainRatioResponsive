// Realized this could be done with CSS.  Set min-height and min-width both to 100%. Then set height and width to 'auto'


window.onresize = function hippestRespond () {

    images = document.querySelectorAll('img, video');

    console.log(images)

    var h100 = 'height:100%;width:auto;';
    var w100 = 'width:100%;height:auto';

    for (i = 0; i < images.length; i++) {

        h = images[i].height;
        w = images[i].width;

        hV = images[i].videoHeight
        wV = images[i].videoWidth

        hDiv = images[i].offsetParent.clientHeight + 1;
        wDiv = images[i].offsetParent.clientWidth + 2;

        if (((wDiv / w) > (hDiv / h)) || ((wDiv / wV) > (hDiv / hV))) {
            images[i].removeAttribute("style")
            images[i].setAttribute("style", w100)
        } else {
            images[i].removeAttribute("style")
            images[i].setAttribute("style", h100)
        }
    }
}
