const nav = document.querySelector("#nav");
const burger = document.querySelector(".burger");

burger.addEventListener("click", () => {
    if(nav.classList.contains("invisible")){
        nav.classList.remove("invisible");
    } else{
        nav.classList.add("invisible");
    }
});

