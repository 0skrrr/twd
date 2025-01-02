console.log("Funguj");
var arrow = document.getElementsById("arrow");
var target = document.getElementsById("target");

target.classList.add("targetoff");

arrow.addEventListener("click", functionone);

function functionone () {
    if (target.classList.contains("targetoff")) {
        target.classList.add("targeton");
        target.classList.remove("targetoff")
    }
    else {
        target.classList.add("targetoff");
        target.classList.remove("targeton");
    }
}