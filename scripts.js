/* Hamburger menu baseret på https://www.w3schools.com/howto/howto_js_mobile_navbar.asp */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

/*gør navbar mindre når man scroller, så den ikke optager så meget plads */
window.addEventListener("scroll", function () {
  var navbar = document.querySelector(".nav");
  var logo = document.querySelector("#logo");

  if (window.scrollY > 40) {
    navbar.classList.add("shrink");
    logo.style.maxWidth = "3vw";
  } else {
    navbar.classList.remove("shrink");
    logo.style.maxWidth = "100%";
  }
});

/*collapsible/accordion som bruges til ordensregler
baseret på https://www.w3schools.com/howto/howto_js_collapsible.asp */
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("activecollapsible");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

/*CARD FLIP baseret på https://codepen.io/Bjornros/pen/VPzQzB*/
//Card flip nr 1
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("flip-card-btn-turn-to-back").style.visibility =
    "visible";
  document.getElementById("flip-card-btn-turn-to-front").style.visibility =
    "visible";

  document.getElementById("flip-card-btn-turn-to-back").onclick = function () {
    document.getElementById("flip-card").classList.toggle("do-flip");
  };

  document.getElementById("flip-card-btn-turn-to-front").onclick = function () {
    document.getElementById("flip-card").classList.toggle("do-flip");
  };
});

//Card flip nr 2
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("flip-card-btn-turn-to-back2").style.visibility =
    "visible";
  document.getElementById("flip-card-btn-turn-to-front2").style.visibility =
    "visible";

  document.getElementById("flip-card-btn-turn-to-back2").onclick = function () {
    document.getElementById("flip-card2").classList.toggle("do-flip");
  };

  document.getElementById("flip-card-btn-turn-to-front2").onclick =
    function () {
      document.getElementById("flip-card2").classList.toggle("do-flip");
    };
});

//Card flip nr 3
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("flip-card-btn-turn-to-back3").style.visibility =
    "visible";
  document.getElementById("flip-card-btn-turn-to-front3").style.visibility =
    "visible";

  document.getElementById("flip-card-btn-turn-to-back3").onclick = function () {
    document.getElementById("flip-card3").classList.toggle("do-flip");
  };

  document.getElementById("flip-card-btn-turn-to-front3").onclick =
    function () {
      document.getElementById("flip-card3").classList.toggle("do-flip");
    };
});

// Tilføjet til cardflip for at det kan virke på firefox
document.addEventListener("DOMContentLoaded", function () {
  var flipCard = document.getElementById("flip-card");
  var flipCardBtnToBack = document.getElementById("flip-card-btn-turn-to-back");
  var flipCardBtnToFront = document.getElementById(
    "flip-card-btn-turn-to-front"
  );

  flipCardBtnToBack.style.visibility = "visible";
  flipCardBtnToFront.style.visibility = "visible";

  flipCardBtnToBack.addEventListener("click", function () {
    flipCard.classList.add("do-flip");
  });

  flipCardBtnToFront.addEventListener("click", function () {
    flipCard.classList.remove("do-flip");
  });
});

/* VIDEO ELEMENT SIDST I MEDIA QUERY */
const section = document.querySelector(".omboks");
const firstDiv = section.querySelector("div:first-child");
const secondDiv = section.querySelector("div:last-child");

if (window.innerWidth <= 850) {
  section.insertBefore(secondDiv, firstDiv);
}

// LAV KLAVIYO FORM OM til anden class UNDER 500PX
function changeClassBasedOnMediaQuery() {
  var divElement = document.getElementById("klaviyoForm");

  if (window.matchMedia("(max-width: 500px)").matches) {
    divElement.classList.remove("klaviyo-form-RFpMah");
    divElement.classList.add("klaviyo-form-VV9CAE");
  } else {
    divElement.classList.remove("klaviyo-form-VV9CAE");
    divElement.classList.add("klaviyo-form-RFpMah");
  }
}

// Lyt efter ændringer i vinduets størrelse
window.addEventListener("resize", changeClassBasedOnMediaQuery);

// Kald funktionen ved indlæsning af siden for at initialisere klassen
changeClassBasedOnMediaQuery();
