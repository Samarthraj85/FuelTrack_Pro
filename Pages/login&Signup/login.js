
function mybtn() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if(username === "admin" && password === "1235") {
        alert("Login Successful");
    } else {
        alert("Invalid Credentials");
    }
}