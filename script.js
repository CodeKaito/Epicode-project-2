let items = document.querySelectorAll('.carousel .carousel-item');
items.forEach((el) => {
    const slide = 6;
    let next = el.nextElementSibling;
    for(let i = 0; i < slide; i++) {
        if(!next) {
            next = items[0];
        }
        let clonechild = next.cloneNode(true);
        e.appendChild(clonechild.children[0]);
        next = next.nextElementSibling;
    }
})