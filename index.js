let btnregister = document.querySelector(".register")
let FullName = document.querySelector(".FullName")
let email = document.querySelector(".email")
let password = document.querySelector(".password")
let button2 = document.querySelector(".button2")
let email1 = document.querySelector(".email1")
let p2=document.querySelector(".p2")
let newList = []




btnregister.addEventListener("click", () => {
    let user = {
        fullname: FullName.value,
        email: email.value,
        password: password.value
    }
    newList.push(user)
    localStorage.setItem("users", JSON.stringify(newList))

})
button2.addEventListener("click", () => {
    let data = JSON.parse(localStorage.getItem("users"))
    data.forEach(element => {
        if (email1.value == element.email) {
            p2.textContent=element.fullname
            console.log(element.fullname)
        }
    });

})
