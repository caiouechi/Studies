/* Let's use the NEW CONCEPT ... toggleClass()
   you dont have to be worried if the class was added or removed */

var initialTime = $("#time-typing").text();
var field = $(".field-typing");

$(document).ready(function(){
    updateLengthText();
    initializeCounters();
    initializeTimer();
    $("#button-restart").click(restartGame);

});

function updateLengthText() {
var text = $(".text").text();
var numWords = text.split(" ").length;
var lengthText = $("#length-text");
lengthText.text(numWords);
}

function initializeCounters() {
field.on("input", function() {
var content = field.val();
var qtWords = content.split(/\S+/).length - 1;
    $("#count-words").text(qtWords);
    var qtCaracters = content.length;
    $("#count-caracters").text(qtCaracters);
});
}

function initializeTimer() {
var timeLeft = $("#time-typing").text();
field.one("focus", function() {
var timerID = setInterval(function() {
    timeLeft--;
    $("#time-typing").text(timeLeft);
    if (timeLeft < 1) {
        field.attr("disabled", true);
        clearInterval(timerID);
        /* Added to desable the text area after time out */
        field.toggleClass("field-disable");
        console.log("field.toggleClass(field-disable)");
    }
}, 1000);
});
}

function restartGame() {
    field.attr("disabled", false);
    field.val("");
    $("#count-words").text("0");
    $("#count-caracters").text("0");
    $("#time-typing").text(initialTime);
    initializeTimer();
    field.toggleClass("field-disable");
    console.log("field.toggleClass(field-disable)");


}
