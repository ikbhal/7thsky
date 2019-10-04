var classReadyPromptInMinutes = 1;
$( document ).ready(function() {    
    console.log( "timer .js code!" );
    setTimeout(startClass, classReadyPromptInMinutes  * 1000);
});

function startClass(){
    alert("Hi welcome to class\n " + 
        "Please follow todo list\n " +
        "1)ready with challenge\n " +
        "2)learning material \n " + 
        "3)record video \n " + 
        "4) upload to youtube \n" +
        "5)upload to github. \n" +
        " class will close in 30 minutes.");
}
