
const prompt = require('prompt');
// it calls prompt module
prompt.start();

prompt.get(['speed'], function (err, result) 
// it gets speed value from the prompt 

 {
  // declare variables speedLimit and kmPerPoint as constants and assign values 
  const speedLimit = 70;
  const kmPerPoint = 5;

  //throws an error
  if (err) { return onErr(err);
  }

 // gets values entered via prompt 
 //checks if the speed value is less than sum of speedLimit and kmPerPoint

  if (result.speed < speedLimit + kmPerPoint) {
    console.log("Ok"); 
    // if the outcome is true it will display message OK on console 
    return;
  }

  const points = Math.floor((result.speed - speedLimit) / kmPerPoint);
  //the variable points value is subtractraction of speedlimit from entered speed and divided by kmperPoint  

  // checks if the value of points is more than or equal to 12
  if (points >= 12) {
    console.log("License suspended");
//if it is true it will output the message license suspended
  }
  // if not it will prints the value of points
  else console.log("Points", points);
});


function onErr(err) {
  console.log(err);
  return 1;
}