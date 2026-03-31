$(document).ready(function() {
    var $parallaxElements = $('.icons-for-parallax img');
    var $logo = $('.logo');
    
    $parallaxElements.each(function(index) {
        $(this).data('startTop', $(this).position().top);
    });
    
    $(window).scroll(function() {
        var scrolled = $(window).scrollTop();
        var maxScroll = 400;
        var limitedScroll = Math.min(scrolled, maxScroll);
        
        $parallaxElements.each(function(index) {
            var speed = 0.25 + (index * 0.15);
            var yPosition = -limitedScroll * speed;
            var maxY = 350;
            var finalY = Math.max(yPosition, -maxY);
            $(this).css('transform', 'translateX(-50%) translateY(' + finalY + 'px)');
        });
        
        var logoSpeed = 0.08;
        var logoY = -limitedScroll * logoSpeed;
        var maxLogoY = 50;
        var finalLogoY = Math.max(logoY, -maxLogoY);
        $logo.css('transform', 'translateY(' + finalLogoY + 'px)');
    });
    
    $(window).trigger('scroll');
});