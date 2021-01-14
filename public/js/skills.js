// 'use strict';

// var app = {

//   chars: ['Hello','Bonjour','Hola','Nǐn hǎo','Ciao','Konnichiwa','Guten Tag','Olá','Anyoung','Halløj','Hujambo','Yassou','Dzień dobry','Halo','Helo','Selam','Tjena','Hei','Привіт','Здраствуйте','¿Qué tal?','Hello','Salut', 'Hello','Bonjour','Hola','Nǐn hǎo','Ciao','Konnichiwa','Guten Tag','Olá','Anyoung','Halløj','Hujambo','Yassou','Dzień dobry','Halo','Helo','Selam','Tjena','Hei','Привіт','Здраствуйте','¿Qué tal?','Hello','Salut','Hello','Bonjour','Hola','Nǐn hǎo','Ciao','Konnichiwa','Guten Tag','Olá','Anyoung','Halløj','Hujambo','Yassou','Dzień dobry','Halo','Helo','Selam','Tjena','Hei','Привіт','Здраствуйте','¿Qué tal?','Hello','Salut', 'Hello','Bonjour','Hola','Nǐn hǎo','Ciao','Konnichiwa','Guten Tag','Olá','Anyoung','Halløj','Hujambo','Yassou','Dzień dobry','Halo','Helo','Selam','Tjena','Hei','Привіт','Здраствуйте','¿Qué tal?','Hello','Salut'],

//   init: function () {
//     app.container = document.createElement('div');
//     app.container.className = 'animation-container';
//     document.body.appendChild(app.container);
//     window.setInterval(app.add, 500);
//   },

//   add: function () {
//     var element = document.createElement('span');
//     app.container.appendChild(element);
//     app.animate(element);
//   },

//   animate: function (element) {
//     var character = app.chars[Math.floor(Math.random() * app.chars.length)];
//     var duration = Math.floor(Math.random() * 15) + 1;
//     var offset = Math.floor(Math.random() * (50 - duration * 2)) + 3;
//     var size = 15 + (15 - duration);
//     element.style.cssText = 'right:'+offset+'vw; font-size:'+size+'px;animation-duration:'+duration+'s';
//     element.innerHTML = character;
//     window.setTimeout(app.remove, duration * 1000, element);
//   },

//   remove: function (element) {
//     element.parentNode.removeChild(element);
//   },

// };

// document.addEventListener('DOMContentLoaded', app.init);


$(function () { // wait for document ready
    // init
    var controller = new ScrollMagic.Controller();

    // define movement of panels
    var wipeAnimation = new TimelineMax()
        // animate to second panel
        .to("#slideContainer", 0.5, {z: -150})		// move back in 3D space
        .to("#slideContainer", 1,   {x: "-25%"})	// move in to first panel
        .to("#slideContainer", 0.5, {z: 0})				// move back to origin in 3D space
        // animate to third panel
        .to("#slideContainer", 0.5, {z: -150, delay: 1})
        .to("#slideContainer", 1,   {x: "-50%"})
        .to("#slideContainer", 0.5, {z: 0})
        // animate to forth panel
        .to("#slideContainer", 0.5, {z: -150, delay: 1})
        .to("#slideContainer", 1,   {x: "-75%"})
        .to("#slideContainer", 0.5, {z: 0});

      
    // create scene to pin and link animation
    new ScrollMagic.Scene({
            triggerElement: "#pinContainer",
            triggerHook: "onLeave",
            duration: "500%"
        })
        .setPin("#pinContainer")
        .setTween(wipeAnimation)
        //.addIndicators() // add indicators (requires plugin)
        .addTo(controller);
});