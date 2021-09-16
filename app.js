/*
--------------------------------------------------------------
Your code goes in this file
--------------------------------------------------------------
*/
let root = document.querySelector("#root");
root.style.fontFamily = "Montserrat";
root.style.height = "100vh";
root.style.width = "100%";

let body = document.getElementsByTagName("body")[0];
body.style.backgroundColor = "gold";

let heading = document.createElement("h1");
heading.innerText = "BLING!";
heading.style.display = "flex";
heading.style.flexWrap = "wrap";
heading.style.rowGap = "1rem";
heading.style.justifyContent = "center";
heading.style.fontWeight = "900";
heading.style.fontSize = "2em";
heading.style.margin = "30px";
heading.style.textShadow = "3px 3px rgb(230, 158, 5)";
root.append(heading);


let main = document.createElement("div");
main.style.margin = "50px";
main.style.display = "flex";
main.style.flexWrap = "wrap";
main.style.rowGap = "1rem";
root.append(main);

let pageColor = "gold";
let changeColor = (e) => {
    body.style.backgroundColor = e.target.value;
    pageColor = e.target.value;
}

let left = document.createElement("div");
left.style.width = "60%";
left.style.paddileLeft = "100px";
left.style.paddingTop = "30px";
left.style.display = "flex";
left.style.flexWrap = "wrap";
left.style.rowGap = "1rem";
left.style.flexDirection = "column";
main.append(left);

let firstText = document.createElement("p");
firstText.innerText = "Sizzle your Life";
firstText.style.fontSize = "33px";
firstText.style.fontWeight = "10%";
left.append(firstText);

let secondText = document.createElement("p");
secondText.innerText = "Make a Card";
secondText.style.marginTop = "20px";
secondText.style.fontSize = "65px";
secondText.style.fontWeight = "bold";
left.append(secondText);

let right = document.createElement("div");
right.style.width = "40%";
right.style.position = "relative";
right.style.display = "flex";
right.style.flexWrap = "wrap";
right.style.rowGap = "1rem";
main.append(right);

let rightText = document.createElement("div");
rightText.className = "inputName";
rightText.style.position = "absolute";
rightText.style.width = "100%";
rightText.style.top = "0px";
rightText.style.fontSize = "60px";
rightText.style.fontWeight = "900";
rightText.style.textAlign = "center";
rightText.style.color = "#383838";
rightText.style.textShadow = "2px 2px 2px #383838";
right.append(rightText);

let BlingName = "";
const showName = (e) => {
    rightText.textContent = e.target.value;
    BlingName = e.target.value;
}

let imageDiv = document.createElement("div");
imageDiv.style.position = "absolute";
imageDiv.style.top = "5px";
imageDiv.style.left = "130px"
imageDiv.style.zIndex = "2";
right.append(imageDiv);

let imgs = ["./assets/images/polaroid.png","./assets/images/tv.png","./assets/images/among-us.png","./assets/images/fall-guy-01.png","./assets/images/radio-02.png"];

let image = document.createElement("img");
image.style.width = "250px";
image.style.margin = "70px 0 0 0";
image.style.padding = "50px";
image.style.justifyContent = "center";
imageDiv.append(image);

let temp = "";
let active = "active";
let showImg = (e) => {
    image.src = e.target.img;
    temp = e.target.img;
    if (active != "active"){
        active.style.backgroundColor = "transparent";
        active.style.color = "black";
    }
    active = e.target;
    e.target.style.backgroundColor = "#383838";
    e.target.style.color = "white";
    e.target.style.boxShadow = "3px 3px 5px #383838";
}

let buttonDiv = document.createElement("div");
buttonDiv.style.display = "flex";
buttonDiv.style.flexWrap = "wrap";
buttonDiv.style.rowGap = "1rem";
left.append(buttonDiv);

let buttons = ["Polaroid","TV","Traitor","Fall Guy","Radio"];
buttons.forEach((button,i) => {
    let btn = document.createElement("button");
    btn.innerText = button;
    btn.img = imgs[i];
    btn.style.padding = "10px";
    btn.style.marginTop = "50px";
    btn.style.marginRight = "20px";
    btn.style.borderRadius = "10px";
    btn.style.backgroundColor = "transparent";
    btn.style.boxShadow = "3px 3px 5px";
    btn.onmouseover = () => {
        btn.style.cursor = "pointer";
    }
    btn.addEventListener("click", showImg);
    btn.style.border = "2px solid #383838";
    buttonDiv.append(btn);
})

