$(document).ready(function(){
   firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
  .then(() => {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  })
  .catch((error) => {
    // Handle Errors here.
    console.log(error.code);
    console.log(error.message);
  });
})