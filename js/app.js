

let closeBtn = document.querySelector('#close');
let openBtn = document.querySelector('#open');
let modal = document.querySelector('.modal');
let overlay = document.querySelector('.overlay');

openBtn.addEventListener("click",() => {
    modal.style.display = "block";
    overlay.style.opacity= "100%";
})

closeBtn.addEventListener("click",() =>{
    modal.style.display ="none"; 
    overlay.style.opacity="0%";
})

var typed = new Typed(".auto-type",{
    string: ["Concepteur-développeur d'applications","DevOps","Lead developer","Tech lead","Testeur"],
    typeSpeed: 50,
    backSpeed: 25,
    loop: true
})
