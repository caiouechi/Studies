var text = $(".text").text();
var numWords = text.split(" ").length;

var lengthText = $("#length-text");
lengthText.text(numWords);

var field = $(".field-typing");
field.on("input", function() {
var content = field.val();

  /* Version 1:*/  //var qtWords = content.split(" ").length - 1;

  /* "/\S+/": To be more precise
      in counting, we will use a regular expression
      instead of empty space. The regular expression
      will be responsible for fetching any character,
      except empty space */

  /* Version 2: var qtWords = content.split(/\S+/).length - 1; */

     var qtWords = content.split(/\S+/).length - 1;

    $("#count-words").text(qtWords);

    var qtCaracters = content.length;
    $("#count-caracters").text(qtCaracters);
});
