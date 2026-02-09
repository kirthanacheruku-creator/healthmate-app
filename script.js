function setReminder(type) {

    const timeInput = document.getElementById("time");
    if (!timeInput) {
        alert("Time input not found");
        return;
    }

    const time = timeInput.value;
    if (time === "") {
        alert("Please select time");
        return;
    }

    const now = new Date();
    const target = new Date();

    const parts = time.split(":");
    target.setHours(parts[0]);
    target.setMinutes(parts[1]);
    target.setSeconds(0);

    const delay = target.getTime() - now.getTime();

    if (delay <= 0) {
        alert("Please choose a future time");
        return;
    }

    alert(type + " reminder set successfully!");

    setTimeout(() => {
        alert("⏰ " + type + " reminder time!");
    }, delay);
}
