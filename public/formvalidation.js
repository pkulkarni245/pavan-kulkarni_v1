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

        
        const uname = $("#form-name").val();
        const uemail = $("#form-email").val();
        const usub = $("#form-sub").val();
        const umsg = " " + $("#form-msg").val();

        const rname = /^[\w'\-,.][^0-9_!¡?÷?¿\/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;
        const remail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const rsub = /[a-zA-Z]/;

        if(rname.test(uname) && remail.test(uemail) && rsub.test(usub)){
            var userip;
            $.getJSON("https://api.ipify.org?format=json", function(data) {
                userip = data.ip;
                var timestamp = new Date().toString();
                var formData = {
                    "timestamp": timestamp,
                    "email": uemail,
                    "name": uname,
                    "subject": usub,
                    "message": umsg,
                    "ip": userip,
                }      
                firebase.database().ref('/ContactFormResponses').push(formData);
                $("#contact-form").trigger("reset");
                $("#contact-form-submission-feedback").css("opacity","1");
                $("#contact-form-submission-feedback").html("Your response has been recorded successfully!");
            });
        }
        else{
            $("#contact-form-submission-feedback").css("opacity","1");
            $("#contact-form-submission-feedback").html("Some errors exist in your form submission:<br>");
            if(!rname.test(uname))
                $("#contact-form-submission-feedback").html($("#contact-form-submission-feedback").html() + "Invalid Name <br>");
            if(!remail.test(uemail))
                $("#contact-form-submission-feedback").html($("#contact-form-submission-feedback").html() + "Invalid Email <br>");
            if(!rsub.test(usub))
                $("#contact-form-submission-feedback").html($("#contact-form-submission-feedback").html() + "Invalid Subject");
        }


        
        
    });
});