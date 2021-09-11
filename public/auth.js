$(document).ready(function(){
   firebase.auth().signInAnonymously()
   .then(function() {
      console.log('Logged in as Anonymous!')
      
      }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
   });
});