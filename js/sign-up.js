const fullNameInput = document.querySelector("#fullname");
const dateOfBirthInput = document.querySelector("#date");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const repeatPasswordInput = document.querySelector("#repeat-password");
const signUpForm = document.querySelector("#sign-up-form")

// Nếu user-list chư acos thì gán bằng mảng rỗng
let accountList = JSON.parse(localStorage.getItem("user-list")) || [];


function handleSignUp(event) {

    event.preventDefault()

    let fullName = fullNameInput.value;
    let dateOfBirth = dateOfBirthInput.value;
    let email = emailInput.value;
    let password = passwordInput.value;
    let repeatPassword = repeatPasswordInput.value;

    // kiểm tra xem đã điền dduur các trường thông tin hay chưa
    // chỉ cần thiếu một trong các trường thì báo lỗi
    if(!fullName || !dateOfBirth || !email || !password || !repeatPassword) {
        alert("Please fill all field!")
        return;
    }

    if (password != repeatPassword) {
        alert("Password is not match")
        return
    }
    let accountData = {
        fullName,
        dateOfBirth,
        email,
        password,
        repeatPassword,
    };

    // Thêm accountData vào accountList
    accountList.push(accountData)

    // Sau khi thêm xong thì lưu lại vào LocalStorage
    localStorage.setItem("user-list", JSON.stringify(accountList))
    window.location.pathname = "/src/sign-in.html";
            return
}

signUpForm.addEventListener("submit", function (event) {
    handleSignUp(event)
})



