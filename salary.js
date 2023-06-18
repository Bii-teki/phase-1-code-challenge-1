
const prompt = require('prompt');

prompt.start();

prompt.get(['basicSalary'], function (err, salo)

 {

let nssf = 200;
let salary = salo.basicSalary - nssf;
let personalRelief = 2400;

const payee =()=>{

  //throws an error
  if (err) { return onErr(err);
  }
  let paye=0;
    let nhifAmount = 0;

    if (salary<=24000) {
          paye += 2400;
    } else if(salary>24000 && salary<=32333){
        paye += Math.floor(((salary-24000)*0.25) + 2400)
    }
    else if(salary>32333){
        paye += Math.floor(((salary-32333)*0.3) + 2083.33 + 2400);
    }

    if (salo.basicSalary >= 1000) {
        if (salo.basicSalary  >= 1000 && salo.basicSalary  <= 5999) {
            nhifAmount += 150;
        } else if (salo.basicSalary  >= 6000 && salo.basicSalary  <= 7999) {
            nhifAmount += 300;
        } else if (salo.basicSalary  >= 8000 && salo.basicSalary  <= 11999) {
            nhifAmount += 400;
        } else if (salo.basicSalary  >= 12000 && salo.basicSalary  <= 14999) {
            nhifAmount += 500;
        } else if (salo.basicSalary  >= 15000 && salo.basicSalary  <= 19999) {
            nhifAmount += 600;
        } else if (salo.basicSalary  >= 20000 && salo.basicSalary  <= 24999) {
            nhifAmount += 750;
        } else if (salo.basicSalary  >= 25000 && salo.basicSalary  <= 29999) {
            nhifAmount += 850;
        } else if (salo.basicSalary  >= 30000 && salo.basicSalary  <= 34999) {
            nhifAmount += 900;
        } else if (salo.basicSalary  >= 35000 && salo.basicSalary  <= 39999) {
            nhifAmount += 950;
        } else if (salo.basicSalary  >= 40000 && salo.basicSalary  <= 44999) {
            nhifAmount += 1000;
        } else if (salo.basicSalary  >= 45000 && salo.basicSalary  <= 49999) {
            nhifAmount += 1100;
        } else if (salo.basicSalary  >= 50000 && salo.basicSalary  <= 59999) {
            nhifAmount += 1200;
        } else if (salo.basicSalary  >= 60000 && salo.basicSalary  <= 69999) {
            nhifAmount += 1300;
        } else if (salo.basicSalary  >= 70000 && salo.basicSalary  <= 79999) {
            nhifAmount += 1400;
        } else if (salo.basicSalary >= 80000 && salo.basicSalary  <= 89999) {
            nhifAmount += 1500;
        } else if (salo.basicSalary  >= 90000 && salo.basicSalary  <= 99999) {
            nhifAmount += 1600;
        } else if (salo.basicSalary  >= 100000) {
            nhifAmount += 1700;
        }
    } else {
        nhifAmount += 0;
    }
    let pay = paye-personalRelief;
    let pow =salo.basicSalary  - (pay + nhifAmount  + nssf);
    console.log('  Basic Salary: ' + salo.basicSalary);
    console.log('  Paye without relief: ' + paye);
    console.log('  NHIF Contribution: ' + nhifAmount);    
    console.log('  nssf contribution: ' + nssf);
    console.log('  paye with relief: ' + pay); 
    console.log('  Net Monthly Salary: ' + pow);
}


payee();
});



function onErr(err) {
    console.log(err);
    return 1;
  }