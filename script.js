const d = new Date();
let year = d.getFullYear();
let month = d.getMonth();
let date = d.getDate();
let hour = d.getHours();
let min = d.getMinutes();
let sec = d.getSeconds();
let days = d.getDay();

const weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let day = weekDays[days];

document.querySelector(".days").innerHTML += day;

document.querySelector(".year").innerHTML += year;
document.querySelector(".month").innerHTML += month;
document.querySelector(".date").innerHTML += date; // document.querySelector(".year").innerHTML = year; // document.querySelector('.year').innerHTML = year;
function displayDate() {
  document.querySelector(".time").innerHTML += hour + ":" + min +":" + sec;
  
  if (hour > 12) {
    hour = 0;
  }
}
displayDate();
