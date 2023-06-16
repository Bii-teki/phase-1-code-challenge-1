
const prompt = require('prompt');

prompt.start();

prompt.get(['speed'], function (err, result) 


 {
  const speedLimit = 70;
  const kmPerPoint = 5;
  if (err) { return onErr(err);
  }
  if (result.speed < speedLimit + kmPerPoint) {
    console.log("Ok");
    return;
  }

  const points = Math.floor((result.speed - speedLimit) / kmPerPoint);
  if (points >= 12) console.log("License suspended");
  else console.log("Points", points);
});


function onErr(err) {
  console.log(err);
  return 1;
}