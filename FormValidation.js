const form = document.getElementById("myForm");
const passwordInput = document.getElementById("password");
const passToggleBtn = document.getElementById("pass-toggle-btn");
const thankyouMessage = document.getElementById("thank-you-content");

const showError = (field, errorText) => {
    // field.classList.add("error");
    const errorElement = document.createElement("small");
    errorElement.classList.add("error-text");
    errorElement.innerText = errorText;
    field.closest(".form-group").appendChild(errorElement);

    // console.log(showError);
};

const checkPasswordStrength = (password) =>
    /[!@#$%^&*(),.?":{}|<>]/.test(password);

const validatePassword = (password) => {
    if (password === "") {
        showError(passwordInput, "Enter Your Password");
        console.log(" validate hua")
    } else if (!checkPasswordStrength(password)) {
        showError(
            passwordInput,
            "Please Enter 8 Characters At Least ...uppercase letter."
        );
        console.log(" validate error k sah")
    }
};

const handleFormData = (e) => {
    e.preventDefault();
    const [fullnameinput, emailinput, dateinput, genderinput] = [
        "fullname",
        "email",
        "date",
        "gender"
    ].map((id) => document.getElementById(id));

    const [fullname, email, password, date, gender] = [
        fullnameinput,
        emailinput,
        passwordInput,
        dateinput,
        genderinput,
    ].map((input) => input.value.trim());
console.log("ma yaha hun")
    const emailPattern = /^[\w-\.]+@([\w-]+\.)+[a-z]{2,4}$/;
    document
        .querySelectorAll(".form-group .error")
        .forEach((field) => field.classList.remove("error"));
    document
        .querySelectorAll(".error-text")
        .forEach((errorText) => errorText.remove());

    if (fullname === "") showError(fullnameinput, "Enter Full Name");
    if (!emailPattern.test(email))
        showError(emailinput, "Enter Valid Email Address");
    validatePassword(password);
    if (date === "") showError(dateinput, "Select Your Date Of Birth");
    if (gender === "") showError(genderinput, "Select Your Gender");

    if (document.querySelectorAll("#myForm").length) {
        form.style.display = "none";
        thankyouMessage.style.display = "block";
    }
};

passToggleBtn.addEventListener("click", () => {
    passToggleBtn.className =
        passwordInput.type === "password"
            ? "fa-solid fa-eye-slash"
            : "fa-solid fa-eye";
    passwordInput.type =
        passwordInput.type === "password" ? "text" : "password";
});

form.addEventListener("submit", handleFormData);