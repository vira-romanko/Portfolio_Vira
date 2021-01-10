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