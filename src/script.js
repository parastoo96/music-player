const track = document.getElementById("track");
const thumbnail = document.getElementById("thumbnail");
const trackArtist = document.getElementById("track-artist");
const trackTitle = document.getElementById("track-title");
const progressBar = document.getElementById("progressBar");
const currentTime = document.getElementById("currentTime");
const durationTime = document.getElementById("durationTime");

let play = document.getElementById("play");
let pause = document.getElementById("pause");
let next = document.getElementById("next-track");
let prev = document.getElementById("prev-track");
trackIndex = 0;
tracks = [
  "/assets/Macan Band - Bale.mp3",
  "/assets/Masih.&.Arash.AP-Shah.Beyt(128).mp3"
];
thumbnails = [
  "/assets/Macan-Band-Bale.jpg",
  "/assets/masih_arash ap_shah_beyt.jpg"
];
trackArtists = ["Macan Band ", "Masih & Arash"];
trackTitles = ["Bale","Shah Beyt"];
let playing = true;
function pausePlay() {
  if (playing) {
    play.style.display = "none";
    pause.style.display = "block";
    thumbnail.style.transform = "scale(1.25)";
    track.play();
    playing = false;
  } else {
    pause.style.display = "none";
    play.style.display = "block";
    thumbnail.style.transform = "scale(1)";
    track.pause();
    playing = true;
  }
}


play.addEventListener("click", pausePlay);
pause.addEventListener("click", pausePlay);
track.addEventListener("ended", nextTrack);

function nextTrack() {
  trackIndex++;
  if (trackIndex > tracks.length - 1) {
    trackIndex = 0;
  }
  track.src = tracks[trackIndex];
  thumbnail.src = thumbnails[trackIndex];
  trackArtist.textContent = trackArtists[trackIndex];
  trackTitle.textContent = trackTitles[trackIndex];
  playing = true;
  pausePlay();
}
next.addEventListener("click", nextTrack);

function prevTrack() {
  trackIndex--;
  if (trackIndex < 0) {
    trackIndex = tracks.length - 1;
  }
  track.src = tracks[trackIndex];
  thumbnail.src = thumbnails[trackIndex];
  trackArtist.textContent = trackArtists[trackIndex];
  trackTitle.textContent = trackTitles[trackIndex];
  playing = true;
  pausePlay();
}



prev.addEventListener("click", prevTrack);
function progressValue() {
  progressBar.max = track.duration;
  progressBar.value = track.currentTime;
  currentTime.textContent = formatTime(track.currentTime);
  durationTime.textContent = formatTime(track.duration);
}
setInterval(progressValue, 500);

function formatTime(sec) {
  let minutes = Math.floor(sec / 60);
  let seconds = Math.floor(sec - minutes * 60);
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  return `${minutes}:${seconds}`;
}

function changeProgressBar() {
  track.currentTime = progressBar.value;
}

progressBar.addEventListener("click", changeProgressBar);