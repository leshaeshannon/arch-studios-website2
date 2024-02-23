const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const overlay = document.querySelector('.dark-overlay-nav-mobile');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        overlay.classList.toggle('overlay-active')

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.3s ease forwards`
            }
        });
        burger.classList.toggle('toggle');
    });

}

navSlide();

export { navSlide };