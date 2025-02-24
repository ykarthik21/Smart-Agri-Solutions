document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "admin" && password === "password123") {
        localStorage.setItem("isLoggedIn", "true");
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid username or password!");
    }
});

// Check if user is logged in
if (window.location.pathname.includes("dashboard.html") && localStorage.getItem("isLoggedIn") !== "true") {
    window.location.href = "index.html";
}
