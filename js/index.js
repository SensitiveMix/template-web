/**
 * Created by sunNode on 16/7/28.
 */
(function ($) {
    hrWeb=function () {
        this.init();
    };
    $.extend(hrWeb.prototype,{
        init:function () {
            this.queue=new createjs.LoadQueue(true);
            this.loadImage();
        },
        loadImage:function () {
            var self=this;
            self.queue.on('progress',function () {
                var per=Math.ceil(self.queue.progress*100);
                // self.$loading_p
            });
            self.queue.on('complete',function () {
                $.each(PRELOAD_MANIFEST.manifest, function(i, n) {
                    var el = $('#' + n.id);
                    if(el.length > 0) {
                        el.attr('src', n.src);
                    }
                });
                self.start();
            });
            self.queue.loadManifest(PRELOAD_MANIFEST)
        },
        start:function () {
            
            // var script = document.createElement("script");
            // script.src = "js/build/final.js";
            // script.type="text/javascript";
            // document.body.appendChild(script);
        }
    })
})(jQuery);

$(function () {
    var hrweb=new hrWeb();

});