var mainHeader= document.getElementById('main-heading');
console.log(mainHeader);
mainHeader.textContent= 'New DOM Layout';
var background= document.getElementsByClassName('text-center')
// background.style.backgroundColor= "bg-success"

var paras= document.getElementsByTagName('p');
console.log(paras);
paras[0].textContent= 'The Document Object Model (DOM) is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure.';
paras[1].textContent=  'The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page.';
var myHeader= document.getElementById('page-header')
myHeader.classList.add("bg-success");
myHeader.classList.replace("bg-dark", "bg-success");
console.log(myHeader.classList);


function addPara(){

    var newArticle= document.createElement('article');
    var newPara= document.createElement('p');
    newArticle.className= "m-2 p-2 border border-secondary mt-4";
    newArticle.appendChild(newPara);
    newPara.id= "para3";

    var newParaText= document.createTextNode("The Document Object Model is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure wherein each node is an object representing a part of the document.");
    newPara.appendChild(newParaText);
    console.log(newArticle);

    var mainParent= document.querySelector("main");
    mainParent.appendChild(newArticle);
    console.log(mainParent);

}

document.getElementById('btn').addEventListener("click", addPara);

var redCard= document.getElementById("red");
console.log(redCard);
// cards.classList.add("bg-danger");
console.log(redCard.classList);
redCard.classList.add("bg-danger");
redCard.classList.replace("bg-white", "bg-danger");

var blueCard= document.getElementById("blue");
console.log(blueCard);
blueCard.classList.add("bg-primary");
console.log(blueCard.classList);
blueCard.classList.replace("bg-white", "bg-primary");

var yellowCard= document.getElementById("yellow");
console.log(yellowCard);
blueCard.classList.add("bg-waring");
console.log(yellowCard.classList);
yellowCard.classList.replace("bg-white", "bg-warning");

var greenCard= document.getElementById("green");
console.log(greenCard);
greenCard.classList.add("bg-success");
console.log(greenCard.classList);
greenCard.classList.replace("bg-white", "bg-success");

var darkCard= document.getElementById("black");
console.log(darkCard);
darkCard.classList.add("bg-dark");
console.log(darkCard.classList);
darkCard.classList.replace("bg-white", "bg-dark");