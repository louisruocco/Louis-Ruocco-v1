const nav = document.querySelector(".nav");
const title = document.querySelector(".title");
const subtitle = document.querySelector(".subtitle");
const arrow = document.querySelector(".arrow");
const about = document.querySelector(".about");
const projects = document.querySelector(".projects");
const cv = document.querySelector(".cv");
const cvImage = document.querySelector(".cv-image");
const contact = document.querySelector(".contact");
const button = document.querySelector(".submit-btn");

window.addEventListener("scroll", arrowDisappear);
window.addEventListener("scroll", aboutAppear);
window.addEventListener("scroll", projectsAppear);
window.addEventListener("scroll", cvAppear);
window.addEventListener("scroll", contactAppear);

setInterval(navAppear, 2250);
window.addEventListener("load", onLoad);
setInterval(subtitleAppear, 1250);
setInterval(arrowDown, 2250);
cvImage.addEventListener("click", zoom);
button.addEventListener("click", openEmail);

function onLoad(){
    title.classList.add("title-appear");
    arrow.classList.add("appear");
}

function subtitleAppear(){
    subtitle.classList.add("subtitle-appear");
}

function navAppear(){
    nav.classList.add("nav-appear");
}

function arrowDown(){
    arrow.classList.toggle("arrow-down");
}

function arrowDisappear(){
    let arrowPosition = arrow.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;

    if(arrowPosition < screenPosition){
        arrow.classList.add("disappear");
    }
}

function aboutAppear(){
    let aboutPosition = about.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 1.5;

    if(aboutPosition < screenPosition){
        about.classList.add("appear");
    }

    if(aboutPosition > screenPosition){
        about.classList.remove("appear");
    }
}

function projectsAppear(){
    let projectsPosition = projects.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 1.5;

    if(projectsPosition < screenPosition){
        projects.classList.add("appear");
    }

    if(projectsPosition > screenPosition){
        projects.classList.remove("appear");
    }
}

function cvAppear(){
    let cvPosition = cv.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 1.5;

    if(cvPosition < screenPosition){
        cv.classList.add("appear");
    }

    if(cvPosition > screenPosition){
        cv.classList.remove("appear");
    }
}

function contactAppear() {
    let contactPosition = contact.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 1.5;

    if(contactPosition < screenPosition){
        contact.classList.add("appear");
    }

    if(contactPosition > screenPosition){
        contact.classList.remove("appear");
    }
}

function zoom(){
    cvImage.classList.toggle("cv-zoom");
}

function openEmail(){
    window.open('mailto:louisruocco1@gmail.com');
}