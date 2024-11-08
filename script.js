function login() {
    var username = document.getElementById("username").value;
    document.getElementById("userName").textContent = username;
    document.getElementById("login-section").style.display = "none";
    document.getElementById("dashboard-section").style.display = "block";
}

async function fetchdata() {
    let output = document.getElementById("top");
    if (output.children.length > 0) {
        console.log("Data already fetched.");
        return;
    }

    try {
        const response = await fetch("https://api.github.com/users?per_page=10");
        const data = await response.json();
        console.log(data);
        data.forEach(user => {

            let a = document.createElement("ul");
            let li = document.createElement("li");
            let hy = document.createElement("a");
            hy.textContent = user.login;
            hy.setAttribute("href", user.html_url);
            hy.setAttribute("target", "_blank");
            li.appendChild(hy);
            a.appendChild(li);
            output.appendChild(a);

        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
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
    if(selectedUser=="Alphabetical") {

    }
    else{

    }
    
}
