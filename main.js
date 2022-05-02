//vars
let megalatorScreen = document.querySelector('[data-calculator="screen"]');
const numbers = [...document.querySelectorAll('[data-number]')];


//download all buttons into array then put them in one object
const operatorsArr = [...document.querySelectorAll('[data-operator]')];
const operatorsButtons = {
    percent: operatorsArr[0],
    clearAnEntry: operatorsArr[1],
    clear: operatorsArr[2],
    backspace: operatorsArr[3],
    reverse: operatorsArr[4],
    power: operatorsArr[5],
    square: operatorsArr[6],
    divide: operatorsArr[7],
    multiply: operatorsArr[8],
    substract: operatorsArr[9],
    add: operatorsArr[10],
    equals: operatorsArr[11],
    commoa: operatorsArr[12],
    negation: operatorsArr[13]

};

//test 
// const add = document.querySelector('[data-operator="add"]');
// const clear = document.querySelector()
// const history = [num1, num2, result];
testBoolean = false;
//global events


let num1;
let num2;

numbers.forEach(number => {
    number.addEventListener('click', function () {
        let num = parseInt(this.dataset.number);
        console.log(num);

        num1 = megalatorScreen.textContent = megalatorScreen.textContent + num;

    });

});

// add.addEventListener('click', function () {
//     console.log("add is working properly");
//     megalatorScreen.textContent = '';
//     //musi num 1 wskoczyc w dodatowy span w screenie na dol 
//     console.log(num1)
// })

operatorsButtons.clear.addEventListener('click', function () {
    megalatorScreen.textContent = '';
})