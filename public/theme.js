$(document).ready(function(){
    if(localStorage.getItem('theme') == "theme-light"){
        $(document.body).toggleClass("theme-light");
        $(document.body).toggleClass("theme-dark");
    }        
    $("#theme-button").click(function(){
        $(document.body).toggleClass("theme-light");
        $(document.body).toggleClass("theme-dark");
        localStorage.setItem('theme', $(document.body).attr("class").substring(7));
    });
});