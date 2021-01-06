// // Typewriter effect
// class TypeWriter {
//     constructor(txtElement, words, wait = 2000) {
//       this.txtElement = txtElement;
//       this.words = words;
//       this.txt = "";
//       this.wordIndex = 0; // index for the words array, set to the first one
//       this.wait = parseInt(wait, 10); // parse time so that is always an integer at base10
//       this.type(); // method with logic
//       this.isDeleting = false; // state of the effect going back deleting word
//     }
  
//     // type method
//     type() {
//       // current index of words
//       const currentWord = this.wordIndex % this.words.length;
//       // get full text of currentWord
//       const fullTxt = this.words[currentWord];
  
//       // check if word is deleting
//       if (this.isDeleting) {
//         // Remove character
//         this.txt = fullTxt.substring(0, this.txt.length - 1);
//       } else {
//         // Add a character
//         this.txt = fullTxt.substring(0, this.txt.length + 1);
//       }
  
//       // output word every 0.5s
//       this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
  
//       // initial type speed
//       let typeSpeed = 100;
  
//       // type speed faster when deleting back the word
//       if (this.isDeleting) {
//         typeSpeed /= 2;
//       }
  
//       // If word is complete
//       if (!this.isDeleting && this.txt === fullTxt) {
//         typeSpeed = this.wait; // pause at the end of the typed word
//         this.isDeleting = true; // Deleting can start
//       } else if (this.isDeleting && this.txt === "") {
//         this.isDeleting = false;
//         // move to next word
//         this.wordIndex++;
//         // pause start typing again
//         typeSpeed = 100;
//       }
  
//       // call type method every 0.5 sec
//       setTimeout(() => this.type(), typeSpeed);
      
//     }
//   }
//     // init app
//     function init() {
//       const txtElement = document.querySelector(".txt-type");
//       const words = JSON.parse(txtElement.getAttribute("data-words")); // string is parsed to array/obj
//       const wait = txtElement.getAttribute("data-wait");
  
//       // initialize type writer
//       setTimeout(() => {
//         new TypeWriter(txtElement, words, wait);
//       }, 3600);
//     }
  
var tl = new TimelineMax({repeat:-1, yoyo:false, repeatDelay:0, onComplete:timelineDone, onCompleteParams:["test1", "test2"]});

tl.to(".text", 6, {text:{value:`Keeping the balance between <span id="function">functionality </span> and <span id="creative">creativity</span>`, padSpace:true,  ease:Linear.easeNone},delay:1}); 
//tl.to(".text", 2, {text:{value:`<span id="creative">creativity</span>`, padSpace:true, ease:Linear.easeNone},delay:0});
// tl.to(".text", 5, {text:{value:' Keeping the balance', padSpace:true,  ease:Linear.easeNone},delay:0});

// tl.to(".text", 5, {text:{value:'between', padSpace:true,  ease:Linear.easeNone},delay:1});
// tl.to(".text", 4, {text:{value:`<span id="function">functionality </span> and `, padSpace:true,  ease:Linear.easeNone},delay:0}); tl.to(".text", 2, {text:{value:`<span id="creative">creativity</span>`, padSpace:true, ease:Linear.easeNone},delay:0});

tl.to(".text", 6, {text:{value:`Keeping the balance between <span id="function">functionality </span> and <span id="creative">creativity</span>`, padSpace:true,  ease:Linear.easeNone},delay:0}); 
//tl.to(".text", 2, {text:{value:`<span id="creative">creativity</span>`, padSpace:true, ease:Linear.easeNone},delay:0});



function timelineDone(p1, p2) {
    console.log("timeline done. params: " + p1 + " and " + p2);
}

 
    gsap.registerPlugin(TextPlugin)
  
  