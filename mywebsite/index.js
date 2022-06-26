let fruits =["apple", "orange","banana"]
fruits.push("greipfruit")
fruits.push("durian")
fruits.pop()
fruits.unshift("mango")
console.log(fruits);
let indexF=fruits.indexOf("apple")



// document.getElementById("submitButton").onclick = function(){
//     let temp;
//     if(document.getElementById("cButton").checked){
//         temp=document.getElementById("textBox").value 
//         temp=Number(temp)
//         temp=toCelsius(temp)
//         document.getElementById("tempLabel").innerHTML =temp+"°C "

//     }else if(document.getElementById("fButton").checked){
//         temp=document.getElementById("textBox").value 
//         temp=Number(temp)
//         temp=toFahrenheit(temp)
//         document.getElementById("tempLabel").innerHTML =temp+"°F "
//     }else{
//         document.getElementById("tempLabel").innerHTML = "You don't choose the unit to convert!!!"
//     }
// }

// let temp = 32; //in Fahrenheit
// temp = toCelsius(temp);
   // console.log(temp)


// function toCelsius(temp){
//     return Math.floor((temp-32)*(5/9));
// }
// function toFahrenheit(temp){
//     return Math.floor(temp*(9/5)+35);
// }


// const answer=Math.floor(Math.random()*10+1);
// let guesses = 0;

// document.getElementById("submitButton").onclick =function(){
//     let guess = document.getElementById("guessField").value
//     guesses+1;

//     if(guess == answer){
//         alert(`${answer} is the #.It took you ${guesses} guesses`)
//     }
//     else if(guess<answer){
//         alert("To small")
//     }else{
//         alert("To big")
//     }
// }


// let myNum =123456.789;

// myNum = myNum.toLocaleString("en-US",{style:"currency",currency:"USD"});
// //myNum = myNum.toLocaleString("hi-IN");
// console.log(myNum);


// let userName = "Bro";
// let item =3;
// let total =75;

// let text = `Hello my friend ${userName} 
// How many books have you read this week? about ${item}`
// document.getElementById("myLabel").innerHTML=text

// let adult = checkAge(12);
// console.log(adult);

// function checkAge(age){
//     return age>=18?true:false;
// }




// let area;
// let width;
// let height;

// width = window.prompt("Enter width");
// height = window.prompt("Enter height");

// area =getArea(width,height); 
// console.log("This is area",area)
// function getArea(width, height){
//     let result=width*height;
//     return result;
// }


// progFunc();

// function progFunc(){
//     let name ="Timur";
//     let time =2;
//     myCall(name, time);
// }

// function myCall(Name, time){
//     console.log("My name is", Name, " and I am billioner")
//     console.log("We spoke (min)",time)
// }


// let rows = window.prompt('Enter # of rows');
// let columns = window.prompt('Enter # of columns')
//  for(let i=1;i<=rows;i+=1){
//     for(let j = 1; j<=columns;j+=1){
//         document.getElementById("myRectangle").innerHTML+= j
//     }
//     document.getElementById("myRectangle").innerHTML += "<br>"
//  }


// for(let i=0; i<=21;i++){
//     if (i==13){
//         break;
//     }
//     console.log(i)
// }

// let userName;

// do{
//     userName=window.prompt("Enter your name");
// }while(userName=="");
// console.log("Hello", userName);


// let temp =15;
// let sunny=true;
// if(!(temp>0)){
//     console.log('The weather is warm');
// }else if(sunny && temp>0){
//     console.log("The weather is good and sunny")
// }
// else{
//     console.log("It's cold outside!")
// }



// let grade = "H"

// switch(grade){
//     case "A":
//         console.log("You did great!")
//         break;
//     case "B":
//         console.log("You did my Day!")
//         break;
//     case "C":
//         console.log("You my C type!")
//         break;
//     default:
//         console.log("I found my letter by myself!")

// }



// document.getElementById("myButton").onclick = function(){
//     const visaBtn = document.getElementById("visaBtn");
//     const masterBtn = document.getElementById("MCardBtn");
//     const paypalBtn = document.getElementById("paypalBtn");

//     if(document.getElementById("myCheckBox").checked){
//         console.log("I agree to being subscribed!");
//     }
//     else if(visaBtn.checked){
//         console.log("I use Visa card")
//     }else if(masterBtn.checked){
//         console.log("I use MasterCard card")
//     }else if(paypalBtn.checked){
//         console.log("I use PayPal")
//     }
//     else{console.log("You must select pyment system")}
// }


