// -------------------Initial Setup------------------ //

console.log("Collision Detection");

const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

setup();

function setup() {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    init();
    animate();
}

// ------------------Variables--------------------- //

const mouse = {
    x: innerWidth / 2,
    y: innerHeight / 2
}

const default_colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66'];

// ------------------Event Listeners----------------- //
addEventListener('mousemove', (event) => {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
})

addEventListener('resize', () => {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    init();
})

// ----------------Main Methods-------------------- //

function init() {
    //main
}

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, canvas.width, canvas.height);
}

// -------------Helper Functions------------------ //

function randomIntFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomColor(colors) {
    return colors[Math.floor(Math.random() * colors.length)];
}

// ------------Program--------------------------- //

