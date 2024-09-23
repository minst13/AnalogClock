
function setDate() {
    const date = new Date();
    const seconds = date.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    const secondHand = document.querySelector(".second-hand");
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`

    const minutes = date.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    const minuteHand = document.querySelector(".minute-hand");
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`

    const hours = date.getHours();
    const hoursDegrees = ((hours / 12) * 360) + 90;
    const hourHand = document.querySelector(".hour-hand");
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`

    if (secondsDegrees === 360) {
        secondHand.style.transition = "none";
    }
    if (minutesDegrees === 360) {
        minuteHand.style.transition = "none";
    }
    if (hoursDegrees === 360) {
        hourHand.style.transition = "none";
    }

    console.log(seconds);
}


setInterval(setDate, 1000);


