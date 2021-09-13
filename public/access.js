$(document).ready(function(){
    const table = "/SiteViews_Testing";
    var lastUID = "unknown";
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
    deviceName = getUA();
    $.getJSON("https://ipapi.co/json", function(data){
        var timestamp = new Date().toString();
        var vNo = $("#versionNumber").text().substring(1);
        var url = window.location.href;
        var formData = {
            "timestamp": timestamp,
            "ip": data.ip,
            "url" : url,
            "version" : vNo,
            "last_uid" : lastUID,
            "device": deviceName,
            "city" : data.city,
            "country" : data.country_name,
        }      
        localStorage.setItem("lastIP",data.ip);
        localStorage.setItem("lastAccess",timestamp);
        localStorage.setItem("lastVersion",vNo);
        const firebaseuid = firebase.database().ref(tableRef).push(formData).key;
        localStorage.setItem("lastUID", firebaseuid);
    });
    
    tableRef = firebase.database().ref(table); 
});