gsap.from(".img-box", 1, {
  duration: .5,
  scale: .7,
  visibality: "hidden",
  opacity: 0,
  ease: "back.out",

});

gsap.from(".img1", 1, {
  duration: .9,
  scale: 0.01,
  stagger: 1,
  opacity: 0,
  ease: "back.out",
});

gsap.from(".anima1", {
  x: 50,
  opacity: 1,
  duration: 1,
  stagger: .5,
  ease: "back.out",
});


gsap.from(".erro", {
  x: -50,
  opacity: 0,
  duration: 1,
  stagger: .3,
  ease: "back.out",
});

gsap.to(".parent", {
  delay: 2,
  duration: 1,
  ease: "back.out",
  x: -500,
  opacity: 0,
  display: "none",
  stagger: .1,
});


gsap.from(".parent-2", {
  display: "none",
  opacity: 0,
  x: 500,
  delay: 3,
  duration: 1,
  ease: "back.out",
});
gsap.to(".parent-2", {
  display: "none",
  opacity: 0,
  y: -1000,
  delay: 6,
  duration: .2,
  ease: "back-out",
});

gsap.to(".circle", {
  delay: 3.2,
  duration: 1,
  yoyo: true,
  repeat: -1,
  strength: 0.7,
  squash: 3,
  caleY: 0.5, scaleX: .95,
  ease: "myBounce",
  transformOrigin: "left",
});


gsap.from(".scrCnt-1", 2.2, {
  delay: 3.5,
  duration: 1,
  ease: Power0.ease,
  width: "0px",
});

gsap.from(".scrCnt", {
  delay: 3.5,
  duration: .5,
  ease: Power0.ease,
  width: "50px",
  ease: "bounce",
});

gsap.from(".foot1", {
  delay: 3.5,
  duration: .3,
  ease: Power1.ease,
  height: "0px",
  ease: "bounce",
});
gsap.from(".foot2", {
  delay: 3.5,
  duration: .3,
  ease: Power0.ease,
  height: "0px",
  ease: "bounce",
});

gsap.from(".subTitle2", {
  delay: 3.5,
  duration: 0.8,
  opacity: 0,
  x: 50,
  ease: "back.out",
  stagger: 1,
})

gsap.to(".subTitle2", {
  ease: "bounce",
  delay: 4.3,
  duration: .4,
  x: 0,
});


var txt = $('#quote').text();
var newTxt = txt.replace(/\w/g, function (c) {
  return '<div>' + c + '</div>';
})
$('#quote').html(newTxt);


gsap.from(".parent-3", {
  display: "none",
  y: 1000,
  delay: 6.4,
  duration: .5,

})
gsap.to(".parent-3", {
  display: "none",
  opacity: 0,
  y: -1000,
  delay: 11,
  duration: .3,
  ease: "back-out",
});


gsap.from(".subTitle3", {
  opacity: 0,
  x: -300,
  delay: 7,
  duration: .6,
});

var txt = $('.subTitle3').text();
var newTxt = txt.replace(/\w/g, function (c) {
  return '<div>' + c + '</div>';
})
$('.subTitle3').html(newTxt);


gsap.from("#TakeHeart", {
  delay: 7.6,
  duration: .6,
});
gsap.to("#TakeHeart", {
  delay: 7.6,
  duration: .6,
});


var tl = gsap.timeline({ defaults: { duration: .6, } }),
  ThHandLeft2 = document.getElementById("ThHandLeft2");
HandLeftBtm = document.getElementById("HandLeftBtm");
ThHandLeft = document.getElementById("ThHandLeft");

tl.to(ThHandLeft2, { morphSVG: "#ThHandLeft", delay: 6, }, "+=1")
  .to(ThHandLeft2, { morphSVG: "#HandLeftBtm" }, "+=1.8")
  .to(ThHandLeft2, { morphSVG: ThHandLeft }, "+=.1");


gsap.to("#ThHeart", {
  delay: 9.5,
  duration: 1,
  ease: "power4",
  x: 30,
  y: 30,
});
gsap.to("#ThHeart", { delay: 10, duration: 1, ease: "power4", x: 0, y: 0, });

gsap.to("#ThRightHand", {
  delay: 9.5,
  duration: 1,
  ease: "power4",
  x: 30,
  y: 30,
});
gsap.to("#ThRightHand", { delay: 10, duration: 1, ease: "power4", x: 0, y: 0, });

gsap.to("#TakeHeart", {
  delay: 10.8,
  duration: .5,
  ease: Power1.easeOuteaseOut,
  transform: "rotate(1deg)",
  x: 15,
});

// 4th

gsap.from(".parent-4", {
  display: "none",
  opacity: 0,
  transform: "scale(0)",
  delay: 11.3,
  duration: 1,
});
gsap.to(".parent-4", {
  display: "none",
  opacity: 0,
  delay: 17,
  duration: .5,
});



gsap.from(".fullCover", {
  display: "none",
  delay: 11.5,
  duration: .5,
  borderRadius: "100%",
  width: 0,
  height: 0,
  border: "20px solid red",
})
gsap.to(".fullCover", {
  background: "rgba(255,0,0,1)",
  delay: 12,
  duration: 1.5,
  repeat: -1,
  yoyo: true,
});



// left bush

gsap.to("#leafMd", { morphSVG: "#leafMdCopy", delay: 12, duration: 1, repeat: -1, yoyo: true, });
gsap.to("#ArmMd", { morphSVG: "#leafArmMdCopy", delay: 12, duration: 1, repeat: -1, yoyo: true, });

// right bush
gsap.to("#leafSm", { morphSVG: "#leafSmCopy", delay: 12, duration: 1, repeat: -1, yoyo: true, });
gsap.to("#leafArmSm", { morphSVG: "#leafArmSmCopy", delay: 12, duration: 1, repeat: -1, yoyo: true, });

// text
gsap.from("h1.anima1", { duration: .6, delay: 12, ease: "bounce", x: -10,  /*text: "We Asked Harry <br>for a fun fact <br> about himself" */ });
gsap.to("h1.anima1", { duration: .6, delay: 14, ease: "ease-out", display: "none", opacity: 0, });
gsap.to(".erro", { opacity: 1, duration: .5, delay: 12.5, x: -10, ease: "bounce" });

gsap.from("h1.anima4", { opacity: 0, display: "none", duration: .6, delay: 14.7, x: -50, /* text: "He said:" */ });
gsap.to("h1.anima4", { duration: .5, delay: 17, display: "none", });

gsap.to("#mainTree", { visibility: "hidden", delay: 17, duration: .5, });



gsap.to(".circleS4", { opacity: 1, delay: 16.8, duration: .6, height: "500px", width: "500px" });

gsap.from(".parent-5", {
  display: "none",
  delay: 17.5,
  duration: 1,
});
gsap.to(".parent-5", {
  display: "none",
  opacity: 0,
  delay: 21,
  duration: .5,
});

gsap.from(".erro", { duration: .5, delay: 17.6, x: -3, repeat: 1, yoyo: true, });

gsap.from(".content-5", {duration: .5, delay: 17.6, x: -50, stagger:1, opacity:0,});


gsap.from(".parent-6", {
  display: "none",
  delay: 21.5,
});
// gsap.to(".parent-6", {
//   display: "none",
//   delay: 25,
//   duration: .5,
// });

gsap.to(".circleS4", { opacity: 0, delay: 21.5, duration: .6, height: "1000px", width: "10000px" });

gsap.from(".fullCover", {
  delay: 21.5,
  duration: 1,
  display:"none",
});



