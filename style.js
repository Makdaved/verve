const myForm = document.getElementById("myForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const confirmInput = document.getElementById("confirm");
const btn = document.getElementById("btn");

btn.addEventListener("click", function (event) {
  event.preventDefault();
  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();
  const confirm = confirmInput.value.trim();
 
  if (username === "") {
    btn.textContent = "Username is required.";
    btn.style.backgroundColor = "red";
    btn.style.color = "white";
    return;
  }
  if (password === "") {
    btn.textContent = "Password is required.";
    btn.style.backgroundColor = "red";
    btn.style.color = "white";
    return;
  }

  if (password !== confirm) {
    btn.textContent = "Password don't match";
    btn.style.backgroundColor = "red";
    btn.style.color = "white";
    return;
  }

  btn.textContent = "Form submitted successfully!";
  btn.style.backgroundColor = "green";
  btn.style.color = "white";
  appendMessage("Form submitted successfully!");
});
