var firebaseConfig = {
    apiKey: "AIzaSyDIwnpvCJqPeOO7x1LCJ0I_t3-PJuRzBmY",
    authDomain: "seventhsky786.firebaseapp.com",
    databaseURL: "https://seventhsky786.firebaseio.com",
    projectId: "seventhsky786",
    storageBucket: "seventhsky786.appspot.com",
    messagingSenderId: "810681665524",
    appId: "1:810681665524:web:b32bf854943dfee19ddba1",
    measurementId: "G-5MV3LSVBVV"
};
var db = null;


$( document ).ready(function() {
    // Handler for .ready() called.
    firebase.initializeApp(firebaseConfig);
    db = firebase.firestore();

    $('.mentor_contact_us_form_response').hide();
    $('#mentor_contact_us_form').submit(function(e) {
        e.preventDefault();
        mentorContactUsFireBase();
        return false;
    }) ;

});


function mentorContactUsFireBase() {
    var data = {};
    $("#mentor_contact_us_form").serializeArray().map(function(x){data[x.name] = x.value;}); 
    console.log(data);
    console.log("saving mentor to firebase db")
    db.collection("mentors").add(data)
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
        $('.mentor_contact_us_form_wrapper').hide();
        $('.mentor_contact_us_form_response').show(); 
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
        alert("server error");
    });
}