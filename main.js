//vars
let megalatorScreen = document.querySelector('[data-calculator="screen"]');
const numbers = [...document.querySelectorAll('[data-number]')];


//download all buttons into array then put them in one object
const operatorsArr = [...document.querySelectorAll('[data-operator]')];

const operatorsButtons = {
    percent: operatorsArr[0],
    clearAnEntry: operatorsArr[1],
    clearAll: operatorsArr[2],
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

const userChoices = {
    num1: null,
    num2: null,
    operator: null,
    result: null,
}



// let num1;
// let num2;
// let operator = '';

numbers.forEach(number => {
    number.addEventListener('click', function () {
        let num1op = this.dataset.number;
        let num2op;


        megalatorScreen.textContent = megalatorScreen.textContent + num1op;

        userChoices.num1 = parseInt(megalatorScreen.textContent);

        if (userChoices.num1 && userChoices.operator) {
            console.log('mam num1 mam operatora wchodze do num2')
            num2op = this.dataset.number;
            megalatorScreen.textContent = megalatorScreen.textContent + num2op;
            userChoices.num2 = parseInt(megalatorScreen.textContent);


        }

        // if (userChoices.operator === 'add') {
        //     console.log('aktywuje dodawanie');
        //     let num2op = this.dataset.number;
        // }

        // if (testBoolean === true) {


        //     num = parseInt(this.dataset.number);
        //     num2 = megalatorScreen.textContent = megalatorScreen.textContent + num;
        //     console.log('im here')

        // }



    });

});

// add.addEventListener('click', function () {
//     console.log("add is working properly");
//     megalatorScreen.textContent = '';
//     //musi num 1 wskoczyc w dodatowy span w screenie na dol 
//     console.log(num1)
// })

//operator button events

operatorsButtons.clearAll.addEventListener('click', function () {
    megalatorScreen.textContent = '';
})

// operatorsButtons.add.addEventListener('click', add);

//functions depends of operator

// function add(num1, num2) {

//     result = num1 + num2;
//     console.log('add working')
//     console.log(result);


//     return result;

// }

function substract(num1, num2) {
    result = num1 - num2;
    return result;
}



operatorsArr.forEach(operator => {
    operator.addEventListener('click', function () {
        megalatorScreen.textContent = '';
        testBoolean = true;
        userChoices.operator = this.dataset.operator;
        console.log(userChoices.operator)

    })
})




//operator event and function callback


//function wich need 3 arguments, num1 , num2 and operator

function publishResult(num1, num2, operator) {

    if (operator === 'add') {
        result = num1 + num2;
        return userChoices.result = result;
    }


}