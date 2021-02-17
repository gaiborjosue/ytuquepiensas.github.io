/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
  /*Remove menu mobile*/
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

////
function scrollTop(){
    const scrollTop = document.getElementById("scroll-top")
    if(this.scrollY >= 560) scrollTop.classList.add("show-scroll"); else scrollTop.classList.remove("show-scroll")
}
window.addEventListener("scroll", scrollTop)
///

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

/*SCROLL HOME*/
sr.reveal('.home__title',{}); 
sr.reveal('.button',{delay: 200}); 
sr.reveal('.home__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 

/*SCROLL ABOUT*/
sr.reveal('.about__img',{}); 
sr.reveal('.about__subtitle',{delay: 400}); 
sr.reveal('.about__text',{delay: 400}); 

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle',{}); 
sr.reveal('.skills__text',{}); 
sr.reveal('.skills__data',{interval: 200}); 
sr.reveal('.skills__img',{delay: 600});

/*SCROLL WORK*/
sr.reveal('.work__img',{interval: 200}); 

/*SCROLL CONTACT*/
sr.reveal('.contact__input',{interval: 200}); 

//typing animation
var typed = new Typed(".typing", {
    strings: ["Aprendizaje.", "Temas de interés.", "Educación.", "Entrevistas.", "Desarrollo.", "Cultura.", "Asignaturas BI."],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});



const work = document.querySelector(".work");
const card = document.querySelector(".work__container");


work.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) /100;
    let yAxis = (window.innerHeight / 2 - e.pageY) /100;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});


//Animate In
work.addEventListener("mouseenter", (e) => {
    card.style.transition = "none";
 
  });
//Animate Out
work.addEventListener("mouseleave", (e) => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;

});

const checkbox = document.getElementById("checkbox");
checkbox.addEventListener("change", () => {
    document.body.classList.toggle("dark");
})
