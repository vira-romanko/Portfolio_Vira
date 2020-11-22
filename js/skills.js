//Skills Section
// (function() {
// 	"use strict";

// 	//variables
// 	var skills = ['Photoshop','NPM','MongoDB','Foundation','php','Laravel','Wordpress','CSS','Composer','Git','Illustrator','Es6','Bootstrap','Vue','InDesign','Sketch','Webpack','Sass','Greensock','Html','Adobe XD','Invision','Node','Processing','MySQL','Shopify','Drupal','Gulp'];
// 	var container = document.querySelector("#skillsSection");
// 	var x = container.offsetWidth-50;
// 	var y = container.offsetHeight-50;
// 	var top =container.getBoundingClientRect();

// 	for (var i = 0; i < skills.length; i++) {
// 		var particle = document.createElement('p');
// 		var height = container.getBoundingClientRect().height;
// 		//var valueTop = Math.floor(Math.random() * Math.floor(y));
// 		//var valueLeft = Math.floor(Math.random() * Math.floor(x));
// 		var attr = [
// 		{
// 			color: '#676767', 
// 			size: '12px', 
// 			index: 1
// 		},
// 		{
// 			color: '#7C7C7C', 
// 			size: '13px', 
// 			index: 1
// 		},
// 		{
// 			color: '#A0A0A0', 
// 			size: '14px', 
// 			index: 3
// 		},
// 		{
// 			color: '#C6C6C6', 
// 			size: '15px', 
// 			index: 3
// 		},
// 		{
// 			color: '#FFF', 
// 			size: '16px', 
// 			index: 3
// 		}];

// 		var valueLeft = container.getBoundingClientRect().width;
// 		var opacity = (Math.random()*(1-.5)+.5).toFixed(1);
// 		var offset = (1/skills.length)*100;
		

// 		//console.log(offset*100);
// 		var z = Math.floor(Math.random()*(5));
		
// 		particle.innerHTML=skills[i];
// 		particle.style.fontSize=attr[z].size;
// 		particle.style.zIndex = attr[z].index;
// 		particle.style.color = attr[z].color;
// 		particle.style.top = height-Math.random()*(3)+ 'px';
// 		particle.style.left = offset*i + '%';
// 		particle.style.position = 'absolute';
		
// 		container.appendChild(particle);

// 		var topPos = particle.offsetTop;
		
// 		//TweenLite.to(particle, (Math.random()*(10)+1).toFixed(1), {y:-topPos-50});
// 		var slide =  TimelineMax({repeat:-1,onComplete:someFunction});
//   		slide.to(particle, (Math.random()*(10)+6).toFixed(1), {y: -topPos-50,ease: Linear.easeNone}, Math.random()*7);
//   		function someFunction(){
//   			console.log("WOOHOO");

//   		}
// 	}

// })();

