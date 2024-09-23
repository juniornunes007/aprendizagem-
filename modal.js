const modal = document.getElementById("myModal");
const btn = document.getElementById("openModal");
const span = document.getElementsByClassName("close")[0];
btn.onclick = function () {
    modal.style.display = "block"; // Exibe a modal
}
span.onclick = function () {
    modal.style.display = "none"; // Fecha a modal
}
window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none"; // Fecha se clicar fora da modal
    }
}
