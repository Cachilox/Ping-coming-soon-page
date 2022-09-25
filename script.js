let inputEmail = document.getElementById("email")
let button = document.getElementById("button") 
let error = document.getElementById("error")

button.addEventListener("click", (e) => {
    e.preventDefault()
    validateEmail(inputEmail.value)
});

function validateEmail(email) {
    let expReg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
    if (expReg.test(email) == true) {
        inputEmail.style.border = "1px solid green";
        error.style.visibility = "hidden";
        inputEmail.value = "";
        Swal.fire({
            icon: 'success',
            title: 'Gracias por suscribirse',
            text: 'Le estaremos notificando de las próximas novedades!',
        });
    } else {
        inputEmail.style.border = "1px solid red";
        error.style.visibility = "visible";
    }
}