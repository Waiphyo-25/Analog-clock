function setClock(){
    const hourHand = document.getElementById('hour_hand');
    const minuteHand = document.getElementById('minute_hand');
    const secondHand = document.getElementById('second_hand');

    const currentDate = new Date();
    console.log(currentDate);
    const secondRatio = currentDate.getSeconds()/60;
    const minuteRatio = (secondRatio + currentDate.getMinutes())/60;
    const hoursRatio = (minuteRatio + currentDate.getHours())/12;
    console.log(hoursRatio);
    console.log(minuteRatio);
    

    setRotation(secondHand, secondRatio);
    setRotation(minuteHand, minuteRatio);
    setRotation(hourHand,hoursRatio);
}
function setRotation(element,rotationRatio){
    // console.log(element, rotationRatio);
    element.style.setProperty("--rotation",rotationRatio * 360 );
}
setInterval(setClock,1000);