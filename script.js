console.log("Funguj");
const arrow = document.getElementsByClassName("arrow");
const target = document.getElementsByClassName("target");

target.style.display = "none";

arrow.addEventListener("click", functionOne);

function functionOne () {
    if (target.style.display === "none") {
        target.style.display = "block";
    }
    else {
        target.style.display = "none";
    }
}