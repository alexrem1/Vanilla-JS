// onload
window.addEventListener("load", () => {
  //create div for buttons
  const buttonDiv = document.createElement("div");
  buttonDiv.classList.add("home__button");
  // create button 1
  const button1 = document.createElement("button");
  button1.innerHTML = "Feel at Sea";
  button1.setAttribute("data-video", "./landing/video/home.mp4");

  //create button2
  const button2 = document.createElement("button");
  button2.innerHTML = "Rainy Days";
  button2.setAttribute("data-video", "./landing/video/home2.mp4");

  //turn buttons to array, append to buttonsdiv via spread
  buttons = [button1, button2];
  buttonDiv.append(...buttons);
  //append to hometitle
  document.querySelector(".home__title").append(buttonDiv);

  // create video element, add classlist, set variables to true, insert after header element
  const bgVideo = document.createElement("video");
  bgVideo.classList.add("home__vid");
  bgVideo.src = "./landing/video/home3.mp4";
  bgVideo.loop = true;
  bgVideo.autoplay = true;
  bgVideo.muted = true;
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
  newHomeTitleContainer.classList.add("home__title");

  const h1Container = document.createElement("div");
  h1Container.classList.add("home__h1");
  const newHomeTitle = document.createElement("h1");
  newHomeTitle.innerHTML = "Understanding JavaScript";
  h1Container.append(newHomeTitle);

  // insert homediv after header, append titlediv to homeContainer, append titlecontents to titlediv
  document
    .querySelector("header")
    .insertAdjacentElement("afterend", homeContainer);
  homeContainer.append(newHomeTitleContainer);
  newHomeTitleContainer.append(h1Container);

  //create animations div and h2 element, add class and modify innerhtml
  const animationsTextContainer = document.createElement("div");
  const animationsText = document.createElement("h2");
  animationsTextContainer.classList.add("home__text");
  animationsText.innerHTML = "and Animations";

  //insert animations text into div and then into homecontainer after the h1
  animationsTextContainer.insertAdjacentElement("afterbegin", animationsText);
  newHomeTitleContainer.insertAdjacentElement(
    "beforeend",
    animationsTextContainer
  );

  window.addEventListener("mousemove", () => {
    animationsTextContainer.classList.add("transition");
    animationsText.classList.add("transition");
    h1Container.classList.add("transition");
    newHomeTitle.classList.add("transition");
    document.querySelector(".home__button").classList.add("transition");
  });
}

home();
