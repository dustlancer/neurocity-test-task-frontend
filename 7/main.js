const numSquares = Math.floor(Math.random() * 91) + 10;

for (let i = 0; i < numSquares; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.backgroundColor = getRandomColor();
    document.body.appendChild(square);
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}