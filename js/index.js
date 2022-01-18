// onload
window.addEventListener("load", () => {
  //create div for buttons
  const buttonDiv = document.createElement("div");
  buttonDiv.classList.add("home__button");
  // create button 1
  const button1 = document.createElement("button");
  button1.classList.add("button1");
  button1.innerHTML = "Feel at Sea";
  button1.setAttribute("data-video", "./video/home.mp4");
  //create button2
  const button2 = document.createElement("button");
  button2.classList.add("button2");
  button2.innerHTML = "Rainy Days";
  button2.setAttribute("data-video", "./video/home2.mp4");

  //turn buttons to array, append to buttonsdiv via spread
  buttons = [button1, button2];
  buttonDiv.append(...buttons);
  //append to hometitle
  document.querySelector(".home__title").append(buttonDiv);

  // create video element, add classlist, set variables to true, insert after header element
  const bgVideo = document.createElement("video");
  bgVideo.classList.add("home__vid");
  bgVideo.loop = true;
  bgVideo.autoplay = true;
  document.querySelector("header").insertAdjacentElement("afterend", bgVideo);

  //add event listen. for each button do something
  buttons.forEach((option) => {
    option.addEventListener("click", function () {
      // dynamically load background video
      bgVideo.src = this.getAttribute("data-video");
    });
  });
});

function home() {
  // create container & add class, create new div and h1 element
  const homeContainer = document.createElement("div");
  homeContainer.classList.add("home");
  const newHomeTitleContainer = document.createElement("div");
  const newHomeTitle = document.createElement("h1");

  // add class to container and modify innerHTML
  newHomeTitleContainer.classList.add("home__title");
  newHomeTitle.innerHTML = "Understanding JavaScript";

  // insert homediv after header, append titlediv to homeContainer, append titlecontents to titlediv
  document
    .querySelector("header")
    .insertAdjacentElement("afterend", homeContainer);
  homeContainer.append(newHomeTitleContainer);
  newHomeTitleContainer.append(newHomeTitle);
}

home();
