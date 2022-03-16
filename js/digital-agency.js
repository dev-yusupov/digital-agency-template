const navbar = document.querySelector('.navbar');
const content = document.querySelector(".services-content");

window.addEventListener('scroll', function(){
    if (this.document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.classList.add("navbar-active");
    }
    else if (this.document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        navbar.classList.remove("navbar-active");
    }
});
