let $ = document;
const players = $.querySelectorAll(".fa-play");
const audios = $.querySelectorAll("audio");

let musicName;
console.log(players);
players.forEach(function (player) {
  console.log(player);
  player.addEventListener("click", function (event) {
    console.log(event.target.dataset.name);
    musicName = event.target.dataset.name;
    audios.forEach(function (audio) {
      if (audio.dataset.name === musicName) {
        audio.currentTime = 0;
        audio.play();
      } else {
        audio.pause();
      }
    });
  });
});
