  var title = document.querySelector(".title");
  title.textContent = "Markos Nutrition Clinic";

  var patients = document.querySelectorAll(".patient");

  for (var i = 0; i < patients.length; i++) {

      var patient = patients[i];
      var tdWeight = patient.querySelector(".info-weight");
      var weight   = tdWeight.textContent;
      var tdHeight = patient.querySelector(".info-height");
      var height   = tdHeight.textContent;
      var tdBmi    = patient.querySelector(".info-bmi");

      /* Logical Operators */
      var weightValid = true;
      var heightValid = true;

      if (weight <= 0 || weight >= 1000) {
          console.log("Invalid weight!");
          weightValid = false;
          tdBmi.textContent = "Invalid weight!";
          /* Change the color via CSS */
          patient.classList.add("patient-invalid");
      }

      if (height <= 0 || height >= 3.00){
          console.log("Invalid height!");
          heightValid = false;
          tdBmi.textContent = "Invalid height!";
          /* Change the color via CSS */
          patient.classList.add("patient-invalid");

      }

      if (weightValid && heightValid){
          var bmi = weight / (height * height);
          tdBmi.textContent = bmi.toFixed(2);
      }

    }

    /* Adding a click listener on top of my form "add new patient "
        here we are using anonymous function and a native funcion named
          event.preventDefault() that override the standard behaviour of forms
           " Clen the form + send data to another wegb page "  */
    var buttonAdd = document.querySelector("#add-patient");
    buttonAdd.addEventListener("click", function(event) {
        event.preventDefault();

         var form   = document.querySelector("#form-add");
         var name   = form.name.value;
         var weight = form.weight.value;
         var height = form.height.value;
         var fat    = form.fat.value;

         /* How to create a new <tr> and a new <td> using appendChild */

         var patientTr = document.createElement("tr");

         var nameTd   = document.createElement("td");
         var weightTd = document.createElement("td");
         var heightTd = document.createElement("td");
         var fatTd    = document.createElement("td");
         var bmiTd    = document.createElement("td");

         nameTd.textContent   = name;
         weightTd.textContent = weight;
         heightTd.textContent = height;
         fatTd.textContent    = fat;

         patientTr.appendChild(nameTd);
         patientTr.appendChild(weightTd);
         patientTr.appendChild(heightTd);
         patientTr.appendChild(fatTd);

         var table = document.querySelector("#table-patients");

         table.appendChild(patientTr);

    });
