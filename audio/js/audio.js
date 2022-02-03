const song = document.querySelector(".song");
const play = document.querySelector(".play");
const replay = document.querySelector(".replay");
const outline = document.querySelector(".moving-outline circle");
const video = document.querySelector(".vid-container video");

//Sounds
const sounds = document.querySelectorAll(".sound-picker button");

//Time Display
const timeDisplay = document.querySelector(".time-display");
const outlineLength = outline.getTotalLength();

//Duration
const timeSelect = document.querySelectorAll(".time-select button");
let fakeDuration = 600;

//animate circle so start from 0
outline.style.strokeDashoffset = outlineLength;
outline.style.strokeDasharray = outlineLength;

//click different sounds
sounds.forEach((sound) => {
  sound.addEventListener("click", function () {
    song.src = this.getAttribute("data-sound");
    video.src = this.getAttribute("data-video");
    checkPlaying(song);
  });
});

play.addEventListener("click", function () {
  checkPlaying(song);
});

const checkPlaying = (song) => {
  if (song.paused) {
    song.play();
    video.play();
    play.src = "./audio/svg/pause.svg";
  } else {
    song.pause();
    video.pause();
    play.src = "./audio/svg/play.svg";
  }
};

replay.addEventListener("click", function () {
  restartSong(song);
});

const restartSong = (song) => {
  let currentTime = song.currentTime;
  song.currentTime = 0;
};

//select sound
timeSelect.forEach((option) => {
  option.addEventListener("click", function () {
    fakeDuration = this.getAttribute("data-time");
    timeDisplay.textContent = `${Math.floor(fakeDuration / 60)}:${Math.floor(
      fakeDuration % 60
    )}`;
  });
});

song.ontimeupdate = function () {
  //get the time
  let currentTime = song.currentTime;
  let elapsed = fakeDuration - currentTime;
  let seconds = Math.floor(elapsed % 60);
  let minutes = Math.floor(elapsed / 60);

  //animate the text
  timeDisplay.textContent = `${minutes}:${seconds}`;

  //animate the circle
  let progress = outlineLength - (currentTime / fakeDuration) * outlineLength;
  outline.style.strokeDashoffset = progress;

  // check if song is finished
  if (currentTime >= fakeDuration) {
    song.pause();
    song.currentTime = 0;
    play.src = "./audio/svg/play.svg";
    video.pause();
  }
};
