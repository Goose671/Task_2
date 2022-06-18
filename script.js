const logInForm = document.getElementById("logInForm");
logInForm.addEventListener('submit', logIn);

let user = {
    email:    "" ,
    password: ""
};

function logIn(e) {
    e.preventDefault();
    user.email = document.getElementById("email").value;
    user.password = document.getElementById("password").value;
    console.log(user);
}