var strDynamicTitle = document.querySelector("#str-dynamic-title"),
          strings = ["Type", "Time"],
          currentWord = 1;
          
window.setInterval(() => {
    currentWord++;
    if(currentWord >= strings.length) {
        currentWord=0
        strDynamicTitle.textContent = strings[currentWord];
        strDynamicTitle.style.color = "unset";
        strDynamicTitle.style.textShadow= "unset";
    } else {
        strDynamicTitle.textContent = strings[currentWord];
        strDynamicTitle.style.color = "var(--time-color)";
        strDynamicTitle.style.transition = "var(--time-transition)";
        strDynamicTitle.style.textShadow = "var(--time-shadow)";
    }
}, 2000);

const navbar = document.querySelector('.nav-fixed');
const collapseNav = document.querySelector(".navbar-collapse");
window.onscroll = () => {
     if (window.scrollY > 30) {
         navbar.classList.add('nav-active');
     } else {
         navbar.classList.remove('nav-active');
     }
 };