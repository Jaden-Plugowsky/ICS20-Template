// Copyright (c) 2023 Jaden Plugowsky All rights reserved
//
// Created by: Jaden Plugowsky
// Created on: June 2023
// This file contains the JS functions for index.html

"use strict";

// Checks service worker
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Template/sw.js", {
    scope: "/ICS2O-Template/",
  })
}

function buttonOneClicked() {
  //This function does XXXX
  //Input through Textfields
  const example = parseFloat(document.getElementById("example").value)

  //Process
  const answer = example

  //Output
  document.getElementById("answer").innerHTML =
    "The answer is: " + answer.toFixed(2)
}
