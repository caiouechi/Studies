var title = document.querySelector(".title");
title.textContent = "Markos Nutrition Clinic";

var patient  = document.querySelector("#first-patient");
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
}

if (height <= 0 || height >= 3.00){
    console.log("Invalid height!");
    heightValid = false;
    tdBmi.textContent = "Invalid height!";
}

if (weightValid && heightValid){
    var bmi = weight / (height * height);
    tdBmi.textContent = bmi;
}
