const audio = new Audio(); // Create a new audio element

const play = document.getElementById("main-play");
const miniplays = Array.from(document.querySelectorAll("#miniplayer > div"));
const gif = document.getElementById("giff");
const songname = document.getElementById("songName");
const progbar = document.getElementById("myprogressbar");

const songs = [
  {
    name: "baaz-by-talha-anjum",
    file: "songs/baaz.mp3",
    cover: "images/baaz.jpg",
  },
  {
    name: "nadan-parinday-by atif-aslam",
    file: "songs/nadanparinday.mp3",
    cover: "images/nadanparinday.jpg",
  },
  {
    name: "beliver-by-imagen-dragon",
    file: "songs/beliver.mp3",
    cover: "images/beliver.jpg",
  },
];




const playsong = (name,id) => {

    for(let i = 0; i < songs.length; i++){
        if(name === songs[i].name){
            
            if(audio.pauseQ ){
                audio.src = songs[i].file;
                audio.play();
                document.getElementById(id).className = "fa-solid fa-pause fa-xl";
                songname.innerText = songs[i].name;
            }else{
                audio.pause();
                document.getElementById(id).className = "fa-solid fa-play fa-xl";    
            }

        }
    }

}


// let currentSongIndex = 0;

// function playPause() {
//   if (audio.paused || audio.currentTime <= 0) {
//     audio.src = songs[currentSongIndex].file;
//     audio.play();
//     play.className = "fa-solid fa-pause fa-2xl";
//     songname.innerText = songs[currentSongIndex].name;
//     updateMiniPlayer(currentSongIndex);
//   } else {
//     audio.pause();
//     play.className = "fa-solid fa-play fa-2xl";
//     gif.style.opacity = 0;
//   }
// }

// function updateMiniPlayer(index) {
//   miniplays.forEach((miniplay, i) => {
//     if (i === index) {
//       miniplay.childNodes[0].className = "fa-solid fa-pause fa-xl";
//       console.log(miniplay.childNodes[0]);
//     } else {
//       miniplay.childNodes[0].className = "fa-solid fa-play fa-xl";
//     }
//   });
// }

// function playMini(index) {
//   if (currentSongIndex === index && !audio.paused) {
//     audio.pause();
//   } else {
//     currentSongIndex = index;
//     audio.src = songs[currentSongIndex].file;
//     audio.play();
//   }
//   updateMiniPlayer(currentSongIndex);
//   play.className = audio.paused ? "fa-solid fa-play fa-2xl" : "fa-solid fa-pause fa-2xl";
//   gif.style.opacity = audio.paused ? 0 : 1;
//   songname.innerText = songs[currentSongIndex].name;
// }

// play.addEventListener("click", playPause);

// audio.addEventListener("timeupdate", () => {
//   let progress = parseInt((audio.currentTime / audio.duration) * 100);
//   progbar.value = progress;
// });

// progbar.addEventListener("change", () => {
//   audio.currentTime = (progbar.value * audio.duration) / 100;
// });

// miniplays.forEach((miniplay, index) => {
//   miniplay.addEventListener("click", () => playMini(index));
// });
