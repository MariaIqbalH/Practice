setInterval(clock, 1000);

function clock () {
    let date = new Date();
    let hrs = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();
    let period = "AM";

// converting 24 to 12
    if (hrs == 0) {
         hrs = 12;
    } else if (hrs >= 12) {
       hrs = hrs - 12;
       period = "PM";
    }
    
 // adding zero
    hrs = hrs < 10 ? "0" + hrs : hrs;
    mins = mins < 10 ? "0" + mins : mins;
    secs = secs < 10 ? "0" + secs : secs;
  
    let time = `${hrs}:${mins}:${secs} ${period}`;
    document.getElementById("clock").innerText = time;
  };
  
  clock();