var phone = function(){
    console.log("hiii")
}

phone()

var ph = ()=>{
    console.log("hello")
}

ph()

// Task

function add(a,b)
{
    console.log(a+b)

}
add(10,20)

// change this to arrow function

let addition=(a,b)=>{
    console.log(a+b)
}
addition(30,40)

// `we can write in many lines.. it does not show any error`

// template literals- ${}
var name = "raja"
console.log(`My name is :${name}`)

// destructing 

// Array Destructing
var [b,c,d]=[10,20,30]
console.log(b)
console.log(c)
console.log(d)

// object Destructing

var person={
    name:"Raja",
    age:12
}

// Same should be used 
var {name}=person   


console.log(name)

// Rest operator in function laa (...)

function addd(a,b,...c){
    console.log(c)
    console.log(a+b)

}

addd(10,20,30,40,50)

// Spread operator

var num1=[10,20,30]

var num2=[...num1,40,50]

console.log(num2)


// Default parameter 

function adds(a,b,c=5){
    console.log(a+b-c)
}

adds(10,20)


// Class name start with capital

class Student {
name=""
mark=0
constructor(name,mark){
    this.name=name
    this.mark=mark
}
studentDetails(){
    console.log("Name is : "+ this.name)
    console.log("Mark is : "+this.mark)
}
}

var mani=new Student ("Mani",88)


mani.studentDetails()


// var siva= new Student()
// siva.name="Siva"
// siva.mark=89

// siva.studentDetails()


