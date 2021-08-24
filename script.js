setInterval(function () {
    var currentHour = new Date().getHours()
    var currentMinute = new Date().getMinutes()
    var currentSecond = new Date().getSeconds()
    var seconds = document.querySelector("#seconds");
    var minutes = document.getElementById("minutes");
    var hours = document.getElementById("hour");
    var secondsDeg = currentSecond * 6 + 180;
    var minutesDeg = currentMinute * 6 + 180
    var hoursDeg = currentHour * 30 + 180
    rotate(seconds, secondsDeg)
    rotate(minutes, minutesDeg)
    rotate(hours, hoursDeg)
}, 1000);

rotate = function (element, degrees) {
    element.style.transform = `rotate(${degrees}deg)`;
}