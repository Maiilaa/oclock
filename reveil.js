let alarmTime = null;

document.getElementById("setAlarm").onclick = function() {
    alarmTime = document.getElementById("alarmTime").value;
    const listItem = document.createElement("li");
    listItem.textContent = "Alarme réglée à " + alarmTime;
    document.getElementById("alarmsList").appendChild(listItem);
};

setInterval(function() {
    if (alarmTime) {
        const now = new Date();
        const currentTime = now.toTimeString().substr(0, 5);
        if (currentTime === alarmTime) {
            alert("C'est l'heure !");
            alarmTime = null;
        }
    }
}, 1000);
