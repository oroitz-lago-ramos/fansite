//   Background audio
// var isChrome =
//   /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
// if (!isChrome) {
//   $("#iframeAudio").remove();
// } else {
//   $("#playAudio").remove(); // just to make sure that it will not have 2x audio in the background
// }
var aud = document.getElementById("pp-button").children[0];
var isPlaying = false;
aud.pause();

function playPause() {
  if (isPlaying) {
    aud.pause();
  } else {
    aud.play();
  }
  isPlaying = !isPlaying;
}