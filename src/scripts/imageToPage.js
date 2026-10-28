if (typeof document !== 'undefined') {


const b1img = document.getElementById("b1img");
const b2img = document.getElementById("b2img");
const b3img = document.getElementById("b3img");
const b4img = document.getElementById("b4img");

const e1img = document.getElementById("e1img");
const e2img = document.getElementById("e2img");

const posterImages = [b1img, b2img, b3img, b4img, e1img, e2img];

posterImages.forEach(button => {
    button.addEventListener('click', buttonCheck(button, 1));
});

function buttonCheck(button, num) {
    switch (num) {
    case 1:
        button
        break;
    default:
        console.log('huh');
    }
}

}