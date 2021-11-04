// chapter 14 - 16

// 1.

// var std = []

// 2.

// var std = []

// 3.

// var a = ["hamid","uzair","parwaiz","usama"];

// 4.

// var a = [1,2,3,4,5,6,7,8,9];

// 5.

// var a = [true,false]

// 6.
//  var a = [1,"a",true,2,"a",false]

// 7.
// var edu = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil", "PhD"];
// var b= edu.length

// document.write("<h1>Qualification</h1><br>");
// for(i = 0; i < b ; i++) 
// {


//         document.write(i,")",edu[i],"<br>")



// }

// 8.

// var std =["hamid","parwaiz","uzair"]
// var scr =[300,450,280];
// document.write("Score of ",std[0]," is ",scr[0],". Percentage: ",(scr[0]/500)*100,"%<br>")
// document.write("Score of ",std[1]," is ",scr[1],". Percentage: ",(scr[1]/500)*100,"%<br>")  
// document.write("Score of ",std[2]," is ",scr[2],". Percentage: ",(scr[2]/500)*100,"%")  

// 9.

// var color = ["red", "yellow", "black"]

// a.
// var add_from_beginning=prompt("Which color you want to add from beginning of array")
// color.unshift(add_from_beginning)

// b.
// var add_from_end = prompt("enter the color o add in end of array")
// color.push(add_from_end)

// c.
// var add_1_start =prompt("enter two color to add from begining ")
// var add_2_start =prompt("enter two color to add from begining ")
// color.unshift(add_1_start,add_2_start)

// d.
// color.shift()

// e.

// color.pop()

// f.
// var col = prompt("enter color name")
// var index = prompt("define index")
// var index1=parseInt(index)
// color.splice(index1,0,col)

// g.

// var index = prompt("index to delete")
// var index1=parseInt(index)
// var del = prompt("how many you want to delete")
// var del1 = parseInt(del)
// color.splice(index1,del1)

// loop for all arrays of no 9 to display change in browser
// for(i=0; i<color.length;i++)
// {
//     document.write(i," ",color[i],"<br>")
// }

// 10.

// var score = [320,220,480,120]
// document.write("Scores of students : ",score,"<br>")
// document.write("Ordered scores of students ",score.sort())

// 11.
// var city = ["karachi","lahore","islamabad","quetta","peshawer"]
// document.write("cities list:<br>",city,"<br><br>")
// var sel = city.slice(2,4);
// document.write("selected cities:<br>", sel )

// 12.

// var arr = ["this","is","my","cat"]
// document.write("<h1>Array:</h1><br>",arr)
// var arr1 = arr.join(" ")
// document.write("<h1>String</h1><br>",arr1)

// 13.

// var arr =[]

// var a1 = prompt("put the value in array")
// var a2 = prompt("put the value in array")
// var a3 = prompt("put the value in array")
// var a4 = prompt("put the value in array")
// var a5 = prompt("put the value in array")

// arr.push(a1,a2,a3,a4,a5);

// for(i=0;i<arr.length;i++)
// {
//     document.write(i," ",arr[i],"<br>")
// }

// 14.
// var arr =[]

// var a1 = prompt("put the value in array")
// var a2 = prompt("put the value in array")
// var a3 = prompt("put the value in array")
// var a4 = prompt("put the value in array")
// var a5 = prompt("put the value in array")

// arr.push(a5,a4,a3,a2,a1);

// for(i=0;i<arr.length;i++)
// {
//     document.write(i," ",arr[i],"<br>")
// }

// 15.

// var arr = ["Apple","Samsung","Motorola","Nokia","Sony","Haier"]

// document.write("<select>","<option>",arr[0],"</option>","<option>",arr[1],"</option>","<option>",arr[2],"</option>","<option>",arr[3],"</option>","<option>",arr[4],"<option>",arr[5],"</option>","<option>",arr[6],"</option>","</select>")

