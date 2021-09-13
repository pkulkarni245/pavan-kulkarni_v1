$.getJSON("https://api.github.com/repos/pkulkarni245/profile/git/refs/heads/main", function(data) {
    $.getJSON(data.object.url, function(commitData) {
        var vData = commitData.message;
        var idx = vData.indexOf("\n");
        $("#versionNumber").text(commitData.message.substring(0, idx));
    });
});
$(document).ready(function(){ 
    $(this).scrollTop(0);
    setTimeout(function(){
        $('body').addClass('loaded');
        $('body').css('overflow-y','scroll');
    }, 1000);
    bttButton = document.querySelector('#back-to-top');
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            bttButton.style.visibility = 'visible';
        } else { 
            bttButton.style.visibility = 'hidden';
        } 
    }); 
    $(".btn-modal-close").click(function(){
        var modalID = "#" + $(this).attr("data-close-id");
        $(modalID).css("display","none");
    });

    //Tooltip Function
    $(".tt").mouseover(function(){
        var ttEle = $("#general-tooltip");
        ttEle.text($(this).attr("data-tttext"));
        ttEle.css("left", event.pageX - 50);
        /*if($(this).attr("data-ttpos") == "left")
            ttEle.css("left", event.pageX - 50);*/
        ttEle.css("top", event.pageY + 20);
        ttEle.toggleClass("tt-activated");
    });
    $(".tt").mouseout(function(){
        var ttEle = $("#general-tooltip");
        ttEle.toggleClass("tt-activated");
    });

    $("#btn-404").click(function(){
      window.location = "index.html";
    });
    

    
});


document.addEventListener("DOMContentLoaded", function(){

    var el_autohide = document.querySelector('.autohide');
    
  
    if(el_autohide){
      var last_scroll_top = 0;
      window.addEventListener('scroll', function() {
            let scroll_top = window.scrollY;
           if(scroll_top < last_scroll_top) {
                el_autohide.classList.remove('scrolled-down');
                el_autohide.classList.add('scrolled-up');
            }
            else {
                el_autohide.classList.remove('scrolled-up');
                el_autohide.classList.add('scrolled-down');
            }
            last_scroll_top = scroll_top;
      }); 
      // window.addEventListener
    }
    // if
  
  });