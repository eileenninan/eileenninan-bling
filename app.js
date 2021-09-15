/*
--------------------------------------------------------------
Your code goes in this file
--------------------------------------------------------------
*/
let root = document.querySelector("#root");
root.style.fontFamily = "Montserrat";
root.style.height = "100vh";

let body = document.getElementsByTagName("BODY")[0];
body.style.backgroundColor = "gold";

let heading = document.createElement("h1");
heading.innerText = "BLING!";
heading.style.display = "flex";
heading.style.justifyContent = "center";
heading.style.fontWeight = "900";
heading.style.fontSize = "2em";
heading.style.margin = "30px";
heading.style.textShadow = "3px 3px #f39c12";
root.append(heading);


let main = document.createElement("div");
main.style.margin = "50px";
main.style.display = "flex";
root.append(main);

let pageColor = "";
const changeColor = (e) => {
    body.style.backgroundColor = e.target.value;
    pageColor = e.taget.value;
}

let left = document.createElement("div");
left.style.width = "60%";
left.style.paddileLeft = "100px";
left.style.paddingTop = "30px";
main.append(left);

let firstText = document.createElement("p");
firstText.innerText = "Sizzle your Life";
firstText.style.fontSize = "30px";
firstText.style.fontWeight = "10%";
left.append(firstText);

let secondText = document.createElement("p");
secondText.innerText = "Make a Card";
secondText.style.marginTop = "20px";
secondText.style.fontSize = "60px";
secondText.style.fontWeight = "bold";
left.append(secondText);

let right = document.createElement("div");
right.style.width = "40%";
right.style.position = "relative";
right.style.display = "flex";
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
imageDiv.style.margin = "50px";
imageDiv.style.position = "absolute";
imageDiv.style.transform = "translateX(130%) translateY(20%)"
imageDiv.style.zIndex = "2";
right.append(imageDiv);

let imgs = ["assets/images/polaroid.png","assets/images/tv.png","assets/images/among-us.png","assets/images/fall-guy-01.png","assets/images/radio-02.png"];

let image = document.createElement("img");
image.style.width = "150px";
image.style.margin = "30px";
image.style.display = "flex";
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
left.append(buttonDiv);

let buttons = ["Polaroid","TV","Traitor","Fall Guy","Radio"];
buttons.forEach((button,i) =>{
    let btn = document.createElement("button");
    btn.innerText = button;
    btn.img = imgs[i];
    btn.style.padding = "10px";
    btn.style.marginTop = "50px";
    btn.style.marginRight = "20px";
    btn.style.backgroundColor = "transparent";
    btn.style.boxShadow = "3px 3px 5px";
    btn.addEventListener("click", showImg);
    btn.style.border = "2px solid #383838";
    buttonDiv.append(btn);
})

let selectionDiv = document.createElement("div");
selectionDiv.style.display = "flex";
selectionDiv.style.marginTop = "30px";
left.append(selectionDiv);

let input = document.createElement("input");
input.className += "inputs";
input.type = "text";
input.placeholder = "Name Your Bling!";
input.style.display = "block";
input.style.paddingLeft = "10px";
input.style.height = "40px";
input.style.width = "200px";
input.style.marginRight = "20px";

input.onclick = () => {
    input.stylr.outline = "none";
}
selectionDiv.append(input);

input.addEventListener("input", showName);

let colors = ["Gold","Snow","DodgerBlue","LightSalmon","LightCoral","LightPink","OrangeRed","Tomato","DarkOrchid","SpringGreen","Thistle"];

let colorSelector = document.createElement("select");
colorSelector.className += "inputs";
colorSelector.style.display = "inline-block";
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



let footerEle = ["♥Credits:","Polaroid","TV","Traitor","Fall-Guy","Radio"];
let footer = document.createElement('footer');
footer.style.justifyContent = "center"
footer.style.wordSpacing = '0.5rem';
footer.style.flexWrap = "wrap";
footer.style.display = "flex";
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