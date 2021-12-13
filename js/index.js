
// var buttonNext2 = document.querySelector("#next-article-2");
// var buttonNext3 = document.querySelector("#next-article-3");
// var buttonPrev1 = document.querySelector("#prev-article-1");
// var buttonPrev2 = document.querySelector("#prev-article-2");

// var article1 = document.querySelector("#article-1");
// var article2 = document.querySelector("#article-2");
// var article3 = document.querySelector("#article-3");

// async function that check screen size every 250 ms and call responsiveDisplay(article) when the screen is small
// async function checkScreenSize() {
//   if (window.screen.width <= 992) {
//       await responsiveDisplay(displayedArticleResp);
//   }
//   setTimeout(checkScreenSize, 150);
// }

// function responsiveDisplay(displayedArticleResp) {
//   switch (displayedArticleResp) {
//     case "article-1":
//       article1.style.display = "block";
//       article2.style.display = "none";
//       article3.style.display = "none";
//       buttonsDisplay(displayedArticleResp);
//       break;
//     case "article-2":
//       article2.style.display = "block";
//       article1.style.display = "none";
//       article3.style.display = "none";
//       buttonsDisplay(displayedArticleResp);
//       break;
//     case "article-3":
//       article3.style.display = "block";
//       article1.style.display = "none";
//       article2.style.display = "none";
//       buttonsDisplay(displayedArticleResp);
//       break;
//   }
// }


// function buttonsDisplay(artDisplayed) {
//   switch (artDisplayed) {
//     case "article-1":
//       buttonNext2.style.display = "inline";
//       buttonPrev1.style.display = "none";
//       buttonNext3.style.display = "none";
//       break;
//     case "article-2":
//       buttonPrev1.style.display = "inline";
//       buttonNext3.style.display = "inline";
//       buttonNext2.style.display = "none";
//       buttonPrev2.style.display = "none";
//       break;
//     case "article-3":
//       buttonPrev2.style.display = "inline";
//       buttonNext3.style.display = "none";
//       buttonPrev1.style.display = "none";
//       break;
//   }
// }

// // responsive buttons behaviour
// function toPrev(num) {
//   switch (num) {
//     case 1:
//       document.querySelector("#article-2").style.display = "none";
//       document.querySelector("#article-1").style.dispaly = "block";
//       buttonNext2.style.display = "inline";
//       buttonPrev1.style.display = "none";
//       break;
//     case 2:
//       document.querySelector("#article-3").style.display = "none";
//       document.querySelector("#article-2").style.dispaly = "block";
//       buttonPrev1.style.display = "inline";
//       buttonNext3.style.display = "inline";
//       buttonPrev2.style.display = "none";
//       break;
//   }
// }

// function toNext(num) {
//   switch (num) {
//     case 2:
//       document.querySelector("#article-1").style.display = "none";
//       document.querySelector("#article-2").style.display = "block";
//       buttonPrev1.style.display = "inline";
//       buttonNext3.style.display = "inline";
//       buttonNext2.style.display = "none";
//       break;
//     case 3:
//       document.querySelector("#article-2").style.display = "none";
//       document.querySelector("#article-3").style.display = "block"
//       buttonPrev2.style.display = "inline";
//       buttonNext3.style.display = "none";
//       break;
//   }
// }

// function toTop() {
//   var num = function () {
//     if (displayValueArt1 == "none") {
//       if (displayValueArt2 == "block") {return 2;}
//       else { return 3;}
//     } else {return 1;}
//   }
//   document.getElementById("article-${num}").scrollTop = 0;              
// }

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

// function futurePrev() {
//     const strings = [
//         'HELLO, FABIO.', 'WELCOME TO THE FUTURE.'/*,"LET'S SAVE THE PLANET","BY KEEPIN' IT SIMPLE."*/
//     ];

//     let counter = 0;

