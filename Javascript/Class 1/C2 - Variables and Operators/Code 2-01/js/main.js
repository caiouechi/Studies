var title = document.querySelector(".title");
title.textContent = "Markos Nutrition Clinic";

var patient = document.querySelector("#first-patient");
var tdWeight = patient.querySelector(".info-weight");
var weight = tdWeight.textContent;
var tdHeight = patient.querySelector(".info-height");
var height = tdHeight.textContent;
var tdImc = patient.querySelector(".info-bmi");
var imc = weight / (height * height);

tdImc.textContent = imc;
