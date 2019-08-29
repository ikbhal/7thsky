console.log("inside main.js");
// TODO import jquery cdn in index.html

// TODO onready function
$( document ).ready(function() {
    // Handler for .ready() called.
    $('.contact_us_form_response').hide();
    $('#contact_us_form').submit(function(e) {
        contactUs();
        return false;
    }) ;
});
function contactUs() {
    var data = {};
    $("#contact_us_form").serializeArray().map(function(x){data[x.name] = x.value;}); 
    console.log(data);

    $.ajax({
        url: '/contact_us',
        type: 'post',
        dataType: 'json',
        contentType: 'application/json',
        success: function (data) {
            console.log("contact us response ", data);
            if(data && data.hasOwnPropery('ok')){            
                $('.contact_us_form_wrapper').hide();
                $('.contact_us_form_response').show(); 
            } else {
                // TODO create div 
                alert("server error");
            }
        },
        data: JSON.stringify(data)
    });
}