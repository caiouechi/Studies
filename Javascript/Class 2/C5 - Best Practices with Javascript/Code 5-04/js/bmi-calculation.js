/* Using querySelector to access and change a static text
    and adding a feature to calcule que BMI of all patients and validate  data-ranges   */

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

      /* Creating a function to encapsulate logics */
      if (weightValid && heightValid){
          var bmi = bmiCalculation (weight,height);
          tdBmi.textContent = bmi;
      }

    }

    /* Function Definition */
    function bmiCalculation (weight,height) {
      var bmi = 0;
      bmi = weight / (height * height);
      return bmi.toFixed(2);
    }
