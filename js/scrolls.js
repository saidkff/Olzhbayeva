document.addEventListener("DOMContentLoaded", function() {
    const aboutButton = document.querySelector("#aboutButton");
    const aboutSection = document.querySelector("#about_section");
 
    aboutButton.addEventListener("click", function(event) {
       event.preventDefault();
       aboutSection.scrollIntoView({ behavior: "smooth" });
    });
 });
 
 document.addEventListener("DOMContentLoaded", function() {
    const clientButton = document.querySelector("#clientButton");
    const clientSection = document.querySelector("#clients");
 
    clientButton.addEventListener("click", function(event) {
       event.preventDefault();
       clientSection.scrollIntoView({ behavior: "smooth" });
    });
 });

 document.addEventListener("DOMContentLoaded", function() {
    const servicesButton = document.querySelector("#servicesButton");
    const servicesSection = document.querySelector("#services");
 
    servicesButton.addEventListener("click", function(event) {
       event.preventDefault();
       servicesSection.scrollIntoView({ behavior: "smooth" });
    });
 });
 

 document.addEventListener("DOMContentLoaded", function() {
    const galleryButton = document.querySelector("#galleryButton");
    const gallerySection = document.querySelector("#vehicles");
 
    galleryButton.addEventListener("click", function(event) {
       event.preventDefault();
       gallerySection.scrollIntoView({ behavior: "smooth" });
    });
 });

 
 
 document.addEventListener("DOMContentLoaded", function() {
    const contactButton = document.querySelector("#contactButton");
    const contactSection = document.querySelector("#contact");
 
    contactButton.addEventListener("click", function(event) {
       event.preventDefault();
       contactSection.scrollIntoView({ behavior: "smooth" });
    });
 });


 