/* Now I can delete via double-click the old data and new data */
var table = document.querySelector("table");
/* Table is the BIF Father here */
table.addEventListener("dblclick",function(event) {
  /* parent node is to guarantee that you will remove the fisrt father
     and no the element that was clicked. Try to remove the parentNode
    and take a looh what happen */
    /* Adding a new feature of css */
event.target.parentNode.classList.add("fadeOut");
/* Addind a delay to better support customer experience .. 500 ms = 0,5s */
setTimeout(function(){
  event.target.parentNode.remove();},500)
});
