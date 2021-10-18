const btn = document.getElementById("show-video-button");
const video = document.getElementById("video");
let clicked = false;
function showVideo() {
  if (!clicked) {
    clicked = true;
    video.className = "showing";
    video.play();
    btn.innerHTML = "<h4>Hide Video ⇑</h4>";
  } else {
    video.className = "hidden";
    clicked = false;
    video.pause();
    btn.innerHTML = "<h4>Show Video ⇓</h4>";
  }
}
