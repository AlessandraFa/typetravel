
var buttonNext2 = document.querySelector("#next-article-2");
var buttonNext3 = document.querySelector("#next-article-3");
var buttonPrev1 = document.querySelector("#prev-article-1");
var buttonPrev2 = document.querySelector("#prev-article-2");
var art1 = document.querySelector("#article-1");
var art2 = document.querySelector("#article-2");
var art3 = document.querySelector("#article-3");

// var visualizedRespArt = "article-1";

// function responsiveNavigation(id) {
//     let arrAction = id.split("-");
//     let action = arrAction[0];
//     let articleId = arrAction[1] +"-"+ arrAction[2];
//     switch (articleId) {
//         case "article-1":
//             art1.classList.remove("d-none");
//             art2.classList.add("d-none");
//             buttonNext2.classList.remove("d-none");
//             buttonPrev1.classList.add("d-none");
//             buttonNext3.classList.add("d-none");
//             visualizedRespArt = articleId;
//             break;
//         case "article-2":
//             art2.classList.remove("d-none");
//             buttonNext3.classList.remove("d-none");
//             buttonPrev1.classList.remove("d-none");
//             if (action === "prev") {
//                 art3.classList.add("d-none");
//                 buttonPrev2.classList.add("d-none");
//             } else {
//                 art1.classList.add("d-none");
//                 buttonNext2.classList.add("d-none");
//             }
//             visualizedRespArt = articleId;
//             break;
//         case "article-3":
//             art3.classList.remove("d-none");
//             art2.classList.add("d-none");
//             buttonPrev2.classList.remove("d-none");
//             buttonNext3.classList.add("d-none");
//             visualizedRespArt = articleId;
//             break;
//     }
// }

// window.setInterval(() => {
//     if (window.innerWidth >= 992) {
//         buttonPrev1.classList.add("d-none");
//         buttonPrev2.classList.add("d-none");
//         buttonNext3.classList.add("d-none");
//         buttonNext2.classList.add("d-none");
//     } else {
//         switch (visualizedRespArt) {
//             case "article-1":
//                 buttonNext2.classList.remove("d-none");
//                 break;
//             case "article-2":
//                 buttonNext3.classList.remove("d-none");
//                 buttonPrev1.classList.remove("d-none");
//                 break;
//             case "article-3":
//                 buttonPrev2.classList.remove("d-none");
//         }
        
//     }
// }, 1000);


// change the theme
function changeTheme(id) {
  const theme = document.getElementsByTagName('link')[1];
  switch (id) {
      case "enable-renaissance":
          theme.href = "../styles/themes/renaissance/mainRenaissance.css";
          break;
      case "enable-default":
          theme.href = "../styles/themes/basicStyle/mainBasic.css";
          break;
      case "enable-secession":
          theme.href = "../styles/themes/secession/mainSecession.css";
          break;
      case "enable-eighty":
          theme.href = "../styles/themes/eighty/mainEighty.css";
          break;
      case "enable-future":

          theme.href = "../styles/themes/future/mainFuture.css";
          break;
  }
}

function changeThemeHome(id) {
    const theme = document.getElementsByTagName('link')[1];
    switch (id) {
        case "enable-renaissance":
            theme.href = "../styles/themes/renaissance/homeRenaissance.css";
            break;
        case "enable-default":
            theme.href = "../styles/themes/basicStyle/homeBasic.css";
            break;
        case "enable-secession":
            theme.href = "../styles/themes/secession/homeSecession.css";
            break;
        case "enable-eighty":
            theme.href = "../styles/themes/eighty/homeEighties.css";
            break;
        case "enable-future":
            theme.href = "../styles/themes/future/homeFuture.css";
            break;
    }
  }

  function changeThemeDoc(id) {
    const theme = document.getElementsByTagName('link')[1];
    switch (id) {
        case "enable-renaissance":
            theme.href = "../styles/themes/renaissance/docRenaissance.css";
            break;
        case "enable-default":
            theme.href = "../styles/themes/basicStyle/docBasic.css";
            break;
        case "enable-secession":
            theme.href = "../styles/themes/secession/docSecession.css";
            break;
        case "enable-eighty":
            theme.href = "../styles/themes/eighty/docEighties.css";
            break;
        case "enable-future":
            theme.href = "../styles/themes/future/docFuture.css";
            break;
    }
  }

  function changeThemeAbout(id) {
    const theme = document.getElementsByTagName('link')[1];
    switch (id) {
        case "enable-renaissance":
            theme.href = "../styles/themes/renaissance/aboutRenaissance.css";
            break;
        case "enable-default":
            theme.href = "../styles/themes/basicStyle/aboutBasic.css";
            break;
        case "enable-secession":
            theme.href = "../styles/themes/secession/aboutSecession.css";
            break;
        case "enable-eighty":
            theme.href = "../styles/themes/eighty/aboutEighties.css";
            break;
        case "enable-future":
            theme.href = "../styles/themes/future/aboutFuture.css";
            break;
    }
  }

function changeModeFuture(id){
  const theme = document.getElementsByTagName('link')[1];
  switch (id) {
      case "enable-futuredark":
        theme.href = "../styles/themes/future/mainFuture.css";
        break;
      case "enable-futurelight":
        theme.href = "../styles/themes/future/mainFutureLight.css";
        break;
  }
}

function changeModeFutureDoc(id){
    const theme = document.getElementsByTagName('link')[1];
    switch (id) {
        case "enable-futuredark":
          theme.href = "../styles/themes/future/docFuture.css";
          break;
        case "enable-futurelight":
          theme.href = "../styles/themes/future/docFutureLight.css";
          break;
    }
  }

function artNouveauPrev() {
    const splash = document.querySelector('.splash');

}

function renaissancePrev() {
    const splash = document.querySelector('.splash');

}

function eightyPrev() {
    const splash = document.querySelector('.splash');

}


function addClass(element) {
    if (element.innerHTML == "Read Better") {
        document.getElementById("metadata").classList.remove("col-md-3","d-md-block");
        document.getElementById("article-1").classList.replace("col-lg-3", "col-lg-4");
        document.getElementById("article-2").classList.replace("col-lg-3", "col-lg-4");
        document.getElementById("article-3").classList.replace("col-lg-3", "col-lg-4");
        document.getElementById("article-1").classList.add("larger");
        document.getElementById("article-2").classList.add("larger");
        document.getElementById("article-3").classList.add("larger");
        document.getElementById("expand-animation").classList.add("all-articles");
        element.innerHTML = "Read More";
    } else {
        document.getElementById("metadata").classList.add("col-md-3", "d-md-block");
        document.getElementById("article-1").classList.replace("col-lg-4", "col-lg-3");
        document.getElementById("article-2").classList.replace("col-lg-4", "col-lg-3");
        document.getElementById("article-3").classList.replace("col-lg-4", "col-lg-3");
        document.getElementById("article-1").classList.remove("larger-before");
        document.getElementById("article-2").classList.remove("larger-before");
        document.getElementById("article-3").classList.remove("larger-before");
        document.getElementById("expand-animation").classList.remove("all-articles");
        element.innerHTML = "Read Better";
    }  
}

// responsive buttons

var articleShowed = "1";