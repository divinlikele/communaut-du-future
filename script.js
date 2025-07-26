document.addEventListener('DOMContentLoaded', () => {

    const scrollElements = document.querySelectorAll(".animate-on-scroll");

    const elementInView = (el, dividend = 1) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
        );
    };

    const displayScrollElement = (element) => {
        element.classList.add("is-visible");
    };

    const hideScrollElement = (element) => {
        element.classList.remove("is-visible");
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 1.25)) {
                displayScrollElement(el);
            } 
            // Optional: To re-animate when scrolling up
            // else {
            //     hideScrollElement(el);
            // }
        });
    };

    // Initial check
    handleScrollAnimation();
    window.addEventListener("scroll", () => {
        handleScrollAnimation();
    });

});

