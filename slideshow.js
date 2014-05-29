var slideshow = slideshow || {};

(function () {

    $(document).ready(function () {
        slideshow.init();
    });

    slideshow.nowPage = 0;
    slideshow.pageDiv = [];
    slideshow.easingSpeed = 300;
    slideshow.easingType = "swing";

    slideshow.init = function () {
        $("#slideshow > div ").each(function (i, ele) {
            slideshow.pageDiv.push($(ele));
            $(ele).css({"left": "100%"});

        });
        slideshow.pageDiv[slideshow.nowPage].css({"left": "0"});


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
        slideshow.changeSlide(slideshow.nowPage - 2);
    }

    //
    slideshow.changeSlide = function (target) {
        // 範囲外であればリターン
        if (target < 0 || slideshow.pageDiv.length <= target) {
            return;
        }

        // 次のスライドに移動する時(左にスライド)
        if (target > slideshow.nowPage) {
            // 現在のスライドからターゲットまでを全部左に移動
            for (var i=slideshow.nowPage+1; i < target; ++i) {
                slideshow.pageDiv[i].css({"left": "-100%"})
            }
            // 次のスライドの移動
            slideshow.pageDiv[target].animate(
                {"left": "0"},
                {
                    duration: slideshow.easingSpeed,
                    easing: slideshow.easingType,
                });
            // 今のスライドの移動
            slideshow.pageDiv[slideshow.nowPage].animate(
                {"left": "-100%"},
                {
                    duration: slideshow.easingSpeed,
                    easing: slideshow.easingType,
                });

        // 前のスライドに移動する時(右にスライド)
        } else if(target < slideshow.nowPage){
            // 現在のスライドからターゲットまでを全部右に移動
            for (var i=target+1; i < slideshow.nowPage; ++i) {
                slideshow.pageDiv[i].css({"left": "100%"})
            }
            // 次のスライドの移動
            slideshow.pageDiv[target].animate(
                {"left": "0"},
                {
                    duration: slideshow.easingSpeed,
                    easing: slideshow.easingType,
                });
            // 今のスライドの移動
            slideshow.pageDiv[slideshow.nowPage].animate(
                {"left": "100%"},
                {
                    duration: slideshow.easingSpeed,
                    easing: slideshow.easingType,
                });
        }
        slideshow.nowPage = target;
}

})();
