
let button = document.getElementById("btn");
let lighr = document.getElementById("light")

button.addEventListener("click",()=>{
    button.classList.toggle("active");
    lighr.classList.toggle("on")
})