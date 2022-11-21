
let openBtn = document.querySelector('#open');
let closeBtn = document.querySelector('#close');
let modal = document.querySelector('.modal');
let overlay = document.querySelector('.overlay');

openBtn.addEventListener("click",() => {
    modal.style.display = "block";
    overlay.style.opacity= "100%";
})

closeBtn.addEventListener("click",() =>{
    modal.style.display ="none"; 
})