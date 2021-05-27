const form = document.querySelector(".notify-form");
const email = form.querySelector(".form-input");
const errorMessage = document.querySelector(".error-message");

const isValidEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
const setError = (message) => {
    errorMessage.innerHTML = message;
    email.classList.add("has-error");
    setTimeout(() => {
        errorMessage.innerHTML = "";
        email.classList.remove("has-error");
    }, 3000);
}
form.addEventListener("submit", (e) => {
    let hasError = false;
    if (!email.value) {
        setError("Woops! It looks like you forgot to at your email");
        hasError = true;
    } else if (!isValidEmail(email.value)) {
        setError("Please provide a valid email address");
        hasError = true;
    }
    if (hasError)
        e.preventDefault();
    else
        //Do something...
        console.log("I'm doing something...");
});
