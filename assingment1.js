console.log("hello wold")



// Q 1---------.Add twoNumbers-------
//You are provided with two numbers A and B. Your task is to add these two numbers.
//Note: You have to complete AddTwoNumbers function. No need to take any input.
//Input Format 
//The first line contains two integers A and B.
//Output Format = Return the result after adding two numbers.
//Constraints 
//1≤A, B≤5001≤, ≤500
//Example 
//Sample Input 
//2 5
//Sample Output 
//7
// function add(a,b){
// var a,b ;

// var c = a+b;
// console.log(c);
// }
// add(2,5)
//----------------------------------------


//Q2. Find if the conditions are obeyed or not? 
//You are given two number first as A� and second as B� and check if both conditions 
//(A<10�<10 and A>B�>�) are satisfied or not with the help of operators.
//Note: You have to complete Is_Valid function. No need to take any input.
//Input Format 
//The first line contains two integers A�and B�.
//Output Format 
// Return the result as true if the given condition gets satisfied, else false.
// Constraints 
// 1≤A,B≤5001≤�,�≤500
// Example 
// Sample Input 
// 5 3
// Sample Output

// function valid(a,b){

// var a, b;
// if(a<10&&a>b){
// console.log("satisfied");
// } else {

// console.log("unsatisfied");
// }
// }
// valid(5,3)




//---------------------------------------------------------------------

// Q3.Check the conditions 
// You are given two numbers A�and B�. You need to do the following checks:
// 1. if both are divisible by 10 console true.
// 2. if both are not divisible by 10 console false.
// 3. if one of them only is divisible by 10 console true.
// Use operator to do this.
// Note: You have to complete Check function. No need to take any input.
// Input Format 
// The first line contains two natural numbers A�and B�.
// Output Format 
// Return the required result.
// Constraints 
// 1≤A,B≤100001≤�,�≤10000
// Example 
// Sample Input 
// 12 20
// Sample Output 
// true


// function check(a,b){
//     if(a % 10 == 0 && b % 10 == 0){
//         console.log(true)
//     }else if(a % 10 != 0 && b % 10 != 0){
//         console .log(false)
//     }else{
//         console.log(true)
//     }
// }

// check(10,70);


//----------------------------------------


// Q4.Find the first digit of a 4 digit number 
// You are provided a four digit number N only. Your task is to print out the first digit of that 
// number.
// Note: You have to complete First_Digit function. No need to take any input.
// Input Format 
// The first line contains one four digit natural number N�.
// Output Format 
// Return the required result.
// Constraints 
// 1000≤N≤99991000≤�≤9999
// Example 
// Sample Input 
// 4567
// Sample Output 
// 4

//----------------------------------

// function firstDigit(abcd){
//    let a=abcd;
//    let res=a/1000;
//    console.log(Math.floor(res)); 

// }

// firstDigit(6567)

//------------------------------

// Q5.Find the last digit of a 4 digit number 
// You are provided a four digit number N only. Your task is to print out the last digit of that 
// number.
// Note: You have to complete Last_Digit function. No need to take any input.
// Input Format 
// The first line contains one four digit natural number N�.
// Output Format 
// Return the required result.
// Constraints 
// 1000≤N≤99991000≤�≤9999
// Example 
// Sample Input 
// 4567
// Sample Output 
// 7


// function lastDigit(abcd){
//    let a=abcd;
//    let res=a%10;
//    console.log(Math.floor(res)); 

// }

// lastDigit(6568)

//------------------------------------------

// Q6.Find the remainder 
// You are provided with two numbers A�and B�where A�as divisor and B�as dividend.Your 
// task is find the remainder.
// Note: You have to complete Find_the_remainder function. No need to take any input.
// Input Format 
// The first line of the input contains two integers A�and B�.
// Output Format 
// Return the result after finding the remainder.
// Constraints 
// 1≤A,B≤10001≤�,�≤1000
// Example 
// Sample Input 
// 2 9
// Sample Output 
// 1


// function remainder(a,b){

//     var a,b;
//     var c = a %b;
//     console.log(c)
// }

// remainder(19,2)

//------------------------------------------


// Q7.Multiply two Numbers 
// You are provided with two numbers A�and B�. Your task is to multiply these two numbers.
// Note: You have to complete Multiply_two_number function. No need to take any input.
// Input Format 
// The first line contains two integers A�and B�.
// Output Format 
// Return the result after multiplying two numbers.
// Constraints 
// 1≤A,B≤301≤�,�≤30
// Example 
// Sample Input 
// 2 5
// Sample Output 
// 10

// function multiply(a,b,c){
// var a;
// var b;
// var c=a*b
// console.log(c)
// }

// multiply(2,5)



//----------------------------------------

// Q8. Marks Calculator 
// Shyam has got his marks in three subjects as A�, B�, and C�(out of 100).Write a program to 
// calculate his total marks and his average.
// Note: You have to complete Sum and Average functions. No need to take any input.
// Input Format 
// The input contains three numbers A�, B�and C�.
// Output Format 
// Return the required result.
// Constraints 
// 0≤A,B,C≤1000≤�,�,�≤100
// Example 
// Sample Input 
// 50 20 100
// Sample Output 
// 170 56.67

// function sum( a,b,c,d){
// var a;
// var b;
// var c;
// var d=a+b+c;
// console.log(d);
    
// }
// sum(50,20,100)

// function average(e,d,){
// var e=d/3;
// sum.d
// console.log(e);
// }
// average(3)
