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
root.appendChild(main);

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