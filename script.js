setInterval(function () {
    var currentHour = new Date().getHours()
    var currentMinute = new Date().getMinutes()
    var currentSecond = new Date().getSeconds()
    var currentMSecon = new Date().getMilliseconds()
    var seconds = document.querySelector("#seconds");
    var minutes = document.getElementById("minutes");
    var hours = document.getElementById("hour");
    var secondsDeg = currentSecond * 6 + 180 + (currentMSecon*.00625) ;
    var minutesDeg = currentMinute * 6 + 180 + (currentSecond*.1);
    var hoursDeg = currentHour * 30 + 180 + (currentMinute*.5);
    rotate(seconds, secondsDeg)
    rotate(minutes, minutesDeg)
    rotate(hours, hoursDeg)
}, 1);

rotate = function (element, degrees) {
    element.style.transform = `rotate(${degrees}deg)`;
}