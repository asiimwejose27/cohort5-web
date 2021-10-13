// functions

function greetMe () {
    console.log('Hello Jose')
}

greetMe()

function greetMeDynamic(name) {
    console.log('Hello', name,'!')
}

greetMeDynamic("Momi")
greetMeDynamic("Derrick")
greetMeDynamic("Glo")
greetMeDynamic("Twiine")


function calculateMyAge(yearOfBirth) {
    let currentYear = newDate().getFullYear
    myAge = currentYear - yearOfBirth
    return myAge
}

function displayAge(name, yearOfBirth) {
    let age = calculateMyAge(yearOfBirth)
    message = "Your name is" + name + "and your age is" + age;
    console.log(message);
}

displayAge("Josephine", 1998)
displayAge()
