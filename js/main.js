(() => {
    
    console.log("Welcome to Vira's Portfolio, let's connect!");



  // gallery flipping effect library
  const flipping = new Flipping();

  // grab thumbnails and images node lists
  const elImages = Array.from(document.querySelectorAll("#myWorks .ui-big-image"));
  const elThumbnails = Array.from(document.querySelectorAll("#myWorks .ui-thumbnail"));

  // VUE instance
  const vm = new Vue({
    el: "#app",

    data: {
      
      projectsData: [],
      state: {
        photo: 0
      },
      elImages,
      elThumbnails
    },

    created: function () {
      this.moveImg(0);
      this.fetchProjectsData();

    },

    methods: {
      fetchProjectsData() {
        url = "./includes/index.php";

        fetch(url) // pass in the one or many query
          .then(res => res.json())
          .then(data => {
            console.log(data);
            this.projectsData = data;
          })
          .catch(function (error) {
            console.log(error);
          });
      },

      moveImg(event) {
        // read cuticle positions
        flipping.read();

        const elActives = document.querySelectorAll("[data-active]");

        Array.from(elActives).forEach(el => el.removeAttribute("data-active"));

        switch (event) {
          case "PREV":
            this.state.photo--;
            // Math.max(state.photo - 1, 0);
            break;
          case "NEXT":
            this.state.photo++;
            // Math.min(state.photo + 1, elImages.length - 1);
            break;
          default:
            this.state.photo = +event;
            break;
        }

        var len = this.elImages.length;
        // Loop Around
        //state.photo = ( ( state.photo % len) + len ) % len;
        this.state.photo = Math.max(0, Math.min(this.state.photo, len - 1));

        Array.from(
          document.querySelectorAll(`[data-key="${this.state.photo}"]`)
        ).forEach(el => {
          el.setAttribute("data-active", true);
        });

        // execute the FLIP animation
        flipping.flip();
      }
    }
  });








    //scrollTo
    const scrollTo = document.querySelectorAll(".scrollTo");
    console.log("We are scrolling", scrollTo.textContent);
  
    scrollTo.forEach(e => e.addEventListener("click", scrollto));
  
    function scrollto() {
      TweenLite.to(window, 1, {
        scrollTo: { y: `.${this.textContent}`, offsetY: 0 }
      });
    }
  
  



})();  