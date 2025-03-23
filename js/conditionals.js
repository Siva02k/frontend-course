// conditionals is used in decision making
// they are four type

// -if condition
// -if else
// -if else if
// -nested if

// statement (looks only the true part)

if (100 == 100) {
    console.log("both are equal");   
}
let A=10000;
let B=2000;
if (A>B) {
    console.log("A is greater");
}
if (B>A) {
    console.log("B is greater");    
}

let userAge = 22
if (userAge < 18) {
    console.log("ur not eligiable for DL");
}
if (userAge > 18) {
    console.log("ur eligiable for DL");
}

// if else (looks true and false part)

if(false){
    console.log("go within the page");
}else{
    console.log("not found");
}

let username=true
if (username) {
    console.log("go to page");   
}else{
    console.log("username is notdefine");
}

let age=20
if (age>18) {
    console.log("you are eligable");
}else{
    console.log("you are not eligable");
}


let red=true
if (red) {
    console.log("it's a red");
}else{
    console.log("it's yellow");
    
}

let colour = 'yellow'

if (colour == "red") {
    console.log("it's a red");
}else{
    console.log("it's yellow");
}

let name = "bharath"

if (name == "bharath") {
    console.log("it's a bharath");
}else{
    console.log("it's not a bharath");
}

let name1= ["bharath","siva","gokul","naveen","john","joe","petter","kannan",]

for (let index = 0; index < name1.length; index++) {
    console.log(name1.at(index));
}
let num1=1000;
let num2=200;

if (num1>num2) {
    console.log("its a true");
}else{
    console.log("its a false");
}


let order1='400pic'
let order2='200pic'
let order3='400pic'
if (order2 == order1) {
    console.log("its equal");
}else{
    console.log("its not equal");
}


let fruitBaskt = ["mango","bananna","apple","orange","pappaya","graphs","watermelo","dragan friut",]
let fruitName = "kivi"
if (fruitBaskt.includes(fruitName)) {
    console.log('its present');
}else{
    console.log('its not present');
}

let cars = ["ignis", "grand vitara", "xl6", "baleno", "ciaz", "fronx", "jimny"]
let carname = 'ciaz'
if (cars.includes(carname)) {
    console.log('the car is verfiy');
}else{
    console.log('the car is not verfiy ');
}

let carInfo = {
    name : "ciaz", 
    model: 123

}

let num3=40
let num4=40
console.log(num3>num4);

 if (num3>num4) {
    console.log("num3 is greater");
 }
 else{
    console.log("num4 is greater");
    
 }


let Username="kumar"
if (Username=="shiva") {
    console.log("hello shiva");
}
else if(Username=="ajith"){
    console.log("hello ajith");
}
else if(Username=="bharath"){
    console.log("hello bharath");
}
else if( Username=="kevin"){
    console.log("helllo kevin");
}
else{
    console.log("user not found");
}


let value=-100;
if (value<0) {
    console.log("nagative number");
}
else{console.log("positive number");} 


let english=82
let tamil=82
let maths=82
let science=82
let social=82
let avarage=(english+tamil+maths+science+social)/5
console.log(avarage);
if (avarage>90){
    console.log("A grade");
}
else if(avarage>80){
    console.log("B grade");
}

let input=301
if (input/2==0) {
    
}

