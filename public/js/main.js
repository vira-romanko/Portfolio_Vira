

// import Team from "./modules/portfolio_object.js";

// (() => {
//   const members = document.querySelector(".members");
//   const bio = document.querySelector(".bio-wrapper");
//   const close_popup = document.querySelector(".bio-wrapper span");
//   const avatar = document.querySelector(".bio-wrapper img");
//   const info = document.querySelector(".info").children;
//   const blurry = document.querySelector(".blurry_background");

//   //scroll to pop up window function
//   function scrollToBio() {
//     TweenLite.to(window, 0.5, {
//       scrollTo: { y: `.bio-wrapper`, offsetY: 20 }
//     });
//   }

//   //show bio data function
//   function showProfData() {
//     bio.style.display = "flex";

//     //slice the class of each member so it will appear their object name
//     const currentProf = this.className.slice(7);
//     console.log(currentProf);

//     //adding value into pop up window
//     avatar.src = `images/portfolio_piece/${Team[currentProf].popup}`;
//     info[0].textContent = `${Team[currentProf].name}`;
//     info[1].textContent = `${Team[currentProf].bio}`;

//     //adding social media to pop up window
//     document.querySelector(".member-social").innerHTML =
//       `<a href='${Team[currentProf].linkedin}'><img src="images/social_media/linkedin.svg" alt="linkedin"></a>` +
//       `<a href='${Team[currentProf].twitter}'><img src="images/social_media/twitter.svg" alt="twitter"></a>` +
//       `<a href='${Team[currentProf].facebook}'><img src="images/social_media/facebook.svg" alt="facebook"></a>` +
//       `<a href='${Team[currentProf].instagram}'><img src="images/social_media/instagram.svg" alt="instagram"></a>`;
//     scrollToBio();

//     blurry.style.display = "block";
//   }

//   //close pop up window function
//   function closePopup() {
//     bio.style.display = "none";
//     blurry.style.display = "none";
//   }

//   //loop through object
//   for (let prof in Team) {
//     console.log("aaa:" + prof);

//     //declare varibles for bio window
//     let member = document.createElement("div");
//     let member_name = document.createElement("div");
//     let member_social = document.createElement("div");

//     //add class to var
//     member.className = `member ${prof}`;
//     member_name.className = "member-name";
//     member_social.className = "member-social";

//     //append into DOM

//     //adding img and names
//     member.innerHTML = `<img class="potrait" src=images/portfolio_piece/project_thumbnails/${Team[prof].avatar}.jpg>`;
//     member_name.innerHTML = `<h4>${Team[prof].name}</h4>`;

//     members.appendChild(member);
//     member.appendChild(member_name);
//     member.appendChild(member_social);

//     console.log(member_social);

//     //adding social media for each member
//     member_social.innerHTML =
//       `<a href='${Team[prof].linkedin}'><img src="images/social_media/linkedin.svg" alt="linkedin"></a>` +
//       `<a href='${Team[prof].twitter}'><img src="images/social_media/twitter.svg" alt="twitter"></a>` +
//       `<a href='${Team[prof].facebook}'><img src="images/social_media/facebook.svg" alt="facebook"></a>` +
//       `<a href='${Team[prof].instagram}'><img src="images/social_media/instagram.svg" alt="instagram"></a>`;

//     //click event to show bio
//     member.addEventListener("click", showProfData);
//   }

//   //click event to close popup window
//   close_popup.addEventListener("click", closePopup);
  
// })();

(() => {
  console.log("Welcome to Vira's Portfolio, let's connect!");
  let portfolioPiece = document.querySelectorAll(".portfolio-piece"),
    modal = document.querySelector(".modal"),
    modalContent = document.querySelector(".modal-content"),
    closeLightbox = document.querySelectorAll(".close-lightbox"),
    portfolioPage = document.querySelector(".portfolio-page"),
    portfolioHeader = portfolioPage.querySelector(".header"),
    portfolioName = portfolioPage.querySelector(".portfolio-piece-name"),
    link = portfolioPage.querySelector(".link-wrapper"),
    promoText = portfolioPage.querySelector(".promo-text"),
    paragraph1 = portfolioPage.querySelector(".para-1"),
    paragraph2 = portfolioPage.querySelector(".para-2"),
    paragraph3 = portfolioPage.querySelector(".para-3"),
    img1 = portfolioPage.querySelector(".img-1"),
    img2 = portfolioPage.querySelector(".img-2"),
    img3 = portfolioPage.querySelector(".img-3"),
    tool = portfolioPage.querySelector(".tools-icons"),
    toolName = portfolioPage.querySelector(".tool-name");
  //form = document.querySelector("form");

  //prevent resending message
  // form.submit(e => {
  //   e.preventDefault();
  // });

  //fetching data AJAX
  function getData(e) {
    e.preventDefault();
    let url = `portfolio/${this.getAttribute("href")}`;
    console.log(url);
    fetch(url)
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data);
        parseData(data);
      })
      .catch(err => {
        // Do something for an error here
        console.log("Error Reading data " + err);
      });

    modal.classList.add("show");
  }

  //add data into DOM
  function parseData(content) {
    portfolioHeader.innerHTML = content.header;
    portfolioName.innerHTML = content.name;
    link.innerHTML = `${splitLink(content.link)}`;
    // link.href = content.link;
    promoText.innerHTML = content.promo_text;
    img1.src = content.thumbnail;
    img2.src = content.image_2;
    img3.src = content.image_3;
    paragraph1.innerHTML = content.paragraph_1;
    paragraph2.innerHTML = content.paragraph_2;
    paragraph3.innerHTML = content.paragraph_3;
    tool.innerHTML = `${splitTool(content.tool_name, content.tool_icon)}`;
  }

  function splitTool(tool, icon) {
    return tool
      .map(
        (tool, index) =>
          `<div class="tool col-4 col-md-3 col-lg-2 my-3 text-center">
              <img src='images/tool_icons/${icon[index]}' class="tool-icon" style="width:50px"></img>
              <p class="my-1 tool-name">${tool}</p>
          </div> `
      )
      .join("");
  }

  function splitLink(link) {
    return `${link
      .map(
        item =>
          `<li><a target="_blank"   class="portfolio-link" href=${item}>Link to project</a></li>`
      )
      .join("")}`;
  }

  //event listener for portfolio piece
  portfolioPiece.forEach(e => e.addEventListener("click", getData));

  //close lightbox function
  closeLightbox.forEach(close => {
    close.addEventListener("click", function () {
      modal.classList.remove("show");
    });
  });
})();

