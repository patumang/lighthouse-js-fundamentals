const raining = true;
const temprature = 12;

if(raining) {
  console.log("Don't forget your umbrella!");
}

if(temprature < 0) {
  console.log("Make sure you pick out a scarf!");
}
else if(temprature < 15) {
  console.log("Short sleeves won't cut it!");
}
else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");