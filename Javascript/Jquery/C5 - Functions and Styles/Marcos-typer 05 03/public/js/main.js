/* Add margin text comparation */

var initialTime = $("#time-typing").text();
var field = $(".field-typing");

$(document).ready(function(){
    updateLengthText();
    initializeCounters();
    initializeTimer();
    /* new function added */
    initializeMarks();
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
    }
}, 1000);
});
}

/*Add and remove class to guarantee that the margin is ok */
function restartGame() {
    field.attr("disabled", false);
    field.val("");
    $("#count-words").text("0");
    $("#count-caracters").text("0");
    $("#time-typing").text(initialTime);
    initializeTimer();
    field.toggleClass("field-disable");
    /* Added to the previous code */
    field.removeClass("margin-red");
    field.removeClass("margin-green");

}

/* Add new function to support text comparation */
function initializeMarks() {
    var text = $(".text").text();
    field.on("input", function() {
        var typed = field.val();
        var comparable = text.substr(0 , typed.length);

        if(typed == comparable) {
            field.addClass("margin-green");
            field.removeClass("margin-red");
        } else {
            field.addClass("margin-red");
            field.removeClass("margin-green");
        }
    });
}
