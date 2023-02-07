const UPPERBAR     = document.getElementById("upperbar");
const NAVBAR       = document.getElementById("navbar");
const SLIDER       = document.getElementById("slider-container");
const ABOUT        = document.getElementById("about");
const SERVICES     = document.getElementById("services");
const FEATURES     = document.getElementById("features");
const PRODUCTS     = document.getElementById("products");
const RESERVATION  = document.getElementById("reservation");
const CONTACT      = document.getElementById("contact");
const FOOTER       = document.getElementById("footer");
const LOWERBAR     = document.getElementById("lowerbar");
let bodyAndHtml    = $("html, body");
let mainLinks      = $(".for-link");
let forLinks       = document.getElementsByClassName("for-link");
let mainHeaders    = document.getElementsByClassName("main-header");
let aboutText      = document.getElementsByClassName("about-text")[0];
let aboutImage     = document.getElementsByClassName("about-image")[0];
let servBoxes      = document.getElementsByClassName("serv");
let productColumns = document.getElementsByClassName("product-column");
let reservForm     = document.getElementsByClassName("reservation-form")[0];
let contactForm    = document.getElementsByClassName("contact-form")[0];
let contacts       = document.getElementsByClassName("contacts")[0];
mainLinks.each(function(){
  $(this).on("click", function(e){
    e.preventDefault();
    bodyAndHtml.animate({
      scrollTop: $("#" + $(this).data("active")).offset().top
    }, 600);
  });
});
window.onload = function () {
  'use strict';
  scrollBehavior (SLIDER, "slider-container");
  scrollBehavior (ABOUT, "about");
  scrollBehavior (SERVICES, "services");
  scrollBehavior (FEATURES, "features");
  scrollBehavior (PRODUCTS, "products");
  scrollBehavior (RESERVATION, "reservation");
  scrollBehavior (CONTACT, "contact");
}
window.onscroll = function () {
  'use strict';
  scrollBehavior (SLIDER, "slider-container");
  scrollBehavior (ABOUT, "about");
  scrollBehavior (SERVICES, "services");
  scrollBehavior (FEATURES, "features");
  scrollBehavior (PRODUCTS, "products");
  scrollBehavior (RESERVATION, "reservation");
  scrollBehavior (CONTACT, "contact");
};
function linkActivation (linkAd) {
  'use strict';
  for (let i = 0; i < forLinks.length; i++){
    if (forLinks[i].getAttribute("data-active") == linkAd)
      forLinks[i].classList.add("active");
    else
      forLinks[i].classList.remove("active");
  }
  for (let i = 0; i < forLinks.length; i++){

  }
}
function colorNavbar () {
  'use strict';
  UPPERBAR.style.backgroundColor = "rgba(0,0,0,0.8)";
  NAVBAR.style.backgroundColor = "rgba(0,0,0,0.8)";
}
function unColorNavbar () {
  'use strict';
  UPPERBAR.style.backgroundColor = "rgba(0,0,0,0)";
  NAVBAR.style.backgroundColor = "rgba(0,0,0,0)";
}
function scrollBehavior (section, action) {
  'use strict';
  let rect = section.getBoundingClientRect();
  if (rect.top <= (((window.innerHeight)*10)/100)) {
    switch (action) {
      case "slider-container":
        linkActivation (action);
        unColorNavbar ();
        sliderApear ();
        break;
      case "about":
        colorNavbar();
        linkActivation (action);
        headerApear (0);
        aboutApear ();
        break;
      case "services":
        linkActivation (action);
        headerApear (1);
        servicesApear ();
        break;
      case "features":
        linkActivation (action);
        featuresApear ();
        break;
      case "products":
        linkActivation (action);
        headerApear (2);
        productsApear ();
        break;
      case "reservation":
        linkActivation (action);
        headerApear (3);
        reservationApear ();
        break;
      case "contact":
        linkActivation (action);
        headerApear (4);
        contactApear ();
        break;
    }
  }
}
function headerApear (s) {
  'use strict';
  mainHeaders[s].firstElementChild.children[1].style.opacity = "1";
  mainHeaders[s].firstElementChild.children[1].style.transform = "scale(1)";
  mainHeaders[s].firstElementChild.children[0].style.opacity = "1";
  mainHeaders[s].firstElementChild.children[0].style.left = "-20px";
  mainHeaders[s].firstElementChild.children[2].style.opacity = "1";
  mainHeaders[s].firstElementChild.children[2].style.right = "-20px";
}
function sliderApear () {
  'use strict';
  SLIDER.style.opacity = "1";
}
function aboutApear () {
  'use strict';
  aboutText.style.opacity = "1";
  aboutText.style.left = "0";
  aboutImage.style.opacity = "1";
  aboutImage.style.transform = "scale(1)";
}
function servicesApear () {
  'use strict';
  for (let i = 0; i < servBoxes.length; i++) {
    servBoxes[i].style.opacity = "1";
    servBoxes[i].style.top = "0";
  }
}
function featuresApear () {
  'use strict';
  FEATURES.style.opacity = "1";
}
function productsApear () {
  'use strict';
  for (let i = 0; i < productColumns.length; i++) {
    productColumns[i].style.opacity = "1";
  }
}
function reservationApear () {
  'use strict';
  reservForm.style.opacity = "1";
}
function contactApear () {
  'use strict';
  contactForm.style.opacity = "1";
  contactForm.style.top = "0";
  contacts.style.opacity = "1";
  contacts.style.bottom = "0";
  FOOTER.style.opacity = "1";
  LOWERBAR.style.opacity = "1";
}
