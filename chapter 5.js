//  chapter 5 

// 1.
//   document.write("the sum 5 and 3 is ",5+3, "<br>");

// 2.

//  var a = 10;
//  var b = 20;
//  document.write("<br>the value of a is 10 <br>");
//  document.write("the value of b is 20 <br>");
//  document.write("a + b = ",a+b, "<br>");
//  document.write("a - b = ",a-b,"<br>");
//  document.write("a * b = ",a*b,"<br>");
//  document.write("a / b = ",a/b,"<br>");
//  document.write("a % b = ",a % b,"<br>");

// 3.
//   var ticket = prompt("The movie ticket will cost you Rs.300 per ticket how much you want",0);
//  document.write("total cost to buy movie tickets is ", ticket*300)

//  4.

// var table = prompt("Please insert the number of table you want",2);
//  document.write("The table number is ",table,"<br><br>");
// document.write(table," x 1 = ",table*1,"<br>",table," x 2 = ",table*2 ,"<br>",table," x 3 = ",table*3, "<br>" , table," x 4 = ",table*4, "<br>" ,table," x 5 = ",table*5, "<br>" ,table," x 6 = ",table*6, "<br>" ,table," x 7 = ",table*7, "<br>" ,table," x 8 = ",table*8, "<br>" ,table," x 9 = ",table*9, "<br>" ,table," x 10 = ",table*10);

// 5.
// FOR CELCIUS

//   var c = prompt("The Temperature Converter \nPlease put the Celsius value to see it in Fahrenheit");
//   document.write(c,"<sup>0</sup>C is ",((c*9/5)+32),"<sup>0</sup>F");

// FOR Fahrenheit
// var f = prompt("The Temperature Converter \nPlease put the Fahrenheit value to see it in Celsius");
// document.write(f,"<sup>0</sup>F is ",((f-32)*5/9),"<sup>0</sup>C")

// 6.
//  var item1 = 360;
//  var item2 = 500;
//  var Name = prompt("Please type your name")
//  var itemP = prompt("the price of item 1 is Rs:360 please tell us how much you want",0);
//  var item2P = prompt("the price of item 2 is Rs:500 please tell us how much you want",0);

//  document.write("<h1>Hamid super store</h1>")
//  document.write("<h3>Welcome Mr ",Name,"</h3>")
//  document.write("Price of item 1 = ",item1 , "<br>" , "ordered quantity of item 1 is ", itemP ,"<br>");
//  document.write ("Price of item 2 = ",item2 , "<br>" , "ordered quantity of item 2 is " , item2P ,"<br>")
// document.write("Your total charges are : ",(item1*itemP)+(item2*item2P),"<br>");
// document.write("Plus Rs:300 shipping charges <br><br>")
// document.write("total cost is ",((item1*itemP)+(item2*item2P)+300));

// 7.
//  var opt = prompt("please insert optained marks")
//  var total=prompt("please insert total marks");
//  document.write("optained marks are : ",opt,"<br>");
//  document.write("total marks are : ",total,"<br>")
//  document.write("your percentage is : ", ((opt/total)*100));

// 8.

// var dollar = prompt("Welcome to HK currency exchange\nPlease insert how much doller you want",0);
// var riyal = prompt("Welcome to HK currency exchange\nPlease insert how much doller you want",0);
// alert("Your total cost in PKR is "+((dollar*150)+(riyal*45))+"\nThanks for visiting us\nCome again");
// var num = prompt("input a number");
// document.write((((num+5)*10)/2));

// 9.
// var year = 2021;
// var byear = prompt("Please input you birth year");
// var Byear = parseInt(byear)
// alert("Your age is "+(year-Byear));

// 10.
// var pie = 3.142;
// var r = prompt("Welcome to The Geometrizer\nPlease type the radius of circle blow.\nWe will tell you its area and  circumference")
// var r2 = parseInt(r);
// document.write("<h1>The Geometrizer</h1><br>")
// document.write("The circumference of circle is : ", ((2*pie)*r2),"<br>");
// document.write("The area of a circle is : ",(pie*(r2*r2)));

// 11.
// var fav =prompt("Please type the name of your fav snack")
// var age =prompt("what is your current age?")
// var consume=prompt("how much you eat in a single day")
// var con = parseInt(consume)
// var age2 =parseInt(age)
// document.write("<h1>The Lifetime Supply Calculator</h1><br>");
// document.write("your favourite snack is : ",fav,"<br>")
// document.write("Your current age is : ",age2,"<br>")
// document.write("Estimated life time is 65 Year","<br>")
// document.write("Per day eating snacks : ",con,"<br>");
// document.write("You need almost ",(con*365)*(65-age2)," ",fav," to last you until the ripe old age of 65");
