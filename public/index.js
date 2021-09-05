$(document).ready(function(){ 
    $(this).scrollTop(0);
    setTimeout(function(){
        $('body').addClass('loaded');
        $('body').css('overflow-y','scroll')
    }, 1000);
    bttButton = document.querySelector('#back-to-top');
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            bttButton.style.visibility = 'visible';
        } else { 
            bttButton.style.visibility = 'hidden';
        } 
    }); 

    $("#btn-404").click(function(){
      window.location = "https://pkulkarni245.github.io";
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