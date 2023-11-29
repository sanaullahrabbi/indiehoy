const nombre = document.getElementById("name");
const mail = document.getElementById("mail");
const area = document.getElementById("area");

document.querySelector("#contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    document.getElementById("modalMessage").innerHTML =
        " Gracias " + nombre.value + " Te enviamos un mail al correo mientras inicia tu descarga a " + mail.value;
    nombre.value = "";
    mail.value = "";
    document.querySelector("#submitModal").classList.remove("hidden");
});
document.querySelector("#submitModalCloseBtn").addEventListener("click", function () {
    document.querySelector("#submitModal").classList.add("hidden");
});
