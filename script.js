document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("signupForm");
  if (form) {
    form.addEventListener("submit", function(event) {
      const name = document.getElementById("name");
      const email = document.getElementById("email");
      const password = document.getElementById("password");

      if (!name.value || !email.value || !password.value) {
        alert("All fields are required.");
        event.preventDefault();
        return;
      }

      if (password.value.length < 6) {
        alert("Password must be at least 6 characters.");
        event.preventDefault();
      }
    });
  }
});
