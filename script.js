document.getElementById("contactBtn").addEventListener("click", function () {
  const email = document.getElementById("email");
  if (email.classList.contains("hidden")) {
    email.classList.remove("hidden");
    this.textContent = "Hide Email";
  } else {
    email.classList.add("hidden");
    this.textContent = "Click to Show Email";
  }
});
