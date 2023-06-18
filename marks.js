const prompt = require('prompt');
// invokes the prompt module
prompt.start();

prompt.get(['name', 'class', 'marks'],
// returns values of name, class and marks from command line




// grade function implements if-else statement to evaluate the grade of a student 
//based on the marks entered via command line.
// after the condition has been met it will display both the student's details and the grade

function grade (shoot, mark) 
{
    console.log('  Name: ' + mark.name);
    console.log('  class: ' + mark.class); 
    console.log('  Marks: ' + mark.marks);
    //it will display an error 
    if (shoot) 
    
    { return errorDisplay(shoot);
 }
 
//it checks through the if statement for the condition the value entered meets
// then displays the grade inside it

    if(mark.marks<=100 && mark.marks>0)
    {

    if(mark.marks>79){
    console.log('  Grade: ' + 'A');
    }
    else if (mark.marks<79 && mark.marks >=60){
        console.log('  Grade: ' + 'B');
    }
    else if (mark.marks<60 && mark.marks >=49){
        console.log('  Grade: ' + 'C');
    }
    else if (mark.marks<49 && mark.marks >=40){
        console.log('  Grade: ' + 'D');
    }
    else if (mark.marks<40 && mark.marks >=59){
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





