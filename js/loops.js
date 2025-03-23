// it is used to perform repeative tasks
// it is used to iterate(access) collection data type


//  for loop
// while loop

for (let start = 0; start < 100; start += 1) {
    console.log("wellcome", start)
}
for (let index = 100; index > 0; index--) {
    console.log(index);
}
for (let index = 10; index > 0; index--) {
    console.log(index);

}
// iterate

let videoinfo = ["cartoon", "anime", "tamilmovie", "englishmovie", "telugumovie", "kanadamovie", "aaaa", "bbbbb", "cccc"]
// console.log(videoinfo.at(0));
// let bannerMovies = videoinfo.slice(0, 4);
// console.log(bannerMovies);


// console.log("banner movies");
// for (let index = 0; index < bannerMovies.length ; index++) {
//     console.log(bannerMovies.at(index))  
// }
for (let index = videoinfo.length; index > 0; index--) {
    console.log(videoinfo.at(index));


    // }
    // console.log("other movies");

    // for (let index = 0; index < videoinfo.length ; index++) {
    //     console.log(videoinfo.at(index))  
}

let classstudentA1 = {}
classstudentA1.name = "siva"
classstudentA1.class = 10
classstudentA1.section = "a"
classstudentA1.totalmark = 95

// console.log(classstudentA)

let classstudentB1 = {}
classstudentB1.name = "john"
classstudentB1.class = 10
classstudentB1.section = "a"
classstudentB1.totalmark = 90

// console.log(classstudentB)

let classstudentC1 = {}
classstudentC1.name = "kumar"
classstudentC1.class = 10
classstudentC1.section = "a"
classstudentC1.totalmark = 98

// console.log(classstudentC)

let students = []
students.push(classstudentA1)
students.push(classstudentB1)
students.push(classstudentC1)
for (let index = 0; index <= 3; index += 1) {
    console.log(students.at(index));
}

let phone = ["redme", "poco", "realme", "iphone", "moto", "nokiya", "infinix",]
for (let index = 0; index < phone.length; index = index + 2) {
    console.log(phone.at(index));
}

let counter = 0
for (let index = 1; index <= 10; index++) {
    counter = counter + index
}
console.log(counter);

let num = 1
for (let index = 1; index <= 5; index++) {
    num = num * index

}
console.log(num);


let order = 1
for (let index = 1; index <= 12; index++) {
    order = order + index
}
console.log(order);

let Order = 2
for (let index = 0; index < 15; index++) {
    Order = Order + index;
}
console.log(Order);

let RenaultCars = ["Kwid", "kiger", "koleos", "triber", "duster", "bigster", "kardian"]
let nexacars = ["ignis", "grand vitara", "xl6", "baleno", "ciaz", "fronx", "jimny"]
let marutisuzuki = ["celerio", "dzire", "brezza", "ertiga", "wagon", "eeco"]
let hondacars = ["amaze", "city", "elevate", "wr-v", "civic", "accord"]

for (let i = 0; i < marutisuzuki.length; i++) {
    nexacars.push(marutisuzuki.at(i))

}

for (let index = 0; index < nexacars.length; index++) {
    console.log(nexacars.at(index));
}

let RenaultCarsinfo1 = {}
RenaultCarsinfo1["carname"] = "Kwid";
RenaultCarsinfo1["body style"] = "hatchback";
RenaultCarsinfo1["num of door"] = 5;
RenaultCarsinfo1["cargo volume"] = "279l"
RenaultCarsinfo1["driveline"] = "front-wheel drive"
RenaultCarsinfo1["engine cylinder"] = "stringht engine"
console.log(RenaultCarsinfo1);

let RenaultCarsinfo2 = {}
RenaultCarsinfo2["carname"] = "bmw";
RenaultCarsinfo2["body style"] = "hatchback";
RenaultCarsinfo2["num of door"] = 5;
RenaultCarsinfo2["cargo volume"] = "279l"
RenaultCarsinfo2["driveline"] = "front-wheel drive"
RenaultCarsinfo2["engine cylinder"] = "stringht engine"
console.log(RenaultCarsinfo2);

let RenaultCarsinfo3 = {}
RenaultCarsinfo3["carname"] = "aadi";
RenaultCarsinfo3["body style"] = "hatchback";
RenaultCarsinfo3["num of door"] = 5;
RenaultCarsinfo3["cargo volume"] = "279l"
RenaultCarsinfo3["driveline"] = "front-wheel drive"
RenaultCarsinfo3["engine cylinder"] = "stringht engine"
console.log(RenaultCarsinfo3);

let nexacars1 = {}
nexacars1["carname"] = "baleno";
nexacars1["body style"] = "hatchback";
nexacars1["num of door"] = 5;
nexacars1["cargo volume"] = "279l"
nexacars1["driveline"] = "rear-wheel drive"
nexacars1["engine cylinder"] = "stringht engine"
console.log(nexacars1);

let nexacars2 = {}
nexacars2["carname"] = "xl6";
nexacars2["body style"] = "hatchback";
nexacars2["num of door"] = 5;
nexacars2["cargo volume"] = "279l"
nexacars2["driveline"] = "front-wheel drive"
nexacars2["engine cylinder"] = "stringht engine"
console.log(nexacars2);

