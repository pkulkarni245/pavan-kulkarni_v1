var firebaseConfig = {
    apiKey: "AIzaSyCvprGFV_-tN_LEKbTdLr7uvEfmAsJZeyA",
    authDomain: "pavan-kulkarni.firebaseapp.com",
    databaseURL: "https://pavan-kulkarni-default-rtdb.firebaseio.com",
    projectId: "pavan-kulkarni",
    storageBucket: "pavan-kulkarni.appspot.com",
    messagingSenderId: "546347754230",
    appId: "1:546347754230:web:1ced2cea4feba4ddac82d7",
    measurementId: "G-T1SE1X3ZXZ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
var database = firebase.database();