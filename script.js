console.log("Funguj");
var arrow = document.getElementsByClassName("arrow");
var target = document.getElementsByClassName("target");

target.classlist.add("targetoff");

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