let nexacars3 = {}
nexacars3["carname"] = "igins";
nexacars3["body style"] = "hatchback";
nexacars3["num of door"] = 5;
nexacars3["cargo volume"] = "279l"
nexacars3["driveline"] = "rear-wheel drive"
nexacars3["engine cylinder"] = "stringht engine"
console.log(nexacars3);

let cars = [RenaultCarsinfo1, RenaultCarsinfo2, RenaultCarsinfo3, nexacars1, nexacars2, nexacars3]
//   console.log(cars);

for (let index = 0; index < cars.length; index++) {
    console.log("o/p", (cars).at(index));
}

console.log(nexacars3.driveline)

for (let index = 0; index < cars.length; index++) {
    console.log(index);

    console.log(cars.at(index).driveline);
}


for (let index = 0; index < cars.length; index++) {
    console.log(cars.at(index).carname);

}

let student = ["kumar", "raja", "Mani", "john", "gokul", "bharath", "vijaykumar", "saravanan", "santhosh", "keerthiraj"]
// console.log(student);
for (let index = student.length - 1; index >= 0; index--) {
    console.log(student.at(index));


}

let num1 = [1, 2, 3, 4, 5, 6, 7, 8, 100, 200, 300, 800, 900, 1000, 2000]
// for (let index = 0; index < num1.length; index++) {
//     console.log(num1.at(index));
// }
for (let i = num1.length - 1; i >= 0; i--) {
    // console.log(i);

    console.log(num1.at(i));
}

let chhotabheemvideo = ["https://youtu.be/QNYB7Tsb880?si=muFP6AB06kpKMqLI",
    "https://youtu.be/Tp5G3zrRTQ0?si=Oa24tAdSj7LWmVhk", "https://youtu.be/D-FfF-d352U?si=UCd0ZQAEUS6xcOBb", "https://youtu.be/Qx-CdtLqfH0?si=9lygnVBmRaxyJ6w1",
    "https://youtu.be/4SozUClircU?si=LTXwVBVlaB3GmphR", "https://youtu.be/I81O2a533zQ?si=gZPFtHoZ5W3eWaaO"
]

let jackiechanvideo = ["https://youtu.be/El1OrbAcBR8?si=NkvHcKnkqaifiqrC", "https://youtu.be/OpO1ExwEYhc?si=_ejFoba-CXlGcYBF", "https://youtu.be/aV6KTUVW-cI?si=YTLA1IO4YafUV-pT",
    "https://youtu.be/44tP5KDmm-0?si=xOgRAkgPmchWTWOQ", "https://youtu.be/K8X_wp8OKLQ?si=ujPdI9NW87tbrZ2A",
]

let ninjahattori = ["https://youtu.be/8sU60uvvLkA?si=iEk_BtDpETHMF0ZB", "https://youtu.be/cD7P9p4JVX8?si=gunqG0tOp18A_qwp",
    "https://youtu.be/sp7uo0FY0ks?si=myUOx8yWxRqq3vHh", "https://youtu.be/Zo8tH16UDUc?si=WhFO0P56fUBumMK1", "https://youtu.be/hESf2H2qn0A?si=BRq1mWPpixRieOvr",
    "https://youtu.be/b1PsxtZtAH0?si=UENIRL7wBtKxpNm7",
]

let injahattori1 = ["https://youtu.be/8sU60uvvLkA?si=iEk_BtDpETHMF0ZB", "https://youtu.be/cD7P9p4JVX8?si=gunqG0tOp18A_qwp"]

for (let index = 0; index < jackiechanvideo.length - 1; index++) {
    chhotabheemvideo.push(jackiechanvideo.at(index));
    chhotabheemvideo.push(ninjahattori.at(index));
    chhotabheemvideo.push(injahattori1.at(index));
}
for (let index = 0; index < chhotabheemvideo.length - 1; index++) {
    // console.log(chhotabheemvideo.at(index));
    console.log(chhotabheemvideo.at(index));
    
}

// console.log(chhotabheemvideo);
// console.log(jackiechanvideo);
// console.log(ninjahattori);






// while loop

// initialize variable
// apply condition
// write statements
// alter the initialize variable

let i = 0;
while (i < 101) {
    console.log(i);
    i++;
}

let index = 10;
while (index <= 20) {
    console.log(index);
    index++
}
let b = "helloworld";
while (b <= 20) {
    console.log("helloworld");
    index++
}



let a = 20
while (10 <= a) {
    console.log(a);
    a--
}


let orstudent = ["kumar", "raja", "Mani", "john", "gokul", "bharath", "vijaykumar", "saravanan", "santhosh", "keerthiraj"]
let c = 0;
while (c < orstudent.length) {
    console.log(orstudent.at(c));
    c++

}


let rstudent = ["kumar", "raja", "Mani", "john", "gokul", "bharath", "vijaykumar", "saravanan", "santhosh", "keerthiraj"]
let d = rstudent.length - 1;
while (d >= 0) {
    console.log(rstudent.at(d));
     d--

}

let sname = "vijaykumar"
let e=0;
while (e < sname.length) {
console.log(sname.at(e));
    e++
}

let ename="vijaykumar"
let f = 9;
while (f >= 0) {
    console.log(ename.at(f));
    f--
}


let lapname = ["hp","lenovo","dell","samsung","work"]
let g = 0;
while (g <= 3) {
    console.log(lapname.at(g));
    g++
}

