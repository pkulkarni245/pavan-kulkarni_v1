$(document).ready(function(){ 
    $("#contact-form").submit(function(evt){
        evt.preventDefault(); //Prevent the default form submit action
        /*
        evt.preventDefault(); //Prevent the default form submit action
        var uname = " ";
        var uemail = " ";
        var usub = " ";
        var umsg = " ";
        uname = $("#form-name").val();
        uemail = $("#form-email").val();
        usub = $("#form-sub").val();
        umsg = $("#form-msg").val();
        var emailregex = /^(([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}){1,25})+([;.](([a-zA-Z0-9_\-\.]+)@{[a-zA-Z0-9_\-\.]+0\.([a-zA-Z]{2,5}){1,25})+)*$/;
        var othregex = /^[a-zA-Z][a-zA-Z\\s]+$/;
        if(emailregex.test(uemail) != null && othregex.test(uname) != null && othregex.test(usub) !=null){
            var formData = {
                "name": uname,
                "email": uemail,
                "subject": usub,
                "message": umsg,
            }
    
                firebase.database().ref('/ContactFormResponses').push( formData );
                $("#contact-form").trigger("reset");
                $("#contact-form-submission-feedback").css("display","block");
                $("contact-form-submission-feedback").text("Your response has been recorded successfully!");
        }
        else {
            $("#contact-form-submission-feedback").css("display","block");
            $("contact-form-submission-feedback").text("There are errors in your form. Please check and try again.");
        }
        //*/
        var userip;
        $.getJSON("https://api.ipify.org?format=json", function(data) {
  
            // Setting text of element P with id gfg
            userip = data.ip;
            var timestamp = new Date().toString();
            var formData = {
                "timestamp": timestamp,
                "email": $('#form-email').val(),
                "name": $('#form-name').val(),
                "subject": $('#form-subject').val(),
                "message": $('#form-message').val(),
                "ip": userip,
            }      

            firebase.database().ref('/ContactFormResponses').push( formData );
            $("#contact-form").trigger("reset");
            $("#contact-form-submission-feedback").css("display","block");
            $("#contact-form-submission-feedback").html("Your response has been recorded successfully!");
        })
        
    });
});