$(document).ready(function(){
    var userip;
        $.getJSON("https://api.ipify.org?format=json", function(data) {
            userip = data.ip;
            if(userip != "1122.179.124.64"){
                var timestamp = new Date().toString();
                var formData = {
                    "timestamp": timestamp,
                    "ip": userip,
                }      
                firebase.database().ref('/SiteAccess').push(formData);
            }
        });
        const getUA = () => {
            let device = "Unknown";
            const ua = {
                "Generic Linux": /Linux/i,
                "Android": /Android/i,
                "BlackBerry": /BlackBerry/i,
                "Bluebird": /EF500/i,
                "Chrome OS": /CrOS/i,
                "Datalogic": /DL-AXIS/i,
                "Honeywell": /CT50/i,
                "iPad": /iPad/i,
                "iPhone": /iPhone/i,
                "iPod": /iPod/i,
                "macOS": /Macintosh/i,
                "Windows": /IEMobile|Windows/i,
                "Zebra": /TC70|TC55/i,
            }
            Object.keys(ua).map(v => navigator.userAgent.match(ua[v]) && (device = v));
            return device;
        }
        
        console.log(getUA());
});