function date() {
  let tar = document.getElementById("target").value;
  const day = document.getElementById("days");
  const hour = document.getElementById("hours");
  const min = document.getElementById("mins");
  const second = document.getElementById("seconds");
  const newdate = new Date(tar);
  const currentdate = new Date();
  const totalSeconds = (newdate - currentdate) / 1000;
  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const mins = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;
  day.innerHTML = days;
  hour.innerHTML = formatTime(hours);
  min.innerHTML = formatTime(mins);
  second.innerHTML = formatTime(seconds);
  setInterval(date, 1000);
}
function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}