//     const options = {
//     // Initial position
//     offset: 0,
//     // Timeout between each random character
//     timeout: 3,
//     // Number of random characters to show
//     iterations: 10,
//     // Random characters to pick from
//     characters: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'y', 'x', '#', '%', '&', '-', '+', '_', '?', '/', '\\', '='],
//     // String to resolve
//     resolveString: strings[counter],
//     // The element
//     element: document.querySelector('[data-target-resolver]')
//     };
//     var splash = document.querySelector('.splash');
//     setTimeout(()=>{
//         splash.classList.add('display-none');
//       }, 5000);

//     var resolver = {
//         resolve: function resolve(options, callback) {
//             // The string to resolve
//             const resolveString = options.resolveString || options.element.getAttribute('data-target-resolver');
//             const combinedOptions = Object.assign({}, options, { resolveString: resolveString });
        
//             function getRandomInteger(min, max) {
//             return Math.floor(Math.random() * (max - min + 1)) + min;
//             };
        
//             function randomCharacter(characters) {
//             return characters[getRandomInteger(0, characters.length - 1)];
//             };
        
//             function doRandomiserEffect(options, callback) {
//             const characters = options.characters;
//             const timeout = options.timeout;
//             const element = options.element;
//             const partialString = options.partialString;
        
//             let iterations = options.iterations;
        
//             setTimeout(() => {
//                 if (iterations >= 0) {
//                 const nextOptions = Object.assign({}, options, { iterations: iterations - 1 });
        
//                 // Ensures partialString without the random character as the final state.
//                 if (iterations === 0) {
//                     element.textContent = partialString;
//                 } else {
//                     // Replaces the last character of partialString with a random character
//                     element.textContent = partialString.substring(0, partialString.length - 1) + randomCharacter(characters);
//                 }
        
//                 doRandomiserEffect(nextOptions, callback);
//                 } else if (typeof callback === "function") {
//                 callback();
//                 }
//             }, options.timeout);
//         };
        
//             function doResolverEffect(options, callback) {
//             const resolveString = options.resolveString;
//             const characters = options.characters;
//             const offset = options.offset;
//             const partialString = resolveString.substring(0, offset);
//             const combinedOptions = Object.assign({}, options, { partialString: partialString });
        
//             doRandomiserEffect(combinedOptions, () => {
//                 const nextOptions = Object.assign({}, options, { offset: offset + 1 });
        
//                 if (offset <= resolveString.length) {
//                 doResolverEffect(nextOptions, callback);
//                 } else if (typeof callback === "function") {
//                 callback();
//                 }
//             });
//             };
        
//             doResolverEffect(combinedOptions, callback);
//         } 
//     };
    

//         // Callback function when resolve completes
//         function callback() {
//         setTimeout(() => {
//             counter++;

//             if (counter >= strings.length) {
//             counter = 0;
//             }

//             let nextOptions = Object.assign({}, options, { resolveString: strings[counter] });
//             resolver.resolve(nextOptions, callback);
//             }, 1500);
//         }

//         resolver.resolve(options, callback);
        
//         //DATE AND TIME INTRO WINDOW
//         n =  new Date();
//         m = n.getMonth() + 1;
//         d = n.getDate();
//         document.getElementById("date").innerHTML = d + "-" + m + "-" + 2053;

//         setInterval(function() {
//             var clock = new Date();
//             var hour =   clock.getHours();
//             var minutes = clock.getMinutes();
//             var seconds = clock.getSeconds();
//             document.getElementById("time").innerHTML = hour + " : " + minutes + " : " + seconds;
//         }, 1000);
// }

function artNouveauPrev() {
    const splash = document.querySelector('.splash');

}

function renaissancePrev() {
    const splash = document.querySelector('.splash');

}

function eightyPrev() {
    const splash = document.querySelector('.splash');

}


// const navbar = document.querySelector('.nav-fixed');
// const collapseNav = document.querySelector(".navbar-collapse");
// window.onscroll = () => {
//     if (window.scrollY > 30) {
//         navbar.classList.add('nav-active');
//     } else {
//         navbar.classList.remove('nav-active');
//     }
// };


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