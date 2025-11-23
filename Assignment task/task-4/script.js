const form = document.getElementById("regForm");

    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const passInput = document.getElementById("password");

    const nameErr = document.getElementById("nameErr");
    const emailErr = document.getElementById("emailErr");
    const passErr = document.getElementById("passErr");


    // ---------------- LIVE CHECK NAME ----------------
    nameInput.addEventListener("input", function () {
      if (nameInput.value.trim() === "") {
        nameErr.textContent = "Name is required";
        nameInput.classList.add("invalid");
        nameInput.classList.remove("valid");
      } else {
        nameErr.textContent = "";
        nameInput.classList.remove("invalid");
        nameInput.classList.add("valid");
      }
    });


    // ---------------- LIVE CHECK EMAIL ----------------
    emailInput.addEventListener("input", function () {
      if (!emailInput.value.includes("@")) {
        emailErr.textContent = "Email must include '@'";
        emailInput.classList.add("invalid");
        emailInput.classList.remove("valid");
      } else {
        emailErr.textContent = "";
        emailInput.classList.remove("invalid");
        emailInput.classList.add("valid");
      }
    });


    // ---------------- LIVE CHECK PASSWORD ----------------
    passInput.addEventListener("input", function () {
      let password = passInput.value;

      if (password.length !== 8) {
        passErr.textContent = "Password must be exactly 8 characters";
        passInput.classList.add("invalid");
        passInput.classList.remove("valid");
      }
      else if (!password.match(/[!@#$%^&*]/)) {
        passErr.textContent = "Must include at least one special character (!@#$%^&*)";
        passInput.classList.add("invalid");
        passInput.classList.remove("valid");
      }
      else {
        passErr.textContent = "";
        passInput.classList.remove("invalid");
        passInput.classList.add("valid");
      }
    });


    // ---------------- SUBMIT CHECK ----------------
    form.addEventListener("submit", function(e) {
      e.preventDefault();

      if (
        nameInput.classList.contains("valid") &&
        emailInput.classList.contains("valid") &&
        passInput.classList.contains("valid")
      ) {
        alert("Form Submitted Successfully!");
      } else {
        alert("Please fix the errors before submitting.");
      }
    });