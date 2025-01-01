

console.log("funguj");

const arrow = document.getElementById('arrow');
const target = document.getElementById('target');

target.style.display = 'none';

arrow.addEventListener('click', () => {
    const currentDisplay = window.getComputedStyle(target).display;
    if (currentDisplay === 'none') {
        target.style.display = 'block';
    } else {
        target.style.display = 'none';
    }
});