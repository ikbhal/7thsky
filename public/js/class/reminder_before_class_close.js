//var classCloseRemindMinters = 25;
var classCloseRemindMinters = 1;

$(document).ready(function() {
  console.log("class close reminder .js code!");
  setTimeout(windupClass, classCloseRemindMinters * 60 * 1000);
});

function windupClass() {
  alert("Please windup class, will close in 5 minutes");
}
