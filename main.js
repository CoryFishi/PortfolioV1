//Scroll to buttons
const aboutButton = document.getElementById("about-button");
const projectsButton = document.getElementById("projects-button");
const contactButton = document.getElementById("contact-button");
const aboutSection = document.getElementById("about");
const projectsSection = document.getElementById("projects");
const contactSection = document.getElementById("contact");
aboutButton.addEventListener("click", function() {
    aboutSection.scrollIntoView({behavior: "smooth"});
});
projectsButton.addEventListener("click", function() {
    projectsSection.scrollIntoView({behavior: "smooth"});
});
contactButton.addEventListener("click", function() {    
    contactSection.scrollIntoView({behavior: "smooth"});
});

//Nav bar
function openNav() {
  document.getElementById("sidepanel").style.width = "300px";
  document.getElementById("sidepanel").style.height = "490px";
}
function closeNav() {
  document.getElementById("sidepanel").style.width = "0px";
  document.getElementById("sidepanel").style.height = "0px";
}
window.onscroll = function() {myFunction()};
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

//Text typing animation
var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};
TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};
window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};

//Fix for scroll on refresh
history.scrollRestoration = "manual"
