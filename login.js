document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let errorMsg = document.getElementById("errorMsg");

    // Default username and password
    const correctUsername = "admin";
    const correctPassword = "password123";

    if (username === correctUsername && password === correctPassword) {
        localStorage.setItem("isLoggedIn", "true");
        window.location.href = "dashboard.html"; // Redirect after successful login
    } else {
        errorMsg.textContent = "Invalid Username or Password!";
    }
});

// Redirect if already logged in
if (localStorage.getItem("isLoggedIn") === "true") {
    window.location.href = "dashboard.html";
}
