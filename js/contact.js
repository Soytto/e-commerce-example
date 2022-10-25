const btnSubmit = document.querySelector("#submit");
const merci = document.querySelector(".merci");
const form = document.querySelector("form");

btnSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    form.style.display = "none";
    merci.style.display = "flex";
})
