// JavaScript Document
console.log("hi");

var menuButton = document.querySelector("header > button");
var menu = document.querySelector("header nav ul");
var buttonImage = document.querySelector("header > button > img" );

function menuToggelen(){
    menu.classList.toggle("menuOpen");

    if(buttonImage.src === "https://www.benjerry.nl/modules/bnj-modules/img/social-icons/menu.svg"){
        buttonImage.src = "https://assets.codepen.io/274456/ui-icon-cross.svg"
    } else{
        buttonImage.src = "https://www.benjerry.nl/modules/bnj-modules/img/social-icons/menu.svg"
    }

}

menuButton.addEventListener('click', menuToggelen)

