setInterval(function () {
    var currentHour = new Date().getHours()
    var currentMinute = new Date().getMinutes()
    var currentSecond = new Date().getSeconds()
    var currentMSecon = new Date().getMilliseconds()
    var seconds = document.querySelector("#seconds");
    var minutes = document.getElementById("minutes");
    var hours = document.getElementById("hour");
    var secondsDeg = currentSecond * 6 + 180 + (currentMSecon*.006) ;
    var minutesDeg = currentMinute * 6 + 180 + (currentSecond*.1) + (currentMSecon*.0001);
    var hoursDeg = currentHour * 30 + 180 + (currentMinute*.5) + (currentSecond*.00833333) + (currentMSecon*.00000833);
    rotate(seconds, secondsDeg)
    rotate(minutes, minutesDeg)
    rotate(hours, hoursDeg)
}, 1);

rotate = function (element, degrees) {
    element.style.transform = `rotate(${degrees}deg)`;
}