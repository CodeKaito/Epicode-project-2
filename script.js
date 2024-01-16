const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    })
})

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('.lazy').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

let carousels = ['#trending-carousel', '#watchagain-carousel', '#newreleases-carousel'];

carousels.forEach((carousel) => {
    let items = document.querySelectorAll(`${carousel} > .carousel-item`);
    items.forEach((e) => {
        const slide = 6;
        let next = e.nextElementSibling;
        for (let i = 0; i < slide; i++) {
            if (!next) {
                next = items[0];
            }
            let clonechild = next.cloneNode(true);
            e.appendChild(clonechild.children[0]);
            next = next.nextElementSibling;
        }
    });
});