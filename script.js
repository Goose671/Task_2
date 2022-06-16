

let user = {
    email:    "" ,
    password: ""
} 

function consoleFunction() {
    user.email = document.getElementById("email").value ;
    user.password = document.getElementById("password").value ;
    console.log(user);
}