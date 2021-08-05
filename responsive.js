burger = document.querySelector(".burger")
navber = document.querySelector(".navber")
navlist = document.querySelector(".nav-list")
rightnav = document.querySelector(".rightnav")


burger.addEventListener("click",() =>{
    rightnav.ClassList.toggleClass(".v-class-resp");
    navlist.ClassList.toggleClass(".v-class-resp");
    navber.ClassList.toggleClass(".h-class-resp");
})