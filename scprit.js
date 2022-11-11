const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const ampm = document.getElementById("am-pm");
  // hare function given to get time 
function updateTime() {
  let hrs = new Date().getHours();
  let mins = new Date().getMinutes();
  let sec = new Date().getSeconds();
  
  // AM and PM function 
  let am_pm = "AM";
  if(hrs > 12){
    hrs -= 12;
    am_pm = "PM";
  }
  
  hrs = (hrs<10) ? " 0 "  + hrs : hrs;
  mins = (mins<10) ? "0" + mins : mins;
  sec = (sec<10) ? "0" + sec : sec;
  
  hours.innerText = hrs;
  minutes.innerText = mins;
  seconds.innerText = sec;
  ampm.innerText = am_pm;
  
  setTimeout(() => {
    updateTime();
  }, 1000)
}
// for update time 
updateTime();