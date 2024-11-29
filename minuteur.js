let timerInterval;

document.getElementById("start").onclick = function() {
    const minutes = parseInt(document.getElementById("minutes").value) || 0;
    const seconds = parseInt(document.getElementById("seconds").value) || 0;
    let totalTime = minutes * 60 + seconds;

    if (timerInterval) clearInterval(timerInterval);

    timerInterval = setInterval(function() {
        if (totalTime <= 0) {
            clearInterval(timerInterval);
            alert("Temps écoulé !");
        } else {
            totalTime--;
            document.getElementById("timer").innerText = formatTime(totalTime);
        }
    }, 1000);
};

document.getElementById("reset").onclick = function() {
    clearInterval(timerInterval);
    document.getElementById("timer").innerText = "00:00";
};

function formatTime(totalSeconds) {
    const minutes = Math.floor(totalSeconds / 60).toString().padStart(2, '0');
    const seconds = (totalSeconds % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
}
