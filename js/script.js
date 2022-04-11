// Created by: Jaejun Lee
// Created on: Mar 2022
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates volume of a sphere.
 */
function calculate () {
  // input
  const fahrenheit = parseFloat(document.getElementById('fahrenheit').value)

  // process
  const celsius = (fahrenheit - 32) * 5 / 9


  // output
  document.getElementById('celsius').innerHTML = 'The temperature is: ' + celsius.toFixed(2) + '°C'
}
