// highlight-post.js - подсветка постов при наведении

$(document).ready(function(){
    $('.one-post').hover(
        function(event){
            // Навели курсор
            $(event.currentTarget).find('.one-post-shadow').animate({opacity: '0.2'}, 300);
        },
        function(event){
            // Убрали курсор
            $(event.currentTarget).find('.one-post-shadow').animate({opacity: '0'}, 300);
        }
    );

    $('.logo').hover(
        function(){
            $(this).animate({width: '338px'}, 300); 
        },
        function(){
            $(this).animate({width: '318px'}, 300);
        }
    );
});