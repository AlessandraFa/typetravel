

// function that retrieve all the metadata and stock in in objects
function retrieveData(article_id) {
    
    // variable declaration
    let art_retrieved = document.getElementById(article_id),
        artData = {people: {}, places: {}, events: {}, artworks: {} },
        people = art_retrieved.getElementsByClassName("mention person"),
        places = art_retrieved.getElementsByClassName("mention place"),
        events = art_retrieved.getElementsByClassName("mention event"),
        artworks = art_retrieved.getElementsByClassName("mention artwork");
 
    // frequency distribution computation
    for (let i=0; i<people.length; i++) {
        newPerson = people[i].getAttribute("about");
        if(newPerson in artData["people"]) {
            artData["people"][newPerson] += 1;
        } else {
            artData["people"][newPerson] = 1;
        }
    }

    for (let i=0; i<places.length; i++) {
        newPlace = places[i].getAttribute("about");
        if(newPlace in artData["places"]) {
            artData["places"][newPlace] += 1;
        } else {
            artData["places"][newPlace] = 1;
        }
    }

    for (let i=0; i<artworks.length; i++) {
        newArt = artworks[i].getAttribute("about");
        if(newArt in artData["artworks"]) {
            artData["artworks"][newArt] += 1;
        } else {
            artData["artworks"][newArt] = 1;
        }
    }

    for (let i=0; i<events.length; i++) {
        newEvent = events[i].getAttribute("about");
        if(newEvent in artData["events"]) {
            artData["events"][newEvent] += 1;
        } else {
            artData["events"][newEvent] = 1;
        }
    }
    return artData;
}

// constants declaration
const article1 = document.getElementById("article-1"), 
    article2 = document.getElementById("article-2"), 
    article3 = document.getElementById("article-3");

var highlightName = "";
var highlightAccordion;
var oldCategory = "";

function highlightData(art, data) {
    
    // retrieve the actual stylesheet and select highlight color
    let themeLink = document.getElementsByTagName('link')[1].href.split("/");
    let themeRaw = themeLink[themeLink.length-1];
    let theme = themeRaw.split(".")[0];
    let highlightColor;
    switch (theme) {
        case "mainBasic":
            highlightColor = "#83c0cf";
            break;
        case "mainRenaissance":
            highlightColor = "#afafaf";
            break;
        case "mainSecession":
            highlightColor = "#faa883";
            break;
        case "mainEighty":
            highlightColor = "#de3e38";
            break;
        case "mainFuture":
            highlightColor = "#696969";
            break;
    }

    // retrieve the article space in which the navigation happens
    let navSpace;
    switch(art) {
        case 1:
            navSpace = article1;
            break;
        case 2:
            navSpace = article2;
            break;
        case 3:
            navSpace = article3;
            break;
    }

    // retrieve data
    let newCategory = data.getAttribute("class").split("-")[0],
        text = data.innerHTML.split(": "),
        name = text[0],
        freq = parseInt(text[1].match(/\d+/g)[0]),
        clickCounterEl = data.childNodes[1],
        clicks = clickCounterEl.innerHTML.replace(/[()]+/g, ""),
        newQuery, oldQuery;
    
    if (clicks === "") {
        clicks = 0;
    }

    // retrieve the new category of data
    switch(newCategory) {
        case "people":
            newQuery = `span.person[about^="${name}"]`;
            break;
        case "events":
            newQuery = `span.event[about^="${name}"]`;
            break;
        case "artworks":
            newQuery = `span.artwork[about^="${name}"]`;
            break;
        case "places":
            newQuery = `span.place[about^="${name}"]`;
            break;
    } 
    
    // if category is different, then clear all previous highlights
    if (!(oldCategory == newCategory) || !(highlightName == name)) {
        if (!(highlightName == "")) {
            switch (oldCategory) {
                case "people":
                    oldQuery = `span.person[about^="${highlightName}"]`;
                    break;
                case "events":
                    oldQuery = `span.event[about^="${highlightName}"]`;
                    break;
                case "artworks":
                    oldQuery = `span.artwork[about^="${highlightName}"]`;
                    break;
                case "places":
                    oldQuery = `span.place[about^="${highlightName}"]`;
                    break;
            }
            clearAll(oldQuery, highlightName, highlightAccordion, navSpace);
        } else {
            oldCategory = newCategory;
        }
    } 

    let newTags = navSpace.querySelectorAll(newQuery);

    if (highlightName == name || highlightName == "") {

        if (clicks<freq) {

            let next = newTags[clicks];
            highlightNew(name, data, highlightColor, next);
            clicks++;
            clickCounterEl.innerHTML = `(${clicks})`;
           
        } else if (clicks == freq) {

            clearAll(newQuery, highlightName, highlightAccordion, navSpace);
            highlightName = "";
            data.style.backgroundColor = "transparent";
            clickCounterEl.innerHTML = "";
            alert(`There aren't any other ${name} occurences in the article.`);
            
        } else {
            console.log("out of range");
        }
    } else {
        // se entra qua vuol dire che è la prima volta che vede quel nuovo nome
        clearAll(oldQuery, highlightName, highlightAccordion, navSpace);
        let next = newTags[clicks];
        highlightNew(name, data, highlightColor, next);
        clicks++;
        clickCounterEl.innerHTML = `(${clicks})`;
    }
    oldCategory = newCategory;
}


function highlightNew(name, data, highlightColor, next) {
        next.scrollIntoView({behavior: "smooth"});
        next.style.backgroundColor = highlightColor;
        highlightName = name;
        highlightAccordion = data;
}

function clearAll(oldQuery, highlightName, highlightAccordion, navSpace) {
    if (!(highlightName == "")) {
        let oldTags = navSpace.querySelectorAll(oldQuery);
        for (let i=0; i < oldTags.length; i++) {
            oldTags[i].style.backgroundColor = "transparent";
        }
    }
    if (!(highlightAccordion == "")) {
        highlightAccordion.childNodes[1].innerHTML = "";
        highlightAccordion.style.backgroundColor = "transparent"
    }
}
