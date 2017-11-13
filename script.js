function getRandomIdx(max) {
    return (max <= 9 ?
        Math.floor((Math.random() * 10)+1) % max :
        0);}

var backgroundImages = [
    "http://xn--24-6kc3bf4angc2g.xn--p1ai/download/%D0%BC%D0%B0%D1%81%D1%81%D0%BE%D0%B2%D1%8B%D0%B5%20%D0%BC%D0%B5%D1%80%D0%BE%D0%BF%D1%80%D0%B8%D1%8F%D1%82%D0%B8%D1%8F/Semk874vvS4.jpg",
    "http://xn--24-6kc3bf4angc2g.xn--p1ai/download/%D0%BC%D0%B0%D1%81%D1%81%D0%BE%D0%B2%D1%8B%D0%B5%20%D0%BC%D0%B5%D1%80%D0%BE%D0%BF%D1%80%D0%B8%D1%8F%D1%82%D0%B8%D1%8F/vHE3es6acxc.jpg",
    "http://xn--24-6kc3bf4angc2g.xn--p1ai/download/%D0%BC%D0%B0%D1%81%D1%81%D0%BE%D0%B2%D1%8B%D0%B5%20%D0%BC%D0%B5%D1%80%D0%BE%D0%BF%D1%80%D0%B8%D1%8F%D1%82%D0%B8%D1%8F/os1mPGriVf0.jpg",
];

function updateBackground() {
    let idx = getRandomIdx(backgroundImages.length);
    let elem = document.querySelector('.header');
    elem.style.backgroundImage = "url(" + backgroundImages[idx] + ")";
}

function fillGaleryWithImages() {
    let galery = document.querySelector('.galery');
}

updateBackground();
fillGaleryWithImages();