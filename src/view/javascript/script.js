const nav = document.querySelector("#nav");
const forecast = document.querySelector(".forecast");
const burger = document.querySelector(".burger");

burger.addEventListener("click", () => {
    if(nav.classList.contains("invisible")){
        nav.classList.remove("invisible");
        forecast.classList.add("invisible2");
    } else{
        nav.classList.add("invisible");
        forecast.classList.remove("invisible2");
    }
});

