$(document).ready(function(){ 
    $(".pinpoint").click(function(){
        var lang = $(this).attr("id").substr(9,2);
        if(lang === "hi" || lang === "kn" || lang === "ma")
            lang = "in";
        $(".lang-" + lang).toggleClass("activated-" + lang);
    });
    $(".land").click(function(){
        if($(this).hasClass("lang-en")){
            $("#pinpoint-en").click();
        }
        if($(this).hasClass("lang-fr")){
            $("#pinpoint-fr").click();
        }
        if($(this).hasClass("lang-de")){
            $("#pinpoint-de").click();
        }
        if($(this).hasClass("lang-es")){
            $("#pinpoint-es").click();
        }
        if($(this).hasClass("lang-in")){
            $("#pinpoint-hi").click();
        }
    });
    //Tooltip Function
    $(".land").mouseover(function(){
        var ttText = $(this).attr("title");
        var ttEle = $("#world-map-tooltip");
        ttEle.text($(this).attr("title"));
        /*var left = $(this).pageX - $(this).offset().left + 100;
        var top = $(this).pageY - $(this).offset().top + 130;*/
        ttEle.css("left", event.pageX + 10);
        ttEle.css("top", event.pageY + 10);
        ttEle.css("display","block");
    });
    $(".land").mouseout(function(){
        var ttEle = $("#world-map-tooltip");
        ttEle.css("display","none");
    });
});