// ScrollMagic

var scrollOverlayElement = document.querySelector("#scroll-overlay");
var sceneContainer = document.querySelector("#scene-container")
var firstSceneElement = document.querySelector("#scene-container .scene.first");
var secondSceneElement = document.querySelector("#scene-container .scene.second");
var thirdSceneElement = document.querySelector("#scene-container .scene.third");
var fourthSceneElement = document.querySelector("#scene-container .scene.fourth");
var fifthSceneElement = document.querySelector("#scene-container .scene.fifth");

// var webDesignSectionTweenTimeline = new TimelineMax();
// webDesignSectionTweenTimeline.add([
//   TweenMax.to(webDesignSectionImageOneElement, 1, {y:-200}),
//   TweenMax.to(webDesignSectionImageTwoElement, 1, {y:-150}),
//   TweenMax.to(webDesignSectionImageThreeElement, 1, {y:-200}),
//   TweenMax.to(webDesignSectionImageFourElement, 1, {y:-150}),
//   TweenMax.to(creativeSectionImagesMoveLessElements, 1, {y:-150})
// ]);

var controller = new ScrollMagic.Controller({
  globalSceneOptions: {
    triggerHook: 'onLeave'
  },
  addIndicators: false
});

new ScrollMagic.Scene({
  triggerElement: scrollOverlayElement,
  duration: 6000
})
.setTween(sceneContainer, 1, {z: 5500})
.addIndicators({name: "zooming sections"})
.addTo(controller);

new ScrollMagic.Scene({
  triggerElement: scrollOverlayElement,
  offset: 300,
  duration: 200
})
.setTween(firstSceneElement, 1, {opacity: 0})
.addIndicators({name: "fade first section"})
.addTo(controller);

new ScrollMagic.Scene({
  triggerElement: scrollOverlayElement,
  offset: 900,
  duration: 200
})
.setTween(secondSceneElement, 1, {opacity: 0})
.addIndicators({name: "fade second section"})
.addTo(controller);

new ScrollMagic.Scene({
  triggerElement: scrollOverlayElement,
  offset: 1600,
  duration: 200
})
.setTween(thirdSceneElement, 1, {opacity: 0})
.addIndicators({name: "fade third section"})
.addTo(controller);

new ScrollMagic.Scene({
  triggerElement: scrollOverlayElement,
  offset: 2400,
  duration: 200
})
.setTween(fourthSceneElement, 1, {opacity: 0})
.addIndicators({name: "fade fourth section"})
.addTo(controller);

new ScrollMagic.Scene({
  triggerElement: scrollOverlayElement,
  offset: 3300,
  duration: 200
})
.setTween(fifthSceneElement, 1, {opacity: 0})
.addIndicators({name: "fade fifth section"})
.addTo(controller);
