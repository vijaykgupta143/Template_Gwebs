// NavBar scroll
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 60) {
    document.getElementById("navScroll").style.background = "#fff";
    document.getElementById("navScroll").style.boxShadow = ('0px 0px 10px 0px rgba(150, 150, 150, .3)');

  } else {
    document.getElementById("navScroll").style.background = "transparent";
    document.getElementById("navScroll").style.boxShadow = ('0 0 0 rgba(0, 0, 0, 0)');
  }
}


// ProgressBar
var bar = new ProgressBar.Circle(progressOne, {
  strokeWidth: 6,
  easing: "easeInOut",
  duration: 1400,
  color: "#ed6436",
  trailColor: "#eee",
  trailWidth: 5,
  svgStyle: null,
});

bar.animate(.5);

var bar = new ProgressBar.Circle(progressTwo, {
  strokeWidth: 6,
  easing: "easeInOut",
  duration: 1400,
  color: "#ed6436",
  trailColor: "#eee",
  trailWidth: 5,
  svgStyle: null,
});

bar.animate(.6);

var bar = new ProgressBar.Circle(progressThree, {
  strokeWidth: 6,
  easing: "easeInOut",
  duration: 1400,
  color: "#ed6436",
  trailColor: "#eee",
  trailWidth: 5,
  svgStyle: null,
});

bar.animate(.75);

var bar = new ProgressBar.Circle(progressFour, {
  strokeWidth: 6,
  easing: "easeInOut",
  duration: 1400,
  color: "#ed6436",
  trailColor: "#eee",
  trailWidth: 5,
  svgStyle: null,
});

bar.animate(1.0);

//steps

var bar = new ProgressBar.Circle(stepOne, {
  strokeWidth: 6,
  easing: "easeInOut",
  duration: 1400,
  color: "#7aba59",
  trailColor: "#eee",
  trailWidth: 5,
  svgStyle: null,
});
bar.animate(.5);

var bar = new ProgressBar.Circle(stepTwo, {
  strokeWidth: 6,
  easing: "easeInOut",
  duration: 1400,
  color: "#7aba59",
  trailColor: "#eee",
  trailWidth: 5,
  svgStyle: null,
});
bar.animate(.75);

var bar = new ProgressBar.Circle(stepThree, {
  strokeWidth: 6,
  easing: "easeInOut",
  duration: 1400,
  color: "#7aba59",
  trailColor: "#eee",
  trailWidth: 5,
  svgStyle: null,
});

bar.animate(1.0);

// $('body').ripples({
//   resolution: 1000,
//   dropRadius: 20,
//   perturbance: 0.04,
// });