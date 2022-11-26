window.addEventListener('scroll', () => {
    const header = document.querySelector('.first-section')
    header.classList.toggle('sticky', window.scrollY > 0)
})

const humberger = document.querySelector('.humberger')

humberger.addEventListener('click', () => {
    const menu = document.querySelector('.main-menu')
    menu.classList.toggle('active')
    humberger.classList.toggle('active')
})