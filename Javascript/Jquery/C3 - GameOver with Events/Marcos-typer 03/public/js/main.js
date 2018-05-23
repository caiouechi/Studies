var text = $(".text").text();
var numWords = text.split(" ").length;
var lengthText = $("#length-text");
lengthText.text(numWords);

var field = $(".field-typing");
var timeLeft = $("#time-typing").text();

/* ON : INPUT */
field.on("input", function() {
var content = field.val();
var qtWords = content.split(/\S+/).length - 1;
    $("#count-words").text(qtWords);
    var qtCaracters = content.length;
    $("#count-caracters").text(qtCaracters);
});

/* ONE : FOCUS */
field.one("focus", function() {
var timerID = setInterval(function() {
    timeLeft--;
    $("#time-typing").text(timeLeft);
    if (timeLeft < 1) {
        field.attr("disabled", true);
        clearInterval(timerID);
    }
}, 1000);
});
