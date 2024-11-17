// toggle slide
const slideIcon = document.querySelector(".fa-bars")
const slideBar = document.querySelector(".navbar-content")

slideIcon.addEventListener("click", function(){
    slideBar.classList.toggle("active")
})



document.addEventListener("click", (e) => {
    if(!slideIcon.contains(e.target) && !slideBar.contains(e.target)){
        slideBar.classList.remove("active")
    }
})