let selectionDiv = document.createElement("div");
selectionDiv.style.display = "flex";
selectionDiv.style.flexWrap = "wrap";
selectionDiv.style.marginTop = "30px";
left.append(selectionDiv);

let input = document.createElement("input");
input.className += "inputs";
input.type = "text";
input.placeholder = "Name Your Bling!";
input.style.display = "flex";
input.style.flexWrap = "wrap";
input.style.rowGap = "1rem";
input.style.paddingLeft = "10px";
input.style.height = "40px";
input.style.width = "200px";
input.style.marginRight = "20px";

input.onclick = () => {
    input.style.outline = "none";
}
selectionDiv.append(input);

input.addEventListener("input", showName);

let colors = ["Gold","Snow","DodgerBlue","LightSalmon","LightCoral","LightPink","OrangeRed","Tomato","DarkOrchid","SpringGreen","Thistle"];

let colorSelector = document.createElement("select");
colorSelector.className += "inputs";
colorSelector.style.display = "flex";
colorSelector.style.flexWrap = "wrap";
colorSelector.style.rowGap = "1rem";
colorSelector.style.marginRight = "20px";

colorSelector.onclick = () => {
    colorSelector.style.outline = "none";
}
colors.forEach (color => {
    let option = document.createElement("option");
    option.value = color;
    option.innerText = color;
    colorSelector.addEventListener("change", changeColor);
    colorSelector.append(option);
})
selectionDiv.append(colorSelector);

let radioDiv = document.createElement("div");
radioDiv.className += "inputs";
radioDiv.style.display = "flex";
radioDiv.style.flexWrap = "wrap";
radioDiv.style.rowGap = "1rem";
radioDiv.style.padding = "10px";
selectionDiv.append(radioDiv);

let choices = document.getElementsByClassName("inputs");
for(let choice of choices){
    choice.style.border = "1px solid #383838";
    choice.style.margin = "10px";
    choice.style.padding = "10px";
    choice.style.boxShadow = "3px 3px 5px #383838";
    choice.style.borderRadius = "10px";
    choice.style.backgroundColor = "#383838";
    choice.style.color = "white";
}

const radioOne = document.createElement("input");
radioOne.name = "Blob or Not";
radioOne.type = "radio";
radioOne.id = "blob";
radioDiv.append(radioOne);

let labelOne = document.createElement("label");
labelOne.innerText = "Blob";
radioDiv.append(labelOne);

const radioTwo = document.createElement("input");
radioTwo.name = "Blob or Not";
radioTwo.type = "radio";
radioTwo.id = "nope";
radioDiv.append(radioTwo);

let labelTwo = document.createElement("label");
labelTwo.innerText = "Nope";
radioDiv.append(labelTwo);

let blobImg = document.createElement("img");
blobImg.style.position = "absolute";
blobImg.style.width = "300px";
blobImg.style.top = "20%";
blobImg.style.left = "25%";
blobImg.style.zIndex = "-1";
blobImg.style.display = "flex";
blobImg.style.flexWrap = "wrap";
blobImg.style.rowGap = "1rem";
right.append(blobImg);

let displayBlobOrNot = (e) => {
    if (e.target.id == "blob"){
        image.style.backgroundImage = "url('./assets/images/blob.png')";
        image.style.backgroundSize = "13rem";
        image.style.backgroundRepeat = "no-repeat";
        image.style.backgroundPosition = "center center";

        // blobImg.src = "./assets/images/blob.png";
    }
    else if(e.target.id == "nope"){
        image.style.backgroundImage = "none";
        //blobImg.src = "";
    }
}

body.addEventListener("change", displayBlobOrNot);

