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

  /* Adding a function to check if patient is valid to be added
  if not code-scaping will happen for the listener  */
  /*if (!patientValidation(patient)) {
  alert("Invalid Patient")
  return;
}*/
/* Change the function to increase the customer experience */
var errors = patientValidation(patient)
console.log(errors);
if (errors.length > 0) {
  showErrorMessages(errors)
  return;
}

/* Using a new function defined to define a td +td */
var patientTr = buildTr(patient)
console.log(patientTr);

/* Let's prepare the new append ( TR + TABLE )  */
var table = document.querySelector("#table-patients");

/* How to create a father-child relationship <table> and <tr> using appendChild */
table.appendChild(patientTr);

/* Return the behaviour of a standard form ... It means clear form data after all tasks*/
form.reset();

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

  /* Adding a new function to encapsulate tr + td creation */

  function buildTr(patient) {
    var patientTr = document.createElement("tr");

    /* Adding the class into the new <tr> created */
    patientTr.classList.add("patient");

    /* Adding the class into the new <td> created */
    patientTr.appendChild(buildTd(patient.name,"info-name"));
    patientTr.appendChild(buildTd(patient.weight,"info-weight"));
    patientTr.appendChild(buildTd(patient.height,"info-height"));
    patientTr.appendChild(buildTd(patient.fat,"info-fat"));
    patientTr.appendChild(buildTd(patient.bmi,"info-bmi"));

    return patientTr;
  }

  /* Adding a new function to complement td creation with its class */
  function buildTd(data,classe) {
    var td = document.createElement("td");
    td.textContent = data;
    td.classList.add(classe);
    return td;
  }

  /* Let's change the function to be more user oriented */
  function patientValidation (patient) {

    var errors = [];
    /* New way of use Ifs */
    if (!weightValidation(patient.weight)) errors.push("The patient has an invalid weight");
    if (!weightValidation(patient.height)) errors.push("The patient has an invalid height");
    if (patient.name.length == 0) {
      errors.push("The patient must have a name");}
    if (patient.weight.length == 0) {
      errors.push("The patient must have a weight");}
    if (patient.height.length == 0) {
      errors.push("The patient must have a height");}
    if (patient.fat.length == 0) {
      errors.push("The patient must have a percentage of fat");}

    return errors

  }
  /* Let's manage the exibition of error messages on the form */
  function showErrorMessages(errors) {
    var ul = document.querySelector("#erro-messages");
    /* Internal HTML property to clean uo the TAG */
    ul.innerHTML = ""
    /* The introduction of forEach statement */
    errors.forEach(function(erro){
      var li = document.createElement("li");
      li.textContent = erro;
      ul.appendChild(li);
    });

  }
