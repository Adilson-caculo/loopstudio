//Menu Resonsive
let show = true ;

const menuSection = document.querySelector(".menu-section")
const menuToggle = menuSection.querySelector(".menu-toggle")
const link = document.getElementById("link")
const link2 = document.getElementById("link2")
const link3 = document.getElementById("link3")

menuToggle.addEventListener("click", () => {
    document.body.style.overflow = show ? "hidden" : "initial"
    menuSection.classList.toggle("on", show)
    show = !show
    
})
link.addEventListener( "click",() =>{
    menuSection.classList.toggle("on", show)
    document.body.style.overflow="initial"
} )
link2.addEventListener( "click",() =>{
    menuSection.classList.toggle("on", show)
    document.body.style.overflow="initial"
} )
link3.addEventListener( "click",() =>{
    menuSection.classList.toggle("on", show)
    document.body.style.overflow="initial"
} )
