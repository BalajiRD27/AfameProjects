var typed=new Typed(".text",{
    strings:["Front End Developer !","Web Developer !" ],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});

 
document.addEventListener("DOMContentLoaded", function() {
    const homeAnchor = document.getElementById("homeid");
    const aboutAnchor = document.getElementById("aboutid");
    const skillsAnchor=document.getElementById("skillsid");
    const projectsAnchor=document.getElementById("projectsid");
    const contactsAnchor=document.getElementById("contactid");

    const homeSection = document.getElementById("home");
    const aboutSection = document.getElementById("about");
    const skillsSection=document.getElementById("skills");
    const projectsSection=document.getElementById("projects");
    const contactsSection=document.getElementById("contact");

    const currentYear = new Date().getFullYear();
    document.getElementById('currentYear').textContent=currentYear;

    function scrollToSection(section) {
        section.scrollIntoView({
            behavior: 'smooth'
        });
    }

    homeAnchor.addEventListener("click", function(event) {
        event.preventDefault();
        scrollToSection(homeSection);
    });

    aboutAnchor.addEventListener("click", function(event) {
        event.preventDefault(); 
        scrollToSection(aboutSection); 
    });

    skillsAnchor.addEventListener("click",function(event){
        event.preventDefault();
        scrollToSection(skillsSection);
    });

    projectsAnchor.addEventListener('click',function(event){
        event.preventDefault();
        scrollToSection(projectsSection);
    });
    contactsAnchor.addEventListener('click',function(event){
        event.preventDefault();
        scrollToSection(contactsSection);
    });
});