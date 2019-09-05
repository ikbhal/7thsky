console.log("inside main.js");
// TODO import jquery cdn in index.html

// TODO onready function
$( document ).ready(function() {
    // Handler for .ready() called.
    $('.student_contact_us_form_response').hide();
    $('.coach_contact_us_form_response').hide();
    $('#student_contact_us_form').submit(function(e) {
        studentContactUs();
        return false;
    }) ;

    $('#coach_contact_us_form').submit(function(e) {
        coachContactUs();
        return false;
    }) ;


});
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