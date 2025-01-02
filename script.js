console.log("Funguj");
var arrow = document.getElementsByClassName("arrow");
var target = document.getElementsByClassName("target");



arrow.addEventListener("click", functionOne);

function functionOne () {
    if (target.style.display === "none") {
        target.style.display = "block";
    }
    else {
        target.style.display = "none";
    }
}