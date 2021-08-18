$(document).ready(function(){ 
    $(".pinpoint").click(function(){
        var lang = ".lang-" + $(this).attr("id").substr(9,2);
        $(lang).toggleClass("activated-lang");
        if($("#pinpoint-en").hasClass("activated-lang")){
            ($("#pinpoint-en").removeClass("activated-lang"));
            ($("#pinpoint-en").addClass("activated-lang"));
        }
    });
    $(".land").click(function(){
        if($(this).hasClass("lang-en")){
            $("#pinpoint-en").click();
        }
    });

    //TBD: what to do when click country with multiple language ON MAP... select/deselect which?
});