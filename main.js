/**
 * Created on 26.7.2015.
 */

var canvas = document.getElementById("one-and-only");
var context = canvas.getContext("2d");

var first_button = document.getElementById("first");
var second_button = document.getElementById("second");
var third_button = document.getElementById("third");

first_button.addEventListener("click", module1);
second_button.addEventListener("click", module2);
third_button.addEventListener("click", module3);
