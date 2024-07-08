let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");
let ctrlForward = document.getElementById("ctrlForward");
let currTime = document.querySelector("current-time");
let musicDuration = document.querySelector("song-duration");

let song1 = document.getElementById("song1");
let song2 = document.getElementById("song2");
let song3 = document.getElementById("song3");
let song4 = document.getElementById("song4");
let song5 = document.getElementById("song5");
let song6 = document.getElementById("song6");
let song7 = document.getElementById("song7");
let song8 = document.getElementById("song8");

let playerSong = document.getElementById("playerSong");
let playerArtist = document.getElementById("playerArtist");
let bannerImage = document.getElementById("bannerImage");
let playerMusic = document.getElementById("playerMusic");

song.onloadedmetadata = function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
};

// const forward = function () {
//   currentTime.innerHTML = "00:00";
//   setTimeout(() => {
//     progress.max = song.duration;
//     musicDuration.innerHTML = formatTime(song.duration);
//   }, 300);

//   const formatTime = (time) => {
//     let min = Math.floor(time / 60);
//     if (min < 10) {
//       min = `0${min}`;
//     }
//     let sec = Math.floor(time % 60);
//     if (sec < 10) {
//       sec = `0${sec}`;
//     }
//     return `${min}:${sec}`;
//   };
// };

// const forward = function () {
//   if (audio == "Sabrina_Carpenter_-_Espresso_@BaseNaija.mp3") {
//     let audio = new Audio("Pehle Bhi Main_320(PagalWorld.com.sb).mp3");
//     playerSong.textContent = "Pehle Bhi Main";
//     playerArtist.textContent = "Vishal Mishra";
//     bannerImage.src = "romance.png";
//     audio.play();
//   } else if (audio == "Pehle Bhi Main_320(PagalWorld.com.sb).mp3") {
//     audio.pause();
//     let audio = new Audio("Tu Hai Champion_320(PagalWorld.com.sb).mp3");
//     playerSong.textContent = "Tu Hai Champion";
//     playerArtist.textContent = "Arijit Singh";
//     bannerImage.src = "motivational.png";
//     audio.play();
//   } else if (audio == "Tu Hai Champion_320(PagalWorld.com.sb).mp3") {
//     audio.pause();
//     let audio = new Audio("The-Box---Roddy-Ricch(musicdownload.cc).mp3");
//     playerSong.textContent = "The Box";
//     playerArtist.textContent = "Roddy Ricch";
//     bannerImage.src = "artist6.png";
//     audio.play();
//   } else if (audio == "The-Box---Roddy-Ricch(musicdownload.cc).mp3") {
//     audio.pause();
//     let audio = new Audio("Jung_Kook_-_Never_Let_Go.mp3");
//     playerSong.textContent = "Never Let Go";
//     playerArtist.textContent = "Jung Kook";
//     bannerImage.src = "kpop.png";
//     audio.play();
//   }
// };

const playPause = function () {
  if (ctrlIcon.classList.contains("fa-pause")) {
    song.pause();
    ctrlIcon.classList.remove("fa-pause");
    ctrlIcon.classList.add("fa-play");
  } else {
    song.play();
    ctrlIcon.classList.remove("fa-play");
    ctrlIcon.classList.add("fa-pause");
  }
};

if (song.play()) {
  setInterval(() => {
    progress.value = song.currentTime;
  }, 500);
}

progress.onchange = function () {
  song.play();
  song.currentTime = progress.value;
  ctrlIcon.classList.remove("fa-play");
  ctrlIcon.classList.add("fa-pause");
};

const change = function (filename) {
  let img = document.getElementById("bannerImage");
  img.setAttribute("src", filename);
};

song1.addEventListener("click", function () {
  let audio = new Audio("Sabrina_Carpenter_-_Espresso_@BaseNaija.mp3");
  playerSong.textContent = "Espresso";
  playerArtist.textContent = "Sabrina Carpenter";
  bannerImage.src = "artist3.png";
  audio.play();
  ctrlIcon.classList.remove("fa-play");
  ctrlIcon.classList.add("fa-pause");
});

song2.addEventListener("click", function () {
  let audio = new Audio("Pehle Bhi Main_320(PagalWorld.com.sb).mp3");
  playerSong.textContent = "Pehle Bhi Main";
  playerArtist.textContent = "Vishal Mishra";
  bannerImage.src = "romance.png";
  audio.play();
  ctrlIcon.classList.remove("fa-play");
  ctrlIcon.classList.add("fa-pause");
});

song3.addEventListener("click", function () {
  let audio = new Audio("Tu Hai Champion_320(PagalWorld.com.sb).mp3");
  playerSong.textContent = "Tu Hai Champion";
  playerArtist.textContent = "Arijit Singh";
  bannerImage.src = "motivational.png";
  audio.play();
  ctrlIcon.classList.remove("fa-play");
  ctrlIcon.classList.add("fa-pause");
});

song4.addEventListener("click", function () {
  let audio = new Audio("The-Box---Roddy-Ricch(musicdownload.cc).mp3");
  playerSong.textContent = "The Box";
  playerArtist.textContent = "Roddy Ricch";
  bannerImage.src = "artist6.png";
  audio.play();
  ctrlIcon.classList.remove("fa-play");
  ctrlIcon.classList.add("fa-pause");
});

song5.addEventListener("click", function () {
  let audio = new Audio("Jung_Kook_-_Never_Let_Go.mp3");
  playerSong.textContent = "Never Let Go";
  playerArtist.textContent = "Jung Kook";
  bannerImage.src = "kpop.png";
  audio.play();
  ctrlIcon.classList.remove("fa-play");
  ctrlIcon.classList.add("fa-pause");
});

song6.addEventListener("click", function () {
  let audio = new Audio("Perdido(chosic.com).mp3");
  playerSong.textContent = "Perdido";
  playerArtist.textContent = "Airbag";
  bannerImage.src = "artist8.png";
  audio.play();
  ctrlIcon.classList.remove("fa-play");
  ctrlIcon.classList.add("fa-pause");
});

song7.addEventListener("click", function () {
  let audio = new Audio("train-country-blues-rock-131593.mp3");
  playerSong.textContent = "28";
  playerArtist.textContent = "Zach Bryan";
  bannerImage.src = "artist7.png";
  audio.play();
  ctrlIcon.classList.remove("fa-play");
  ctrlIcon.classList.add("fa-pause");
});

song8.addEventListener("click", function () {
  let audio = new Audio("mixkit-upbeat-jazz-644.mp3");
  playerSong.textContent = "Collblanc";
  playerArtist.textContent = "Joe Webb";
  bannerImage.src = "artist5.png";
  audio.play();
  ctrlIcon.classList.remove("fa-play");
  ctrlIcon.classList.add("fa-pause");
});
