
//Hamburger menu animation trigger
var wrapperMenu = document.querySelector('.wrapper-menu');

wrapperMenu.addEventListener('click', function(){
  wrapperMenu.classList.toggle('open');  
});



//Hero background with THREE JS
let scene, camera, cloudParticles=[], renderer;
var canvas = document.getElementById('#heroCanvas');

function init() {
scene = new THREE.Scene();
camera = new THREE.PerspectiveCamera(50,window.innerWidth / window.innerHeight,0.1,1000);
camera.position.z = 5;
camera.rotation.x = 1.16;
camera.rotation.y = -0.12;
camera.rotation.z = -50.37;
let ambient = new THREE.AmbientLight(0xE9E9E9);
scene.add(ambient);
let directionalLight = new THREE.DirectionalLight(0x1A1A1A);
directionalLight.position.set(0,0,1);
scene.add(directionalLight);

let orangeLight = new THREE.PointLight(0xC3BFBF,50,450,1.7);
orangeLight.position.set(200,300,100);
scene.add(orangeLight);
let redLight = new THREE.PointLight(0x1A1A1A,50,450,1.7);
redLight.position.set(100,300,100);
scene.add(redLight);
let blueLight = new THREE.PointLight(0x1A1A1A,50,450,1.7);
blueLight.position.set(300,300,200);
scene.add(blueLight);

renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth,window.innerHeight);
scene.fog = new THREE.FogExp2(0xffffff, 0.001);
renderer.setClearColor(scene.fog.color);
document.body.appendChild(renderer.domElement);
let loader = new THREE.TextureLoader();
loader.load("public/images/gray_box51.png", function(texture){
//texture is loaded
cloudGeo = new THREE.PlaneBufferGeometry(400,400);
cloudMaterial = new THREE.MeshLambertMaterial({
map:texture,
transparent: true,
premultipliedAlpha: false
});
for(let p=0; p<50; p++) {
let cloud = new THREE.Mesh(cloudGeo, cloudMaterial);
cloud.position.set(
Math.random()*800 -400,
500,
Math.random()*500-500
);
cloud.rotation.x = 1.16;
cloud.rotation.y = -0.12;
cloud.rotation.z = Math.random()*2*Math.PI;
cloud.material.opacity = 0.55;
cloudParticles.push(cloud);
scene.add(cloud);
}

});

window.addEventListener('resize', onWindowResize, false);
render(canvas);
}




// let cloudParticles = [];
// cloudParticles.push(cloud);
function onWindowResize(){
  renderer.setSize(window.innerWidth, window.innerHeight);
camera.aspect = window.innerWidth/window.innerHeight;
camera.updateProjectionMatrix();

}

function render() {
  cloudParticles.forEach(p => {
p.rotation.z -=0.001;
  });
renderer.render(scene,camera);
requestAnimationFrame(render);
}
init();	



//Typewrite effect width GASAP
var tl = new TimelineMax({repeat:-1, yoyo:true, repeatDelay:0, onComplete:timelineDone, onCompleteParams:["test1", "test2"]});

tl.to(".typy", 1, {text:{value:`I'm a Curios Developer`, padSpace:true,  ease:Linear.easeNone},delay:1}); 


tl.to(".typy", 2, {text:{value:`I am a Passionate Designer`, padSpace:true,  ease:Linear.easeNone},delay:0}); 
tl.to(".typy", 2, {text:{value:`I am an Explorer`, padSpace:true,  ease:Linear.easeNone},delay:0}); 





function timelineDone(p1, p2) {
    console.log("timeline done. params: " + p1 + " and " + p2);
}

 
    gsap.registerPlugin(TextPlugin)
  
  