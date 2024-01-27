
video.addEventListener('click', ()=> {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
});

video.addEventListener('ended', () => {
    video.time = 0;
    timeDisplay.innerHTML = '00:00:0000';
})


video.addEventListener('timeupdate', function() {
    timeDisplay.innerHTML = formatTime(this.currentTime*1000);
});

function formatTime(milliseconds) {
    let seconds = milliseconds/1000;
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    const remainingMs = Math.floor(milliseconds % 1000);
    return `${format2digits(minutes)}:${format2digits(remainingSeconds)}:${format3digits(remainingMs)}`;
}
  
function format2digits(num) {
    return (num < 10 ? '0' : '') + num;
}

function format3digits(num) {
    if (num < 10) {
        return '00' + num;
    } else if (num < 100) {
        return '0' + num;
    }
    return num;
}