const audioContainer = document.getElementById("audio-container");
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const next = document.getElementById("next");

const title = document.getElementById("title")
const audio = document.getElementById("audio");
const progressContainer = document.getElementById("progress-container");
const progress = document.getElementById("progress");
const cover = document.getElementById("cover");

let songIndex = 0;

function loadSong(song) {
    title.innerText = song;
    audio.src = `music/${song}.mp3`;
    cover.src = `images/${song}.jpg`;
}

loadSong(songs[songIndex]);
songTextFunc(songIndex)

function playSong() {
    audioContainer.classList.add("play")
    playBtn.querySelector("i.fas").classList.remove("fa-play")
    playBtn.querySelector("i.fas").classList.add("fa-pause")

    audio.play()
}

function pauseSong() {
    audioContainer.classList.remove("play");

    playBtn.querySelector("i.fas").classList.add("fa-play")
    playBtn.querySelector("i.fas").classList.remove("fa-pause")

    audio.pause()
}

function prevSong() {
    songIndex--;
    localStorage.getItem("song-text")

    if (songIndex < 0) songIndex = songs.length - 1;

    loadSong(songs[songIndex]);
    songTextFunc(songIndex)
    playSong()
    document.documentElement.scrollTop = 0;
}

function nextSong() {
    songIndex++;

    if (songIndex > songs.length - 1) songIndex = 0

    loadSong(songs[songIndex]);
    songTextFunc(songIndex)
    playSong()
    document.documentElement.scrollTop = 0;
}

function updateProgress(e) {
    const { duration, currentTime } = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`
}

function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    audio.currentTime = (clickX / width) * duration;
}

playBtn.addEventListener("click", () => {
    const isPlaying = audioContainer.classList.contains("play");

    if (isPlaying) pauseSong();
    else playSong();
})

prevBtn.addEventListener("click", prevSong);
next.addEventListener("click", nextSong);

audio.addEventListener("timeupdate", updateProgress)

progressContainer.addEventListener("click", setProgress)

audio.addEventListener("ended", nextSong)

document.addEventListener("keydown", (e) => {
    if (e.keyCode === 39) nextSong()
    else if (e.keyCode === 37) prevSong()
})