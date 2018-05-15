/* Adding a click listener on top of my form "add new patient "
    here we are using anonymous function and a native funcion named
      event.preventDefault() that override the standard behaviour of forms
       " Clen the form + send data to another wegb page "  */

var buttonAdd = document.querySelector("#add-patient");

buttonAdd.addEventListener("click", function(event) {

      /* Override the standard behaviour of forms */
     event.preventDefault();

     /* Using querySelector and the property name of HTML to read the TAG content */
     var form   = document.querySelector("#form-add");

    /* Using a new function defined */
     var patient = formDataPatient(form)

     /* Console to track the patient data reading */
     console.log(patient.name);
     console.log(patient.weight);
     console.log(patient.height);
     console.log(patient.fat);
     console.log(patient.bmi);

     /* How to create a new <tr> and a new <td> using createElement */
     var patientTr = document.createElement("tr");
     var nameTd    = document.createElement("td");
     var weightTd  = document.createElement("td");
     var heightTd  = document.createElement("td");
     var fatTd     = document.createElement("td");
     var bmiTd     = document.createElement("td");

     /* Assing to the TAG component the values retrieved */
     nameTd.textContent   = name;
     weightTd.textContent = weight;
     heightTd.textContent = height;
     fatTd.textContent    = fat;
     /* reusing the new function bmiCalculation */
     bmiTd.textContent    = bmiCalculation (weight,height);

     console.log(nameTd);


     /* How to create a father-child relationship <tr> and <td> using appendChild */
     patientTr.appendChild(nameTd);
     patientTr.appendChild(weightTd);
     patientTr.appendChild(heightTd);
     patientTr.appendChild(fatTd);
     patientTr.appendChild(bmiTd);

     /* Let's prepare the new append ( TR + TABLE )  */
     var table = document.querySelector("#table-patients");

     /* How to create a father-child relationship <table> and <tr> using appendChild */
     table.appendChild(patientTr);

});

/* Adding a new function and introducing the object concept */
function formDataPatient (form) {

  /* Patient object defintion */
  var patient = {
  name: form.name.value,
  weight: form.weight.value,
  height: form.height.value,
  fat: form.fat.value,
  bmi: bmiCalculation(form.weight.value, form.height.value) }

  return patient

}
