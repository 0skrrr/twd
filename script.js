console.log("funguj")
const arrow = document.getElementById('arrow');
const seasonOne = document.getElementById('seasonOne');

arrow.addEventListener('click', () => {
    if (seasonOne.style.display === 'none' || seasonOne.style.display === '') {
        seasonOne.style.display = 'block';
    } else {
        seasonOne.style.display = 'none';
    }
});;