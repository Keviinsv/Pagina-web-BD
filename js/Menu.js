const Menu = document.querySelector('.Menu')
const menu = document.querySelector('.Menu-navegacion')



Menu.addEventListener('click', () => {
    menu.classList.toggle("spread")
})

window.addEventListener('click', e => {
    if (menu.classList.contains('spread')
        && e.targen != menu && e.target != Menu) {
        menu.classList.toggle("spread")
    }



})
