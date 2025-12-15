import gsap from "gsap";

const button = document.querySelector(".scroll-to-top");

let isFloating = false;

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        button.classList.add ('show')

        if (!isFloating) {
            gsap.to(button, {
                y : -10,
                duration: 1.5,
                repeat: -1,
                yoyo : true,
                ease: 'sine.out'
            })

            isFloating = true;
        } 
    } else {
        button.classList.remove('show')
    }
})