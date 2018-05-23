/* Lets add a new feature and refactor the code that we have until here */

/* Let's save the initial to support the restartGame */
var initialTime = $("#time-typing").text();
var field = $(".field-typing");

/* NEW CONCEPT: INITIALIZE ALL FUNCTIONS */
$(document).ready(function(){
    updateLengthText();
    initializeCounters();
    initializeTimer();
    $("#button-restart").click(restartGame);

});

/* CODE REFACTOR */
function updateLengthText() {
var text = $(".text").text();
var numWords = text.split(" ").length;
var lengthText = $("#length-text");
lengthText.text(numWords);
}

/* CODE REFACTOR */
function initializeCounters() {
field.on("input", function() {
var content = field.val();
var qtWords = content.split(/\S+/).length - 1;
    $("#count-words").text(qtWords);
    var qtCaracters = content.length;
    $("#count-caracters").text(qtCaracters);
});
}

/* CODE REFACTOR */
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
        field.addClass("field-disable");
    }
}, 1000);
});
}

function restartGame(){
    field.attr("disabled", false);
    field.val("");
    $("#count-words").text("0");
    $("#count-caracters").text("0");
    $("#time-typing").text(initialTime);
    initializeTimer();
    field.removeClass("field-disable");

}
