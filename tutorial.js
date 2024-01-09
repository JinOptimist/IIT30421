// var let const

let name = 'Ivan';
let age = 10 + 5;
let percent = .5;
let isAdult = age >= 18;

let conidtion1 = true;
let conidtion2 = false;
let conidtion3 = !conidtion1;//false
let conidtion4 = conidtion2 && conidtion3;//false
let conidtion5 = conidtion3 || conidtion4;//false
let conidtion6 = age > 18 || name == 'Ivan' && conidtion2 == conidtion3;

age = age + 1;
age++;

for (let i = 0; i < 5; i++) {
    let number = i + 1;
    console.log(number + '. hi' + name);
}

// AAA
// if (BBB) true
// DDD
// CCC
// if (BBB) true
// DDD
// CCC
// if (BBB) false

while (age < 80) {
    console.log(name + ' ' + age);
    age = age + 10;
}

let user1 = {
    name: 'Ivan',
    age: 20
};
let user2 = {
    name: 'Olga',
    age: 16
};

writeUserToConsole(user1);
writeUserToConsole(user2);

console.log('*****************************');

//             0  1  2  3  4  5
let numbers = [1, 5, 2, 1, 7, 1];

let users = [];
for (let i = 0; i < 12; i++) {
    let user = generateUser();
    users.push(user);
}

console.log('********** GENERATION COMPLETE *******************');

for (let i = 0; i < users.length; i++) {
    let user = users[i];
    console.log(i);
    //writeUserToConsole(user);
    addDivWithUserInfoToBody(user);
}

function generateUser() {
    let userAge = randomInteger(10, 50);
    let name = getRandomName();
    let user = {
        name: name,
        age: userAge
    }
    return user;
}

function getRandomName() {
    //                 0        1       2        3
    let usersName = ['Olga', 'Lera', 'Smith', 'Pasha'];
    let userNumber = randomInteger(0, usersName.length - 1);
    let name = usersName[userNumber];
    return name;
}

function writeUserToConsole(someUser) {
    let helloWord;
    if (someUser.age > 18) {
        helloWord = 'Hello';
    } else {
        helloWord = 'Hi';
    }
    console.log(helloWord + ' ' + someUser.name + ' age: ' + someUser.age);
}

function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

function addDivWithUserInfoToBody(user) {
    let div = document.createElement('div');
    let arrayOfTagWithBodyName = document.getElementsByTagName('body');
    let body = arrayOfTagWithBodyName[0];

    div.innerText = user.name + ' age of user: ' + user.age;

    body.appendChild(div);
}