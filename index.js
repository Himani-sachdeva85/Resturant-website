  //==============================
// Smooth Scroll Navbar
//==============================

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({

            behavior: "smooth"

        });

    });

});


//==============================
// Find A Table Button
//==============================

const tableBtn = document.querySelector(".btn");

tableBtn.addEventListener("click", function(e){

    e.preventDefault();

    document.querySelector("#contact").scrollIntoView({

        behavior: "smooth"

    });

});
  
const sections = document.querySelectorAll("section[id]");
const navItems = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if(window.scrollY >= sectionTop){
            current = section.getAttribute("id");
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){
            link.classList.add("active");
        }

    });

});




  

  //=========================
// Scroll Animation
//=========================

const reveals=document.querySelectorAll(".reveal");

window.addEventListener("scroll",()=>{

reveals.forEach(item=>{

const top=item.getBoundingClientRect().top;

const windowHeight=window.innerHeight;

if(top<windowHeight-120){

item.classList.add("active");

}

});

});


//=========================
// Form Validation
//=========================

const form=document.querySelector(".reservation-form");

form.addEventListener("submit",function(e){

e.preventDefault();

const inputs=form.querySelectorAll("input,select");

let valid=true;

inputs.forEach(input=>{

if(input.value===""){

valid=false;

input.style.border="1px solid red";

}else{

input.style.border="1px solid #d4af37";

}

});

if(valid){

alert("🎉 Table Reserved Successfully!");

form.reset();

}

});
