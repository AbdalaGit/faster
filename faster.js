
let menuu = document.querySelector("#menu-bar");
let navbarr = document.querySelector(".navbar");
let headerr = document.querySelector("header");


let selectField = document.getElementById("selectField");
let selectText = document.getElementById("selectText");
let options = document.getElementsByClassName("options");
let list = document.getElementById("list");
let arrow = document.getElementById("arrow");



// options
for(option of options){
    option.onclick = function(){
        selectText.innerHTML = this.textContent;
        list.classList.toggle("hide");
        arrow.classList.toggle("rotate");
    }
}

selectField.onclick = function(){
    list.classList.toggle("hide");
    arrow.classList.toggle("rotate");
}

function loading() {
    document.querySelector(".Loading").classList.add("STOP");
}

function addloading() {
    setInterval(loading, 3500);
}

window.onload = addloading();














// start menu
menuu.addEventListener('click', () =>{
    menuu.classList.toggle('fa-times');
    navbarr.classList.toggle('active');
});

window.onscroll = () =>{
    menuu.classList.remove('fa-times');
    navbarr.classList.remove('active');


    if(window.scrollY > 250){
        headerr.classList.add('actvie');
    }else{
        headerr.classList.remove('actvie');
    }
}
// end menu









// start home
var swiper = new Swiper(".home-slider", {
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },

    autoplay: {
        delay: 2500,
        disableonInteraction: false,
    },
    loop:true,
});
// end home





function randomm(){

    let imges = ['url("i3.jpg")', 'url("imge6.jpg")', 'url("imge5.jpg")'];

    let main = document.querySelector(".main");

    let bg = imges[Math.floor(Math.random() * imges.length)];

    main.style.backgroundImage = bg;
}

setInterval(randomm, 10000);
















// colors

// localStorage
let ColorOne = localStorage.getItem("color_option");

if (ColorOne !== null){
    
    document.documentElement.style.setProperty('--ColorOne',localStorage.getItem("color_option"));

    document.querySelectorAll('.colors-list li').forEach(element =>{
        element.classList.remove("active");
    });

};

// list
let colorsLi = document.querySelectorAll(".colors-list li");

document.querySelector(".toggle-settings .fa-gear").onclick = function () {

    this.classList.toggle("fa-spin");

    document.querySelector(".settings-box").classList.toggle("open");
}

colorsLi.forEach(li => {

    li.addEventListener("click", (e) => {

        document.documentElement.style.setProperty('--ColorOne', e.target.dataset.color);

        localStorage.setItem("color_option", e.target.dataset.color);

        e.target.parentElement.querySelectorAll(".active").forEach(element =>{
            element.classList.remove("active");
        }); 

        e.target.classList.add("active");

    });
});