```javascript
const body = document.body;

if(localStorage.getItem("theme") === "light"){
    body.classList.add("light-mode");
}

function toggleTheme(){

    body.classList.toggle("light-mode");

    if(body.classList.contains("light-mode")){
        localStorage.setItem("theme","light");
    }else{
        localStorage.setItem("theme","dark");
    }

}

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if(window.scrollY > 50){
        navbar.style.boxShadow = "0 0 15px rgba(0,0,0,0.3)";
    }else{
        navbar.style.boxShadow = "none";
    }

});
```
