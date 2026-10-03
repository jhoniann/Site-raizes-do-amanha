const btnTopo = document.getElementById("btnTopo");

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {
        btnTopo.classList.add("mostrar");
    } else {
        btnTopo.classList.remove("mostrar");
    }

});

btnTopo.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});