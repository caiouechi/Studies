/* Pick up all patients */
/* Due the issue we faced related to remove new patients from the form,
   let's use the concept of Event Bubbling of javascript /*
/* It means that an event is been recognizez by all tag hirachy so if we
   add the event in the top father the listener we be recognized it means
  that we can move the listener to the table tag and ask after who was the
   son direct affected to ask to remove */
/* OLD CODE
var patients = document.querySelectorAll(".patient");
patients.forEach
(function(patient) {
  patient.addEventListener("dblclick",function(){
  console.log("I was clicked .. double click");
  this.remove();
});
}); */
/* Now I can delete via double-click the old data and new data */
var table = document.querySelector("table");
/* Table is the BIF Father here */
table.addEventListener("dblclick",function(event) {
  /* parent node is to guarantee that you will remove the fisrt father
     and no the element that was clicked. Try to remove the parentNode
    and take a looh what happen */
event.target.parentNode.remove();
});
