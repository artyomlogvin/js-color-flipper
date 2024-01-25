const colors = ['Red', 'Green', 'Blue'];

function pickRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

function changeText(newText) {
    const textbox = document.querySelector('.center-text');
    textbox.textContent = newText;
}

function changeBackColor(newColor) {
    const bgdiv = document.querySelector('.back-div');
    bgdiv.style.backgroundColor = newColor;
}

function updateColor() {
    const newColor = pickRandomColor();

    changeText('Background color : ' + newColor);
    changeBackColor(newColor);
}

updateColor();

const btn = document.querySelector('button');

btn.addEventListener('click', updateColor);