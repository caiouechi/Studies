var text = $(".text").text();
var numWords = text.split(" ").length;

var lengthText = $("#length-text");
lengthText.text(numWords);
console.log(lengthText);
