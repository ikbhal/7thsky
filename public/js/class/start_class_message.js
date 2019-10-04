var classReadyPromptInMinutes = 1;
$( document ).ready(function() {    
    console.log( "timer .js code!" );
    setTimeout(startClass, classReadyPromptInMinutes  * 1000);
});

function startClass(){
    alert("Hi welcome to class\n " + 
        "Please follow todo list\n " +
        "1) Record video -> Upload to Youtube \n " + 
        "2) Give Challenge\n " +
        "3) Learning links(tutorials) \n " + 
        "4) Upload to GitHub 7thsky Assignments. \n" +
        ">>class will close in 30 minutes.");
}
