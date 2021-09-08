$(document).ready(function(){
    var userip;
        $.getJSON("https://api.ipify.org?format=json", function(data) {
            userip = data.ip;
            if(userip != "122.179.124.64"){
                var timestamp = new Date().toString();
                var formData = {
                    "timestamp": timestamp,
                    "ip": userip,
                }      
                firebase.database().ref('/SiteAccess').push(formData);
            }
        });
});