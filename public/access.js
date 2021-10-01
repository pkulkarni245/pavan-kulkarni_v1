$(document).ready(function(){
    const table = "/SiteViews";
    var lastUID = "unknown";
    if(localStorage.lastUID)
        lastUID = localStorage.lastUID;
    var timestamp = new Date().toString();
    var vNo = $("#versionNumber").text().substring(1);
    var url = window.location.href;
    var formData = {
        "timestamp": timestamp,
        "url" : url,
        "version" : vNo,
        "last_uid" : lastUID,
    }      
    const firebaseuid = firebase.database().ref(table).push(formData).key;
    localStorage.setItem("lastUID", firebaseuid);
    
    tableRef = firebase.database().ref(table); 
});