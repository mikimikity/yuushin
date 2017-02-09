$(document).ready(function() {
    var $win = $(window),
        $header = $('header'),
        animationClass = 'is-animation';

    $win.on('load scroll', function() {
        var value = $(this).scrollTop();
    var off = $('section.news').offset();
        if ( value > off.top-100 ) {
            $header.addClass(animationClass);
        } else {
            $header.removeClass(animationClass);
        }
    });
});