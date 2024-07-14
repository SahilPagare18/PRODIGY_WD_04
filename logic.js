var tablinks=document.querySelector(".tab-links");
var tabcontents=document.querySelector(".tab-contents");

function openTab(tabname) {
    for (let link of tablinks) {
        link.classList.remove("active-link");
    }
    for (let content of tabcontents) {
        content.classList.remove("active-tab");
    }

    Event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

var sidemenu=document.getElementById("side-menu");

function openmenu() {
   sidemenu.style.right="0";
}

function closemenu() {
   sidemenu.style.right="-200px";
}