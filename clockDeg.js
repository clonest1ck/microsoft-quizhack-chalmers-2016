var time = process.argv[2];

var hours = time.split(":")[0];
var minute = time.split(":")[1];

hoursdeg = ((parseInt(hours) % 12) * 60 + parseInt(minute)) * 0.5;
minutesdeg = parseInt(minute) * 6;

if(hoursdeg < minutesdeg) {
  console.log(minutesdeg - hoursdeg);
} else {
  console.log(hoursdeg - minutesdeg);
}
