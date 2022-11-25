window.addEventListener('scroll', () => {
    const header = document.querySelector('.first-section')
    header.classList.toggle('sticky', window.scrollY > 0)
})