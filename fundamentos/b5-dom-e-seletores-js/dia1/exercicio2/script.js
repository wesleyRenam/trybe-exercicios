let title = document.querySelector("#header-container")
title.style.backgroundColor = "#00B069";
let urgente = document.querySelector("#container .emergency-tasks");
urgente.style.backgroundColor = "#FF9F84";
let urgenteTitle = document.querySelectorAll(".emergency-tasks h3");
for (let index = 0; index < urgenteTitle.length; index += 1) {
    urgenteTitle[index].style.backgroundColor = 'rgb(165, 0, 243)';
  }

let naoUrgente = document.querySelector("#container .no-emergency-tasks");
naoUrgente.style.backgroundColor = "#F9DB5E";
let naoUrgenteTitle = document.querySelectorAll(".no-emergency-tasks h3");
for (let index = 0; index < urgenteTitle.length; index += 1) {
    naoUrgenteTitle[index].style.backgroundColor = '#232525';
  }

let rodape = document.getElementById("footer-container")
rodape.style.backgroundColor = "#003533";
