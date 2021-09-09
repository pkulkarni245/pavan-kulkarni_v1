$(document).ready(function(){
    const table = "/SiteViews";
    var lastAccess = "unknown";
    var lastIP = "unknown";
    var lastUID = "unknown";
    var lastVersion = "unknown";
    if(localStorage.lastAccess)
        lastAccess = localStorage.lastAccess;
    if(localStorage.lastIP)
        lastIP = localStorage.lastIP;
    if(localStorage.lastUID)
        lastUID = localStorage.lastUID;
    if(localStorage.lastVersion)
        lastVersion = localStorage.lastVersion;
    var deviceName;
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
    deviceName= getUA();
    $.getJSON("https://api.ipify.org?format=json", function(data) {
        $.getJSON("http://ip-api.com/json/" + data.ip, function(datadetails){
            var timestamp = new Date().toString();
            var vNo = $("#versionNumber").text().substring(1);
            var formData = {
                "timestamp": timestamp,
                "ip": data.ip,
                "version" : vNo,
                "last_ip" : lastIP,
                "last_access" : lastAccess,
                "last_uid" : lastUID,
                "last_version" : lastVersion,
                "device": deviceName,
                "city" : datadetails.city,
                "country" : datadetails.country,
                "ip_latitude" : datadetails.latitude,
                "ip_longitude" : datadetails.longitude,
                "permission" : "pre",
                "latitude" : "unknown",
                "longitude" : "unknown",
            }      
            localStorage.setItem("lastIP",data.ip);
            localStorage.setItem("lastAccess",timestamp);
            localStorage.setItem("lastVersion",vNo);
            const firebaseuid = firebase.database().ref(tableRef).push(formData).key;
            localStorage.setItem("lastUID", firebaseuid);
        });
    });
    
    tableRef = firebase.database().ref(table);

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(locdata){
            var lat = locdata.coords.latitude;
            var long = locdata.coords.longitude;
            tableRef.child(localStorage.lastUID).update({"latitude" : lat});
            tableRef.child(localStorage.lastUID).update({"longitude" : long});
            tableRef.child(localStorage.lastUID).update({"permission" : "allowed"});
        }, function(){
            tableRef.child(localStorage.lastUID).update({"permission" : "blocked"});
        });
    } else {
        tableRef.child(localStorage.lastUID).update({"permission" : "unsupported"});
    }

    
});