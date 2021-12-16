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