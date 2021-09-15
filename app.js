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


const main = document.createElement("div");
main.style.margin = "50px";
main.style.display = "flex";
root.appendChild(main);

let pageColor = "";
const changeColor = (e) => {
    body.style.backgroundColor = e.target.value;
    pageColor = e.taget.value;
}

const left = document.createElement("div");
const firstText = document.createElement("p");
firstText.innerText = "Sizzle your Life";
firstText.style.fontSize = "30px";
firstText.style.fontWeight = "10%";
left.append(firstText);

const secondText = document.createElement("p");
secondText.innerText = "Make a Card";
secondText.style.marginTop = "20px";
secondText.style.fontSize = "60px";
secondText.style.fontWeight = "bold";
left.append(secondText);

left.style.width = "60%";
left.style.paddileLeft = "100px";
left.style.paddingTop = "30px";

main.append(left);