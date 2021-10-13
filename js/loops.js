//for loop
let ageLimit = 18;
//for(let num=0; num < age; num++) {
//    console.log("You are still a minor.", num)
//}

//while loop
let myAge = 1;
while (myAge < ageLimit) {
    console.log("Am young to drink or drive", myAge)
    myAge +=1
}

let age = 1
while (age < myAge) {
    console.log("New year new me!")
    age +=1  //an increment on the loop
    if (age ==6) break;  //break means to exit
}


age =1

do {
   console.log("hi");
}

while (age ==1)  //will cause an infinite loop


//age =1

//do {
//    console.log("hi");
//    age+=1
//}

//while (age ==1) //will not cause an infinite loop


