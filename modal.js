const modals = document.querySelectorAll(".modal");
const btn = document.querySelectorAll(".openModal");
const span = document.querySelectorAll(".close");

btn.forEach((button, index) => {
    button.onclick = function() {
        modals[index].style.display = "block"; // Exibe a modal
    };
});

span.forEach((button, index) => {
    span.onclick = function() {
        modals[index].style.display = "none"; // Fecha a modal
    };
});
window.onclick = function(event) {
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = "none"; // Fecha se clicar fora da modal
        }

    });
};
