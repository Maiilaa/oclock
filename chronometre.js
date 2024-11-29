let startTime, updatedTime, difference, interval;
let isRunning = false;
const display = document.getElementById("chrono");
const laps = document.getElementById("laps");

function formatTime(ms) {
    const date = new Date(ms);
    return date.toISOString().substr(11, 12);
}

document.getElementById("start").onclick = function() {
    if (!isRunning) {
        startTime = Date.now() - (difference || 0);
        interval = setInterval(updateChrono, 10);
        isRunning = true;
    }
};

document.getElementById("stop").onclick = function() {
    clearInterval(interval);
    isRunning = false;
};

document.getElementById("reset").onclick = function() {
    clearInterval(interval);
    difference = 0;
    display.innerHTML = "00:00:00.000";
    laps.innerHTML = "";
    isRunning = false;
};

document.getElementById("lap").onclick = function() {
    if (isRunning) {
        const lapItem = document.createElement("li");
        lapItem.textContent = formatTime(difference);
        laps.appendChild(lapItem);
    }
};

function updateChrono() {
    updatedTime = Date.now();
    difference = updatedTime - startTime;
    display.innerHTML = formatTime(difference);
}
