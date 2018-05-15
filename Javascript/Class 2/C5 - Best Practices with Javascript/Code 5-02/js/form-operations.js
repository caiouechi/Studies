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
     var name   = form.name.value;
     var weight = form.weight.value;
     var height = form.height.value;
     var fat    = form.fat.value;

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
