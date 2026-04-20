
// Create video element
const videoElement = document.getElementById('video');

// Select elements
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const title = document.getElementById('title');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');
const progress = document.querySelector('.progress');
const progressContainer = document.querySelector('.progress-bar');
const volumeSlider = document.getElementById('volume');
const speedSelect = document.getElementById('speed');

// VIDEO LIST
const videos = [
    {
        title: "heestii zaynab",
        src: "ebow_mahadaa.mp4"
    },
    {
        title: "heestii maandeeq",
        src: "maaandeeq.mp4"
    }
];

let videoIndex = 0;
let isPlaying = false;

// Load video
function loadVideo(video) {
    title.textContent = video.title;
    videoElement.src = video.src;
}

// Play
function playVideo() {
    playBtn.innerHTML = '<i class="fas fa-pause"></i>';
    videoElement.play();
    isPlaying = true;
}

// Pause
function pauseVideo() {
    playBtn.innerHTML = '<i class="fas fa-play"></i>';
    videoElement.pause();
    isPlaying = false;
}

// Next
function nextVideo() {
    videoIndex++;
    if (videoIndex > videos.length - 1) {
        videoIndex = 0;
    }
    loadVideo(videos[videoIndex]);
    playVideo();
}

// Prev
function prevVideo() {
    videoIndex--;
    if (videoIndex < 0) {
        videoIndex = videos.length - 1;
    }
    loadVideo(videos[videoIndex]);
    playVideo();
}

// Progress
function updateProgress() {
    const duration = videoElement.duration;
    const currentTime = videoElement.currentTime;

    const percent = (currentTime / duration) * 100;
    progress.style.width = percent + "%";

    // time
    const dMin = Math.floor(duration / 60);
    const dSec = Math.floor(duration % 60);
    durationEl.textContent = `${dMin}:${dSec}`;

    const cMin = Math.floor(currentTime / 60);
    const cSec = Math.floor(currentTime % 60);
    currentTimeEl.textContent = `${cMin}:${cSec}`;
}

// Click progress
function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    videoElement.currentTime = (clickX / width) * videoElement.duration;
}

// Events
playBtn.addEventListener('click', () => {
    isPlaying ? pauseVideo() : playVideo();
});

nextBtn.addEventListener('click', nextVideo);
prevBtn.addEventListener('click', prevVideo);

videoElement.addEventListener('timeupdate', updateProgress);
progressContainer.addEventListener('click', setProgress);

// Volume
volumeSlider.addEventListener('input', (e) => {
    videoElement.volume = e.target.value;
});

// Speed
speedSelect.addEventListener('change', (e) => {
    videoElement.playbackRate = e.target.value;
});

// Load first
loadVideo(videos[videoIndex]);