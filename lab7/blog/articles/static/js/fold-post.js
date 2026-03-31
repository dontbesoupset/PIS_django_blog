
var foldBtns = document.getElementsByClassName("fold-button");

for (var i = 0; i < foldBtns.length; i++) {
    foldBtns[i].addEventListener("click", function(e) {    
        var post = e.target.parentElement;
        
        if (post.className.indexOf("folded") > -1) {
            // Развернуть
            e.target.innerHTML = "свернуть";
            post.className = "one-post";
        } else {
            // Свернуть
            e.target.innerHTML = "развернуть";
            post.className = "one-post folded";
        }
    });
}