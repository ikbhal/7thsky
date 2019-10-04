var classClosingInMinutes = 30;
$( document ).ready(function() {    
    console.log( "class end .js code!" );
    setTimeout(closeClass, classClosingInMinutes  * 1000);
});

function closeClass(){
    socket.emit("class_end", $("#editArea").val());
    alert("closing class\n " + 
        "Please join next class 7am vikki, 6.30pm muneer\n " +
        "All the best\n " 
        );
    location.replace("http://7thsky.in/class_end.html");
}
