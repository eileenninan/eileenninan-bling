/*
--------------------------------------------------------------
Your code goes in this file
--------------------------------------------------------------
*/
let root = document.querySelector("#root");

root.style.cssText="font-family: 'Montserrat', sans-serif;"

const heading = document.createElement("h1");
heading.innerText = "BLING!";
heading.style.textAlign = "center";
heading.style.fontWeight = "bolder";
heading.style.fontSize = "35px";
heading.style.padding = "1em";
heading.style.color = "#2d2d2d";
heading.style.textShadow = "4.9px 4.9px #f39c12";
root.appendChild(heading);
