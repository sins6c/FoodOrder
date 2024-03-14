const signup = document.getElementById("signup");
const signin = document.getElementById("signin");

signup.addEventListener("change", () => {
    if (signup.checked) {
        signin.checked = false;
    }
});

signin.addEventListener("change", () => {
    if (signin.checked) {
        signup.checked = false;
    }
});
