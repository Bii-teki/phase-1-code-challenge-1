
# Toy Problems

## Author 
### Geoffrey Bii

** In this repository there are solutions for the three Toy problems in Javascript **

N/B 
* solutions are purely javascript *
* you need to install prompt module for it to run *
* then invoke using require(prompt) the prompt module *

 

## First challange is student grading system

Write that prompts the user to input student marks. The input should be between 0 and 100. Then output the correct grade: 

A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.

For the solution we implement simple if-else statement to detemine the grade of a value entered via command

 

Challenge 2: Speed Detector (Toy Problem)
Write a program that takes as input the speed of a car e.g 80. If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.

For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, the function should print: “License suspended”.

 

Challenge 3: Net Salary Calculator (Toy Problem)

Project Context. In this project, you are Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits. Calculate the payee (i.e. Tax), NHIFDeductions, NSSFDeductions, gross salary, and net salary. 

we calculate paye monthly taxable pay Annual Taxable Pay Income Tax following this procedure, for taxable salary which is equal or upto 2400 we do 10%, 25% ksh 24001 - ksh 32333, 30% Above 32333, 10% up to ksh 288,000, 25% ksh 288,001 - ksh 388,000, Above ksh 388,000 Personal Relief: Ksh2,400 Per Month Personal Relief: Ksh28,800 Per Year

## Calculate NHIF 
NHIF is a medical which is available to persons 18 years and above, contribution is based on the amount of  basic salary. We have implemented this through if-else statement to calculate using this values Ksh5,999 Ksh150 Ksh6,000 – 7,999 Ksh300 Ksh8,000 – 11,999 Ksh400 Ksh12,000 – 14,999 Ksh500 Ksh15,000 – 19,999 Ksh600 Ksh20,000 – 24,999 Ksh750 Ksh25,000 – 29,999 Ksh850 Ksh30,000 – 34,999 Ksh900 Ksh35,000 – 39,999 Ksh950 Ksh40,000 – 44,999 Ksh1,000 Ksh45,000 – 49,999 Ksh1,100 Ksh50,000 – 59,999 Ksh1,200 Ksh60,000 – 69,999 Ksh1,300 Ksh70,000 – 79,999 Ksh1,400 Ksh80,000 – 89,999 Ksh1,500 Ksh90,000 – 99,999 Ksh1,600 Ksh100,000 & Above Ksh1,700 Self-Employed Ksh500


## NSSF 
According to 2014 NSSF pension act it is divided into two tiers, employer and employee contributes 6% each but an organization may opt out if there is another better alternative 
Tier	Pensionable Pay
I	Up to 6,000
II	6,001 - 18,000




NB: Use KRA, NHIF, and NSSF values provided in the link below.

https://www.aren.co.ke/payroll/taxrates.htmLinks to an external site.  

https://www.kra.go.ke/en/individual/calculate-tax/calculating-tax/payeLinks to an external site.



