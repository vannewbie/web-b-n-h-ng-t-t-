const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const signInForm = document.querySelector("#sign-in-form")
// DOM
function handleSignIn(event) {
    event.preventDefault()

    let email = emailInput.value
    let password = passwordInput.value
    
    if(!email || !password) {
        alert("Please fill all field!")
        return;
    }
    
    let accountList = JSON.parse(localStorage.getItem("user-list"))
    for(let i = 0; i < accountList.length; i++) {
        let currentAccount = accountList[i];

        if (email == currentAccount.email && password == currentAccount.password) {
            alert("Đăng nhập thành công")

            window.location.pathname = "/src/home.html";
            return
        }

        alert("Email or Pasword is not correct")

    }

}
// handle sign in

// add event 
signInForm.addEventListener("submit", function (event) {
    handleSignIn(event)
})