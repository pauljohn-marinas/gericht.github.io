const btn = document.getElementById("toggle-button");
const menu = document.getElementById("toggle-menu");
btn.addEventListener("click", () => {
    menu.classList.toggle("open");
});

function carousel(){
    let carouselSlider = document.querySelector(".gallery__image__wrapper");
    let list = document.querySelector(".gallery__list");
    let item = document.querySelector(".gallery__item");
    let list2;

    const speed = 1;

    const width = list.offsetWidth;
    let x = 0;
    let x2 = width;

    // function clone() {
    //     list2 = list.cloneNode(true);
    //     carouselSlider.appendChild(list2);
    //     list2.style.left = `${width}px`;
    // }

    function moveFirst() {
        x -= speed;

        if (width >= Math.abs(x)){
            list.style.left = `${x}px`;
        }else{
            x = width;
        }
    }
    // function moveSecond() {
    //     x2 -= speed;

    //     if (list2.offsetWidth >= Math.abs(x2)) {
    //         list2.style.left = `${x2}px`;
    //     }else{
    //         x2 = width;
    //     }
    // }

    // clone()

    let a = setInterval(moveFirst, 10);
    // let b = setInterval(moveSecond, 10);
}

// carousel();