class MobileNavbar{
    constructor(mobileMenu, navlist) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navlist = document.querySelector(navlist);
        this.navLinks = document.querySelectorAll(this.navLinks);
        this.activeClass= "active";
    }
    
    addClickEvent(){
        this.mobileMenu.addEventListener("click",()=>console.log
        ("Hey"));
    }
}