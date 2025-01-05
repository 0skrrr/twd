window.onload = function () {
    console.log("Funguj už prosím ale");
    var arrow = document.getElementById("arrow");
    var target = document.getElementById("target");



    console.log("arrow: " + arrow);
    console.log("target: " + target);

    if (arrow != null) {

        target.classList.add("targetoff");
        arrow.classList.add("arrowon");


        function expand() {
            if (target.classList.contains("targetoff")) {
                target.classList.add("targeton");
                target.classList.remove("targetoff");
                arrow.classList.add("arrowoff");
                arrow.classList.remove("arrowon");
            } else {
                target.classList.add("targetoff");
                target.classList.remove("targeton");
                arrow.classList.add("arrowon");
                arrow.classList.remove("arrowoff");
            }
        }

        arrow.addEventListener("click", expand);
    }




    console.log("haloo");

    setStartProperty();
    setEndProperty();
    setTimeout(startHelicopter, 600000);
    console.log("fungujpotrat7");


    function manual() {
        var button = document.getElementById("crm_button");
        button.addEventListener("click", najednou);
        console.log("fungujpodruh");
    }
    manual();
};


function EndHelicopter() {
    const rootDva = document.querySelector(":root");
    var view = document.querySelector("body");
    view.classList.remove("shaking");
    rootDva.style.setProperty("--animationName", "none");
    rootDva.style.setProperty("--animationDisplay", "none");
    console.log("fungujpotrat");
}

function setStartProperty() {
    const StartWidth = Math.random() * 100;
    const r = document.querySelector(":root");

    r.style.setProperty("--animationStartHeight", StartWidth + "vh");
    console.log("fungujpotrat2");

}

function setEndProperty() {
    const EndWidth = Math.random() * 100;
    const r = document.querySelector(":root");
    r.style.setProperty("--animationEndHeight", EndWidth + "vh");
    console.log("fungujpotrat3");
}

function najednou() {
    setStartProperty();
    setEndProperty();
    startHelicopter();
    console.log("fungujpotra5");
}

function startHelicopter() {
    console.log("fungujpotrat4");
    const rootDva = document.querySelector(":root");
    var view = document.querySelector("body");
    console.log("fungujpotrat5");
    console.log("view: " + view);
    view.classList.add("shaking");
    console.log("fungujpotrat6");
    rootDva.style.setProperty("--animationDisplay", "block");
    rootDva.style.setProperty("--animationName", "move");

    setTimeout(EndHelicopter, 3000);
    console.log("fungujpotrat4");
}
