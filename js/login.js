function login(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if(username==="testuser" && password==="test"){
        window.location.href="dashboard.html"
    } else {
        document.getElementById("wrong-creds").style.visibility = "visible"
        document.getElementById("username").value = ""
        document.getElementById("password").value = ""
    }
}