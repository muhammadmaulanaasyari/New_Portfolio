// === Skil arrow ===

const tabs = document.querySelectorAll('[data-target]'),
tabContent = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        const target = document.querySelector(tab.dataset.target)

        tabContent.forEach(tabContents => {
            tabContents.classList.remove('skills_active')
        })

        target.classList.add('skills_active')


        tabs.forEach(tab => {
            tab.classList.remove('skills_active')
        })

        tab.classList.add('skills_active')
    })
})



// === Typing animations === 

var typed = new Typed('.typing',{
    strings:["Web Developer" , "Web Designer" , "You Tuber"],
    typeSpeed:100,
    backSpeed:100,
    loop:true
});


// ==== Dark Mode ====

const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})
    if(document.body.classList.contains("dark"))
    {
        dayNight.querySelector("i").classList.add("fa-sun");
    }
    else {
        dayNight.querySelector("i").classList.add("fa-moon")
    }



//  ==== nav menu ====

   const navMenu = document.getElementById('side-bar'),
   navToggle = document.getElementById('nav-toggle'),
   navClose = document.getElementById('nav-close')

   if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add("open")
    })
   }

   if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove("open")
    })
   }






   const navLink = document.querySelectorAll('.nav-link')

   function linkAction(){
       const navMenu = document.getElementById('side-bar')
       // When we click on each nav__link, we remove the show-menu class
       navMenu.classList.remove("open")
   }
   navLink.forEach(n => n.addEventListener('click', linkAction))



//    === Animation scroll ===

ScrollReveal({
     // reset: true ,
     distance: '80px',
     duration: 2000,
     delay: 300
});

ScrollReveal().reveal('.section-title, .section_title, .project-title, .judul-title', { origin: 'left' });
ScrollReveal().reveal('.about-text, .personal-info, .skill-grup', { origin: 'top' });
ScrollReveal().reveal('.personal-info, .skill-tabs, .project-card, .contact-title-isi, .contact-sub-title, .contact-info-item, .contact-form', { origin: 'bottom' });
