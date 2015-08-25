require.config({
    paths: {
        jquery:'//cdn.bootcss.com/jquery/2.1.4/jquery.min',
        video:'//cdn.bootcss.com/video.js/4.12.8/lang/zh-CN',
        lodash:'js/lodash',
        a:'a'
    }
});

require(['jquery','video','a',_],function($,v,a,_) {
   console.log($().jquery);
            $('body').css({
                'background-color':'blue'
            });

});