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
    
    // switch case
    switch () {
    case 0:
       document.getElementById("diceOne").setAttribute("href", "../content/images/1.png"); 
       document.getElementById("diceTwo").setAttribute("href", "../content/images/1.png"); 
        break;
    case 1:
        document.getElementById("diceOne").setAttribute("href", "../content/images/2.png"); 
        document.getElementById("diceTwo").setAttribute("href", "../content/images/2.png"); 
        break;
    case 2:
        document.getElementById("diceOne").setAttribute("href", "../content/images/3.png");
        document.getElementById("diceTwo").setAttribute("href", "../content/images/3.png");  
        break;
    case 3:
        document.getElementById("diceOne").setAttribute("href", "../content/images/4.png"); 
        document.getElementById("diceTwo").setAttribute("href", "../content/images/4.png"); 
        break;
    case 4:
        document.getElementById("diceOne").setAttribute("href", "../content/images/5.png"); 
        document.getElementById("diceTwo").setAttribute("href", "../content/images/5.png"); 
        break;
    case 5:
        document.getElementById("diceOne").setAttribute("href", "../content/images/6.png");
        document.getElementById("diceTwo").setAttribute("href", "../content/images/6.png");  
        break;
   
}
    
}