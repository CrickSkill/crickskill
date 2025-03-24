function reload() { 
    location.reload();
}
const menuBtn = document.getElementById('menuBtn');
const slider = document.getElementById('slider');
const closeBtn = document.getElementById('closeBtn');

menuBtn.addEventListener('click', () => {
    slider.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    slider.classList.remove('active');
});
const images = [
    'https://i.ibb.co/v6Dw4SqX/shot3.jpg',
    'https://i.ibb.co/Y7LhqkN9/shot2.jpg',
    'https://i.ibb.co/TMT3PL39/shot4.jpg',
    'https://i.ibb.co/xqKQpbHK/shot1.jpg'
];
let currentIndex = 0;
const imageElement = document.getElementById('image');
imageElement.src = images[currentIndex];

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    imageElement.src = images[currentIndex];
}
