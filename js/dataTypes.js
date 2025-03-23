/*

//   Data Types

number
string
boolean
object
Array
null 
undefined

*/

// number
 age=28
 phoneNo = 123456788
 pincode = 629001


 height=5.7
 weight=76

 console.log(phoneNo);
 console.log(typeof(phoneNo));
 console.log(typeof(height));

//  strings
fname="bharath"
lname="world"
password="123@Abc"
rollNo="4"
console.log(typeof(password))

// boolean

isvaildPhoneNo=true
isActive=false
console.log(isvaildPhoneNo)
console.log(typeof(isvaildPhoneNo))

// null
let frstName = null;
console.log("frstName", frstName);
let orcode =null;
console.log("orcode",orcode)

// undefine
let zipcode;
console.log("height", zipcode);
let inline;
console.log("inline",inline)

// Arrays

let vegetables = ["Tomato", "potato", "Carrot", "brinjal"];
let vegWeight = [10, 2, 5, 7];
console.log(vegetables);

// objects

let userInfo = {
    name: "Barath",
    age: 22,
    place: "ngl", 
    zipCode: 629003
}
console.log(userInfo);

let myInfo ={
    Name:"bharath",
    age:20,
    Add:"ganeshsapuaram",
    place:"nagercoil",
    pincode:629001,

}
// creating empty object
let carInfo={}
carInfo ["carName"]="fronx";
carInfo ["carrate"]=160000;
carInfo["modelname"]="clm";
carInfo["fuletype"]="petrol";
carInfo["carmailage"]=15;
carInfo["frontwheelair"]=40;
carInfo["backwheelair"]=35;
carInfo["cardisplayrate"]=3000;
carInfo["carspeakeraddictional"]=2500;
carInfo["cartype"]="hybred";
// updating properties of an object
carInfo.carrate=165999;
// deleting properties of an object
delete carInfo.carspeakeraddictional

console.log(carInfo)
// methods in array
// .push()
let booksnames=[]
// add items to array
booksnames.push("tamil")
booksnames.push("english")
booksnames.push("maths")
booksnames.push("science")
booksnames.push("social science")
console.log(booksnames,"booksnames")


// emty object

let protinefoods={}
protinefoods["paneer"]="23g"
protinefoods["choyachankan"]="25g"
protinefoods["peanut"]="26g"
protinefoods[""]="2025"
console.log(protinefoods)

// add to arry

let animalnames=[]

animalnames.push("lion")
animalnames.push("tiger")
animalnames.push("leopard")
animalnames.push("elepant")
animalnames.push("elepant")
animalnames.push("elepant")
animalnames.push("elepant")
animalnames.push("elepant")
animalnames.push("elepant")
console.log(animalnames.length)
console.log(animalnames.at(1))

let nums = []
nums.push(10);
nums.push(20)
nums.push(30)
nums.push(40)
console.log(nums);

console.log(nums.at(2));
console.log(nums.at(0));

nums.pop();
console.log(nums);

console.log(nums.length);

let carDetail = {
    name: "swift",
    modal: 2014,
    color: "red",
    varient: "petrol"
}

console.log(typeof carDetail);
console.log(carDetail);
console.log(carDetail.name);
carDetail['milage'] = 24

carDetail.color = "blue"

delete carDetail.varient
console.log(carDetail);

let classstudentA ={}
classstudentA.name="siva"
classstudentA.class=10
classstudentA.section="a"
classstudentA.totalmark=95

console.log(classstudentA)

let classstudentB={}
classstudentB.name="john"
classstudentB.class=10
classstudentB.section="a"
classstudentB.totalmark=90

console.log(classstudentB)

let classstudentC={}
classstudentC.name="kumar"
classstudentC.class=10
classstudentC.section="a"
classstudentC.totalmark=98

console.log(classstudentC)

let students= []
students.push(classstudentA)
students.push(classstudentB)
students.push(classstudentC)
console.log(typeof students)
console.log(students)
console.log(students.length)
console.log(students.at(1));


let arr1 = [1,2,3]
let arr2 = [10,20,30]
console.log(arr1)
console.log(arr2)

// join 2 or more arrays
console.log(arr1.concat(arr2));

// 
console.log(arr1.includes(1));
console.log(arr1.includes(3));
console.log(arr1.includes(20));
console.log([1,2,3,4,5,6,7,8,9,10].slice(3, 6));

let arr3 = [1,2,3,4,5,6,7,8,9,10]
console.log(arr3.slice(4,9));