// let age = 0;
//  if (age > 18){
//     console.log("I am adult!")
//  }else if(age==0 || age<0){
//     console.log("I haven't been born")
//  } else{
    
//         console.log("I am child!")
     
//  }

// let userName = "bro";

// let letter = userName.charAt(0).trim();
// letter = letter.toUpperCase();

// console.log(letter);

// let userName = " Timur "
// let phoneNumber = "8707-862-92-74"
// console.log(userName.length)
// console.log(userName.charAt(2))
// console.log(userName.indexOf("r"))
// console.log(userName.trim())
// console.log(userName.toUpperCase())
// phoneNumber=phoneNumber.replaceAll("-","/")
// console.log(phoneNumber)

// let x ;

// let y;

// let z; 

// document.getElementById("rollButton").onclick=function(){
//     x = Math.floor(Math.random()*6)+1;
//     y = Math.floor(Math.random()*6)+1;
//     z = Math.floor(Math.random()*6)+1;
//     document.getElementById("xlabel").innerHTML = x;
//     document.getElementById("ylabel").innerHTML = y;
//     document.getElementById("zlabel").innerHTML = z;
// }

// let count =0;

// document.getElementById("decreaseBtn").onclick = function(){
// count -=1;
// document.getElementById("countLabel").innerHTML = count;
// }

// document.getElementById("resetBtn").onclick = function(){
//     count=0;
// document.getElementById("countLabel").innerHTML = count;
// }

// document.getElementById("increaseBtn").onclick = function(){
//     count +=1;
// document.getElementById("countLabel").innerHTML = count;
// }

// let a;
// let b;
// let c;

// document.getElementById("submitButton").onclick=myName

// function myName(){
//     a = document.getElementById("aText").value
//     a = Number(a)
//     b = document.getElementById("bText").value
//     b = Number(b)
//     c=Math.pow(a,2)+Math.pow(b,2)
//     c=Math.round(Math.sqrt(c))
//     document.getElementById("cLabel").innerHTML="hypotenuse C: " +c
// }
// a = window.prompt('Enter A value:')
// a = Number(a)
// b = window.prompt('Enter B value:')
// b = Number(b)
// c=Math.pow(a,2)+Math.pow(b,2)
// c=Math.sqrt(c)
// console.log('hypotenuse:',c)


// let x=2
// let y=-11
// let z=3.12;
// let maxVal;
// let minVal;

// maxVal=Math.max(x,y,z)
// minVal=Math.min(x,y,z)
// console.log(minVal)


// let x=4;

// x2=Math.pow(x,2)
// x2=Math.sqrt(x2)
// // x2=Math.ceil(x)
// // x1=Math.floor(x)
// // x = Math.round(x);
// console.log(x);
// console.log(x2);



// const PI = 3.14159;
// let radius;
// let circumference;
// radius = window.prompt('Enter the radius of curcle:')
// radius = Number(radius);
// circumference=2*PI*radius;
// console.log("The circumference is:",circumference)




// let x
// let y
// let z
// x = Number("123");
// y = String(3.14)
// z = Boolean("broo")
// console.log(x, typeof x)
// console.log(y, typeof y)
// console.log(z, typeof z)



// let age =window.prompt("How old are you?")
// age=Number(age)
// age +=1
// console.log("My age is equal "+age)






// let username;

// document.getElementById("myButton").onclick = myName

// function myName(){
//     username = document.getElementById("myText").value;
//     //console.log(username)
//     document.getElementById("myLabel").innerHTML=username;
// }
// let username = prompt("What's your name?")
// console.log(username)





// let students =20;
// students = students+1;
// students=students/3;
// students=students*2;
// console.log(students)
// console.log(students%3)
// //argumented assignment operator
// students +=2;
// console.log(students)




// let age;
// age = 21;
// let myAge = 30
// myAge = myAge+1
// let firstName = "Bro";
// let student = false;
// console.log(myAge) 
// console.log(age);
// console.log(firstName)
// document.getElementById("p1").innerHTML="Hello "+firstName;
// document.getElementById("p2").innerHTML="My age "+age+" years old!";
// document.getElementById("p3").innerHTML="You are student: "+student;


// console.log('I like pizza!')
// console.log("My beloved burger")
// window.alert("I really love pizza!!!")