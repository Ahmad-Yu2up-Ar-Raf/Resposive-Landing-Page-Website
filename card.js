// cartSytem
const cartbutton = document.querySelectorAll(".cartbutton")
const cartbutton2 = document.getElementById("addToCart")
let cartCount = document.getElementById("p1")
let x = 0
cartbutton.forEach((button) => button.addEventListener("click", () => {
    x++
    cartCount.style.display = "inline"
    cartCount.innerText = x
}))

// toggle dropdown 
const dropIcon = document.getElementById('drop')
const dropdown = document.getElementById('dropdown-menu')
const dropdown2 = document.getElementById('dropdown-menu')


dropIcon.addEventListener('click', function() {
    dropdown.classList.toggle('show');
    
    // Cek apakah dropdown dalam kondisi terbuka atau tertutup
    if (dropdown.classList.contains('show')) {
        // Dropdown terbuka, ikon diputar 180 derajat
        dropIcon.style.transform = 'rotate(180deg)';
    } else {
        // Dropdown tertutup, ikon kembali ke posisi semula
        dropIcon.style.transform = 'rotate(0deg)';
    }
});


// sidebar 
const CartIcon = document.getElementById("cartIcon")
const slideCart = document.querySelector(".cartside")
const body = document.querySelector(".navbar")
const slider = document.querySelector(".slider")
const container = document.querySelector(".navbar")


CartIcon.addEventListener("click" , (e) => {
    e.preventDefault()
    slideCart.classList.toggle("slideActive")
    body.classList.toggle("slideActive")
    slider.classList.toggle("slide")
    container.classList.toggle("slide")
    dropdown.classList.toggle("slide")
})

document.addEventListener("click", (e) => {
    if(!CartIcon.contains(e.target) && !slideCart.contains(e.target) && e.target.id !== 'addToCart'  ){
        slideCart.classList.remove("slideActive")
        slider.classList.remove("slide")
        container.classList.remove("slide")
        dropdown.classList.remove("slide")
    }
    if(!dropIcon.contains(e.target) && !dropdown.contains(e.target) ){
        dropdown.classList.remove("show")
        dropIcon.style.transform = "rotate(0deg)"
    }
})