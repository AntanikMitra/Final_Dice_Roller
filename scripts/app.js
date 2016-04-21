/*
Source File Name: app.js
Author: Antanik Mitra (200292856) 
Date: 21/04/2016
Description: Dice Roller Final Exam
 */


function ranNumber() {
    // random number one
    var ranOne = document.getElementById("ranOne");
    // random number two
    var ranTwo = document.getElementById("ranTwo");
    
    // Math equation
    var dice1 = Math.floor(Math.random() * 6) + 1;
    var dice2 = Math.floor(Math.random() * 6) + 1;
    
    // Injecting into html
    ranOne.innerHTML = String(dice1);
    ranTwo.innerHTML = String(dice2);


}