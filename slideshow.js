var slideshow = slideshow || {};

(function () {

    $(document).ready(function () {
        slideshow.init();
    });

    slideshow.nowPage = 0;
    slideshow.pageDiv = [];

    slideshow.init = function () {
        $("#slideshow > div ").each(function (i, ele) {
            slideshow.pageDiv.push($(ele));
            $(ele).hide();
        });
        slideshow.pageDiv[slideshow.nowPage].show();

        $("#next").on('click',function(){
            slideshow.next();
        });
        $("#prev").on('click', function(){
            slideshow.prev();
        });
    };

    slideshow.next = function () {
        slideshow.changeSlide(slideshow.nowPage + 1);
    }
    slideshow.prev = function () {
        slideshow.changeSlide(slideshow.nowPage - 1);
    }

    slideshow.changeSlide = function (target) {
        if (target >= 0 && target < slideshow.pageDiv.length) {
            slideshow.pageDiv[slideshow.nowPage].hide();
            slideshow.pageDiv[target].show();
            slideshow.nowPage = target;
        }
    }

})();
