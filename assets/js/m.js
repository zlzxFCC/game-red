(function() {
    function preloadimages(obj, cb) {
        var loaded = 0;
        var toload = 0;
        var images = obj instanceof Array ? [] : {};

        for (var i in obj) {
            toload++;
            images[i] = new Image();
            images[i].onload = load;
            images[i].onerror = load;
            images[i].onabort = load;
            images[i].src = obj[i];
        }

        function load() {
            if (++loaded >= toload) cb(images);
        }
    }

    var game = {
        $el: {
            "container": $("#game"),
            "view": $("#view"),
            "control": $("#control"),
            "index": $("#index"),
            "gameover": $("#gameover"),
            "score": $("#score"),
            "arrow" : $(".arrow")
        },
        init: function() {
             $(".grid").show();
             this.initEvent();
        },
        initEvent:function(){
            // touchstart
            var tap = ( !! ('ontouchstart' in window || window.DocumentTouch && document instanceof DocumentTouch)) ? "click" : "click";
            $("#btn-start").on(tap, function(e) {
                $("#over").show();
                var getData=0;
                if(getData){
                     $(".scuess").show();
                }else{
                    $(".fail").show();
                }
            });
        },
        getRed:function() {
            $.ajax({
                type: "GET",
                url: "",
                success: function(data) {

                },
                error: function(data) {}
            });
        }
    }

    var imgList = ['assets/img/bg.png'];
    preloadimages(imgList, function() {
        $(".loading").hide();
        game.init();
    });

})(window);
