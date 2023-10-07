// Function typewriter
let typeWriter1 = document.getElementById("typewriter1");
let textCont1 = "Soy Juan. Bienvenido a mi portafolio.           ";
const typing1 = (text = "", time = 200, label = "") => {
  let arrayCharacters = text.split("");
  label.innerHTML = "";
  let i = 0;
  let type = setInterval(function () {
    label.innerHTML += arrayCharacters[i];
    i++;
    if (i === arrayCharacters.length) {
      clearInterval(type);
    }
  }, time);
};
typing1(textCont1, 150, typeWriter1);

// Function of the main content
let body = document.querySelector('body');
let toggleButton = document.getElementById("togglebutton");
let mainSection = document.querySelector(".main-section");
let container = document.querySelector(".container");
let iconContainer = document.querySelector(".icon-container");
let bar = document.querySelector(".bar");
let navbar = document.querySelector(".nav-bar");
let info = document.querySelector(".info");
let info2 = document.querySelector(".info2");
let experiencie = document.querySelector('.experiencie-content');
let experiencie1 = document.querySelectorAll('.experiencie1');
let skills = document.querySelector('.skills-content')
let skills2 = document.querySelector('.skills-content2')
let image = document.querySelector('.image-container')
let proyects = document.querySelector('.proyects-content')
let card = document.querySelector('.card-section')
let contact = document.querySelector('.contact-container') 
let contactContent = document.querySelector('.contact-content') 

toggleButton.addEventListener("click", () => {
  body.style.overflow = 'auto';
  bar.style.display = "block";
  info.style.display = "flex"
  info2.style.display = "flex"
  mainSection.classList.add("show-main-section");
  container.style.display = "none";
  iconContainer.style.display = "none";
  navbar.style.display = 'flex';
  experiencie.style.display = 'flex'
  experiencie1.forEach((x)=>{
    x.style.display = 'flex'
  })
  skills.style.display = 'flex'
  skills2.style.display = 'flex'
  image.style.display = 'grid'
  proyects.style.display = 'flex'
  contactContent.style.display = 'flex'
  contact.style.display = 'grid'
  card.style.display = 'grid'
});

// Nav-Bar
let burguer = document.querySelector('.burguer');
let navlinks = document.querySelector('.nav-links');
let options = document.querySelectorAll('.nav-links ul li');
let item = document.querySelector('.item');
let navA = document.querySelectorAll('.nav-links a');

burguer.addEventListener('click', ()=>{
  navlinks.classList.toggle('mobile-menu');
  navlinks.style.display = 'flex';
})

options.forEach((item)=>{
  item.addEventListener('click', ()=>{
    options.forEach((navItem)=>{
      navItem.classList.remove('active')
    })
    item.classList.add('active')
  })
})

navA.forEach((link)=>{
  link.addEventListener('click', (event)=>{
    event.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({behavior: "smooth", block: "start"});
    navlinks.classList.toggle('mobile-menu');
  })
})




