console.log("funguj")
const arrow = document.getElementById('arrow');
const target = document.getElementById('target');

arrow.addEventListener('click', () => {
    if (target.style.display === 'none' || target.style.display === '') {
        target.style.display = 'block';
    } else {
        target.style.display = 'none';
    }
});