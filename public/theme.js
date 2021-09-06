$(document).ready(function(){
    $("#theme-button").click(function(){
        $(document.body).toggleClass("theme-light");
        $(document.body).toggleClass("theme-dark");
    });
});