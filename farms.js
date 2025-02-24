// Redirect if not logged in
if (localStorage.getItem("isLoggedIn") !== "true") {
    window.location.href = "login.html";
}

document.addEventListener("DOMContentLoaded", function () {
    let farmTable = document.getElementById("farmTable");
    let farmForm = document.getElementById("farmForm");

    // Load stored farms from LocalStorage
    function loadFarms() {
        let farms = JSON.parse(localStorage.getItem("farms")) || [];
        farms.forEach(farm => addFarmToTable(farm));
    }

    // Add farm details to the table
    function addFarmToTable(farm) {
        let row = farmTable.insertRow();
        row.innerHTML = `
            <td>${farm.farmName}</td>
            <td>${farm.ownerName}</td>
            <td>${farm.location}</td>
            <td>${farm.area}</td>
            <td>${farm.syNo}</td>
            <td><a href="${farm.attachment}" target="_blank">Meebhoomi</a></td>
        `;
    }

    // Handle form submission
    farmForm.addEventListener("submit", function (event) {
        event.preventDefault();

        let farm = {
            farmName: document.getElementById("farmName").value,
            ownerName: document.getElementById("ownerName").value,
            location: document.getElementById("location").value,
            area: document.getElementById("area").value,
            syNo: document.getElementById("syNo").value,
            attachment: document.getElementById("attachment").value,
        };

        let farms = JSON.parse(localStorage.getItem("farms")) || [];
        farms.push(farm);
        localStorage.setItem("farms", JSON.stringify(farms));

        addFarmToTable(farm);
        farmForm.reset();
    });

    // Load farms on page load
    loadFarms();
});
