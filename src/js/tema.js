const inputTema = document.getElementById('inputTema');
const linkCSSThemeIndex = document.querySelector("link.tema");
const sunImg = document.getElementById("sol");
const moonImg = document.getElementById("lua");
const atomo1 = document.querySelector('img#atomo1');
const atomo2 = document.querySelector('img#atomo2');
const seta1 = document.getElementById('seta1');
const seta2 = document.getElementById('seta2');

function mudarTemaIndex() {
    if (inputTema.checked) {
        linkCSSThemeIndex.setAttribute("href", "./src/styles/dark.css");
        sunImg.setAttribute("src", "./src/img/sunwhite.png");
        moonImg.setAttribute("src", "./src/img/moonwhite.png");
        seta1.setAttribute("src", "./src/img/arrowwhite.png")
        seta2.setAttribute("src", "./src/img/arrowwhite.png")
        atomo1.setAttribute("src", "./src/img/atomwhite.png");
        atomo2.setAttribute("src", "./src/img/atomwhite.png");
    } else {
        linkCSSThemeIndex.setAttribute("href", "./src/styles/light.css");
        sunImg.setAttribute("src", "./src/img/sun.png");
        moonImg.setAttribute("src", "./src/img/moon.png");
        seta1.setAttribute("src", "./src/img/arrow.png");
        seta2.setAttribute("src", "./src/img/arrow.png");
        atomo1.setAttribute("src", "./src/img/atom.png");
        atomo2.setAttribute("src", "./src/img/atom.png");
    }
  }