let capture = document.createElement("img");
capture.src = "./assets/images/camera.png";
capture.style.width = "3rem";
capture.style.display = "flex";
capture.style.flexWrap = "wrap";
capture.style.rowGap = "1rem";
capture.style.margin = "10px 0 0 20px";
capture.style.border = "2px solid #383838";
capture.style.padding = "10px";
capture.style.borderRadius = "10px";
capture.style.boxShadow = "3px 3px 5px";
capture.onmouseover = () => {
    capture.style.cursor = "pointer";
}
left.append(capture);

let prev = document.createElement("div");
prev.className = "prev";
prev.style.display = "flex";
prev.style.flexDirection = "row";
prev.style.justifyContent = "center";
prev.style.flexWrap = "wrap";
prev.style.marginTop = "50px";
prev.style.paddingLeft = "100px";
prev.style.paddingRight = "100px";
root.append(prev);

let showCard = (e) => {
    let cardDiv = document.createElement("div");
    cardDivOut = cardDiv;
    cardDiv.style.position = "relative";
    let cardImg = document.createElement("img");
    if(temp!=""){
        cardImg.src = temp;
    }
    else{
        cardImg.style.display = "none";
    }
    cardImg.style.width = "150px";
    cardImg.style.height = "150px";
    cardImg.style.position = "absolute";
    cardImg.style.top = "30%";
    cardImg.style.left = "25%";

    let deleteCard = () => {
        cardDiv.style.display = "none";
    }

    let deleteIcon = document.createElement("img");
    deleteIcon.src = "./assets/images/icon_delete.png";
    deleteIcon.style.width = "35px";
    deleteIcon.style.position = "absolute";
    deleteIcon.style.top = "-15px";
    deleteIcon.style.right = "-15px";
    deleteIcon.style.position = "top-right";
    deleteIcon.onclick = deleteCard;
    cardDiv.append(deleteIcon);

    if(radioOne.checked){
        cardDiv.style.backgroundImage = "url('./assets/images/blob.png')";
        cardDiv.style.backgroundSize = "300px";
        cardDiv.style.backgroundPosition = "center";
        cardDiv.style.backgroundRepeat = "no-repeat";
    }
    else{
        cardDiv.style.backgroundImage = 'url("")';
    }

    let cardText = document.createElement("div");
    cardText.className = "inputName";
    cardText.style.fontSize = "40px";
    cardText.style.marginTop = "10px";
    cardText.style.fontWeight = "900";
    cardText.style.textAlign = "center";
    cardText.style.color = '#383838';
    cardText.style.textShadow = "2px 2px  2px #383838";
    cardText.textContent = BlingName;
    cardDiv.append(cardText);

    cardDiv.style.textAlign = "center";
    cardDiv.style.flexDirection = "column";
    cardDiv.style.border = "2px solid #383838";
    cardDiv.style.boxShadow = "3px 3px 5px #383838";
    cardDiv.style.justifyContent = "center";
    cardDiv.style.alignItems = "center";
    cardDiv.style.height = "400px";
    cardDiv.style.width = "300px";
    cardDiv.style.marginTop = "40px";
    cardDiv.style.marginRight = "50px";
    cardDiv.style.backgroundColor = pageColor;
    cardDiv.append(cardImg);
    prev.append(cardDiv);
}

let textStyles = document.getElementsByClassName("inputName");

capture.onclick = showCard;


let footerEle = ["♥Credits:","Polaroid","TV","Traitor","Fall-Guy","Radio"];
let footer = document.createElement('footer');
footer.style.justifyContent = "center"
footer.style.wordSpacing = '0.5rem';
footer.style.flexWrap = "wrap";
footer.style.display = "flex";
footer.style.rowGap ="1rem";
footer.style.bottom= "0";
footer.style.width = "100%";
footer.style.marginTop = "200px";
footer.style.fontWeight = "bold";
footerEle.forEach((items,index)=>{
    if(index == 0){
     a = document.createElement("p");
    }
    else{
     a = document.createElement("a");
        a.addEventListener('mouseover',(e)=>{
            e.target.style.borderBottom = "2px solid black";
        })
        a.addEventListener('mouseout',(e)=>{
            e.target.style.borderBottom = "0px";
        })
        a.href = "#";
        a.target = "_blank";
        a.style.textDecoration = "none";
        a.style.color = "black";
        a.style.marginLeft = "1em";
    }
    a.innerText = items;
    footer.appendChild(a);
})
root.append(footer);

