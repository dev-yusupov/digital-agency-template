const navbar = document.querySelector('.navbar');
const content = document.querySelector(".services-content");
const hamburger = document.querySelector(".hamburger")
const navItems = document.querySelector(".nav-items")

window.addEventListener('scroll', function(){
    if (this.document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.classList.add("navbar-active");
    }
    else if (this.document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        navbar.classList.remove("navbar-active");
    }
});

hamburger.addEventListener('click', function () {
    navItems.classList.toggle('nav-items-active');
    navItems.classList.toggle('nav-items');
})

function hoverContent(element) {
    element.classList.add('services-content-active')
}
function hoverContentRm(element) {
    element.classList.remove('services-content-active')
}