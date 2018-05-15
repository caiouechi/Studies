/* Pick up all patients */
var patients = document.querySelectorAll(".patient");
patients.forEach
(function(patient) {
  patient.addEventListener("dblclick",function(){
  console.log("I have clicked .. actually double click");
  /* This represents who was impacted by the event */
  this.remove();
});
});
