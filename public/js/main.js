console.log("inside main.js");
// TODO import jquery cdn in index.html

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

// TODO onready function
$( document ).ready(function() {
    // Handler for .ready() called.
    $('.student_contact_us_form_response').hide();
    $('#student_contact_us_form').submit(function(e) {
        //studentContactUs();
        studentContactUsFireBase();
        return false;
    }) ;

});


function studentContactUsFireBase() {
    var data = {};
    $("#student_contact_us_form").serializeArray().map(function(x){data[x.name] = x.value;}); 
    console.log(data);
    console.log("saving students to firebase db")
    db.collection("students").add(data)
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
        $('.student_contact_us_form_wrapper').hide();
        $('.student_contact_us_form_response').show(); 
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
        alert("server error");
    });
}

function studentContactUs() {
    var data = {};
    $("#student_contact_us_form").serializeArray().map(function(x){data[x.name] = x.value;}); 
    console.log(data);

    $.ajax({
        url: '/student_contact_us',
        type: 'post',
        dataType: 'json',
        contentType: 'application/json',
        success: function (data) {
            console.log("contact us response ", data);
            if(data && data.hasOwnPropery('ok')){            
                $('.student_contact_us_form_wrapper').hide();
                $('.student_contact_us_form_response').show(); 
            } else {
                // TODO create div 
                alert("server error");
            }
        },
        data: JSON.stringify(data)
    });
}

function coachContactUs() {
    var data = {};
    $("#coach_contact_us_form").serializeArray().map(function(x){data[x.name] = x.value;}); 
    console.log(data);

    $.ajax({
        url: '/coach_contact_us',
        type: 'post',
        dataType: 'json',
        contentType: 'application/json',
        success: function (data) {
            console.log("contact us response ", data);
            if(data && data.hasOwnPropery('ok')){            
                $('.coach_contact_us_form_wrapper').hide();
                $('.coach_contact_us_form_response').show(); 
            } else {
                alert("server error");
            }
        },
        data: JSON.stringify(data)
    });
}