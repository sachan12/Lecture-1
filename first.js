// Lecture-01 Variables and Datatypes 
// Only console.log or alerts pratices
console.log("Welcome to Apna College!");
console.log("Sachan Khemchand");
console.log("I love JavaScript");
// Only Variables Pratices (Ham Hamesha Camel Variables use karte hain)  
fullName ="Sachan Nanda"
age= "18 years"
price = 100000
x="null";
y="undefined";
console.log(fullName);
console.log(age);
console.log(price);
console.log(x);
console.log(y);
// Only Variables Pratices Bollen types
isFollow="False";
console.log(isFollow);
isFollow="True";
console.log(isFollow);
// let , const , var (Ye ham 3 variable use karte hain max ham let or const use krte hain)
// Const ki value kabhi ham change nahi kar sakhte (Const means FIX) JAISE Ham let and var ki karte hain
 var fullName = "saith Sachan";
console.log (fullName)
// let fullName = "saith Sachan"
//  console.log (fullName) ;
var a ;
console.log(a);
// let and const is block scope variable block means in curly brackets
{
    let a = "25"
   
    console.log(a);
}
//    Agr Curly brackets mai ham value change karien toon us mai error ahe ga us kee liye alag curly wala block banana parega
//
 {
    let a = "80"
    console.log(a);
}
// Data types in JS Number,String,Boolean,undefined,Null,Bigint,Symbol 
//  Data types are two types Primitive and non-primitive
//  Primitive are fixed data types and there are 7 
            // &&&&&&
//  Non-primitive data types they are objects and Objects mai Categories hoti hain arrays,functions ;
// Objects ko abhi keee liye ham samjhien it is a collections of values ;
// Objects mai ham key:value pair store hote hain ;
//  For exp {
//     age : 18
//     name:sachan
//  }
            //   &&&&&&
// BigInt jihan bhi hoga us kee akhir mai n hoga 
var bill =BigInt(3000)
console.log(bill);
var kharch = Symbol(8000)
console.log=(kharch);
// For Object Example :
// Us Exp mai jo student hai woo hai Object;
// Generally ham object ko const sai declare karte hain;
var student = {
    fullName :"Sachan Nanda",
    age:18,
    cgpa:8.2,
    isPass:true
};
console.log=(student)

                    //  &&&&&&&

const $tudent = {
    fullName :"Karan Kumar",
    age:13 ,
    marks:650,
    isPass:true
};
// Agr kuch change karna to yee hai us ka example
$tudent ["age"] = $tudent ["age"] +1
$tudent ["fullName"] = "Dewan Karan";
console.log=($tudent)
 
// let ki ham value ko update kar sakhte hain;
// const ki value ko ham update nhi kar sakhte 
// const object ki key mai update kar sakhte hain ;





