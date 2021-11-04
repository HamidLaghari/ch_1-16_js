// chapter 9 to chapter 11

// 1.
//  var city = prompt("Enter your city name")

//  if(city=="karachi")
// {
//     alert("Welcome to city of light")
// }
// else if (city =="paris") {
//     alert("Welcome to city of flawors")

// } 
// else
// {
//     alert("City is not available")
// }

// 2.
// var gender = prompt("please type your gender")
// if(gender =="male")
// {
//     alert("Good Morning Sir")
// }
// else if (gender =="female") {
//     alert("Good Morning Ma’am")

// } 
// else {
//     alert("This is not a gender\nPlease input a correct value and try again")

// }

// 3.
// var color = prompt("Lets learn traffic rules\nType the color of traffic light to know its meaning")
// if(color =="red")
// {
//     alert("Must stop")
// }
// else if(color=="yellow")
// {
//     alert("Ready to move")
// }
// else if(color=="green")
// {
//     alert("Move now")
// }
// else
// {
//     alert("Invalid value")
// }

// 4.
// var fuel = prompt("PLease type your remaining fuel")
//  if(fuel=="0.25 litres" || fuel == "0.25")
//  {
//      alert("Please refill the fuel in your car")
//  }
//  else
//  {
//      alert("Don't get tension about fuel\nYou will reach your destination ")
//  }

// 5.

// a.
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }

// b.

// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// else{
//     alert("given condition for variable b is false")
// }

// c.
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// else{
//        alert("given condition 1 for variable c is false")
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// else{
//     alert("given condition  2for variable c is false")
// }
// if (++c < 14){
// alert("condition 3 is false");
// }
// else{
//     alert("given condition 3 for variable c is false")
// }
// if(c === 14){
// alert("condition 4 is true");
// }
// else{
//     alert("given condition 4 for variable c is false")
// }
//  d.
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// e.
// if (true){
//     alert("True");
//     }
//     if (false){
//     alert("False");
//     }
// f.
// if("car" < "cat"){
//     alert("car is smaller than cat");
//     }

// 6.
// var totalM =prompt("PLeease type the total marks",300,);
// var MOpt = prompt("Please type the obtained marks",100,)
// var totalMarks = parseInt(totalM)
// var markobt = parseInt(MOpt)
// var Percent = (markobt /totalMarks)*100;
// var percent = parseInt(Percent)
// document.write("Total Marks = ",totalMarks,"<br>")
// document.write("Obtained Marks = ",markobt,"<br>");
// document.write("Percentage ",percent,"% <br>")
// if (percent >= 80)
// {
//     document.write("Grade = A-one <br>Remarks = Excellent")
// }
// else if (percent >= 70)
// {
//     document.write("Grade = A <br>Remarks = Good")
// }
// else if (percent >= 70)
// {
//     document.write("Grade = B <br>Remarks = Need to improve")
// }
// else if (percent < 60)
// {
//     document.write("Grade = Fail <br>Remarks = Sorry")
// }

//      7.
// a
// var a = 9;
// var b = prompt("Welcome to the Guess Game\nYou have guess the number from 1 to number.\nIf your guess is correct you will get chance to win I Phone 12 Prom max",0)
// var c= parseInt(b)
// if(c == a)
// {
//     alert("Bingo! Your answer is correct")
// }
// b
// else if(c-1 == a)
// {
//     alert("close enough to the correct answer\nBetter luck next time")
// }

// 8.

// var a = prompt("write the nmber inorder to see it is divisible by 3 or not",0)
// var b = parseInt(a)
// if (b%3 == 0)
// {
//     alert("the number is divisible by 3")
// }
// else
// {
//     alert("sorry the number is not divisible by 3")
// }

// 9.

// var a = prompt("Enter the number to see whether it s even or odd ")
// var b = parseInt(a)
// if (b % 2 == 0) {
// alert("the number is even")
// }
// else
// {
//     alert("the number is odd")
// }

// 10.

// var a = prompt("Enter today's temperature",0)
// var b = (a)
// if(b>=40)
// {
//     alert("It is too hot outside.")
// }
// else if(b>=30)
// {
// alert("The Weather today is Normal.")
// }
// else if(b>=20)
// {
// alert("Today’s Weather is cool.")
// }
// else if(b>=10)
// {
// alert("OMG! Today’s weather is so Cool.")
// }

// 11.

// var a = prompt("Enter the first number", 0)
// var a1 = parseInt(a)
// var b = prompt("Enter the second number", 0)
// var b2 = parseInt(b)
// var c = prompt("Enter the operators\n+ , - , * , / , %")

// if (c == "+" || c == "plus" || c == "Plus") {

//     a = a1 + b2;
//     alert("Your answer is "+ a)
// }
// else if (c == "-" || c == "subtract" || c == "Subtract") {

//     a = a1 - b2;
//     alert("Your answer is "+ a)
// }
// else if (c == "*" || c == "multiply" || c == "Multiply") {

//     a = a1 * b2;
//     alert("Your answer is "+ a)
// }
// else if (c == "/" || c == "divide" || c == "division") {

//     a = a1 / b2;
//     alert("Your answer is "+ a)
// }
// else if (c == "%" || c == "modulus" || c == "Modulus") {

//     a = a1 % b2;
//     alert("Your answer is "+ a)
// }