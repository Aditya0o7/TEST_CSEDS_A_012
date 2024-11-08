function login() {
    var username = document.getElementById("username").value;
    document.getElementById("userName").textContent = username;
    document.getElementById("login-section").style.display = "none";
    document.getElementById("dashboard-section").style.display = "block";
}

function logout() {
    document.getElementById("login-section").style.display = "block";
    document.getElementById("dashboard-section").style.display = "none";
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
}

function showPanel() {
    var userDropdown = document.getElementById("userDropdown");
    var selectedUser = userDropdown.options[userDropdown.selectedIndex].value;
    document.getElementById("userName").textContent = selectedUser;
}
