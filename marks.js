const prompt = require('prompt');

prompt.start();

prompt.get(['name', 'class', 'marks'], function (err, result) 

{
    if (err) { return onErr(err);
 }
    console.log('Students results are as follows:');
    console.log('  Name: ' + result.name);
    console.log('  Class: ' + result.class);

    if(result.marks<=100 && result.marks>0)


    {

    if(result.marks>79){

    console.log('  Grade: ' + 'A');

    }
    else if (result.marks<79 && result.marks >=60){
        console.log('  Grade: ' + 'B');
    }
    else if (result.marks<60 && result.marks >=49){
        console.log('  Grade: ' + 'C');
    }
    else if (result.marks<49 && result.marks >=40){
        console.log('  Grade: ' + 'D');
    }
    else if (result.marks<40 && result.marks >=59){
        console.log('  Grade: ' + 'E');
    }
}
    else{
        console.log('Entry Not Allowed');
    }


    
    
    });

    function onErr(err) {
        console.log(err);
        return 1;
    }





