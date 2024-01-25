const colors = ["Red", "Green", "Blue"];

function pickRandomColor() {
    return colors[Math.random() * colors.length];
}

function changeText(newText) {
    const textbox = document.querySelector('.center-text');
    textbox.textContent = newText;
}