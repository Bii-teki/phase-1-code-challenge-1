const prompt = require('prompt');
// invokes the prompt module
prompt.start();

prompt.get(['name', 'class', 'marks'],
// returns values of name, class and marks from command line



// grade function implements if-else statement to evaluate the grade of a student 
//based on the marks entered via command line.
// after the condition has been met it will display both the student's details and the grade

function grade (shoot, result) 
{
    //it will display an error 
    if (shoot) 
    
    { return errorDisplay(shoot);
 }
 
//it checks through the if statement for the condition the value entered meets
// then displays the grade inside it

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


    function errorDisplay(shoot) {
        console.log(shoot);
        return 1;
    }





