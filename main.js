//variables 
const megalatorScreen = document.querySelector('[data-calculator="screen"]');
const equalButton = document.querySelector('[data-special-operator="equal"]'); // additional tasks
const clearAllButton = document.querySelector('[data-special-operator="clear-all"]'); //CA button
const miniScreen = document.querySelector('p.small-screen'); //last calculation, later mb push this into history?
const backspace = document.querySelector('[data-special-operator="backspace"]');
let historyPush; // this var will store all info about last calculation and pass it into history board

//arrays
const numbers = [...document.querySelectorAll('[data-number]')];
const operatorsArr = [...document.querySelectorAll('[data-operator]')];

//objects
const userChoices = {
    num1: null,
    num2: null,
    operator: null,
    result: null,
}

//functions

//function need 3 parameters from object userChoices and publish result on screen
function publishResult(num1, num2, operator) {

    if (operator === '+') {
        result = num1 + num2;
        return userChoices.result = result;
    } else if (operator === '-') {
        result = num1 - num2;
        return userChoices.result = result;
    } else if (operator === '*') {
        result = num1 * num2;
        return userChoices.result = result;
    } else if (operator === '/') {
        result = num1 / num2;
        return userChoices.result = result;
    }

};

//function wich push value of historyPush into history-list by create child element 
function historyPull() {
    const historyBoard = document.querySelector('[data-calculator="history-list"]');
    const lastCalculaton = document.createElement('ul');
    lastCalculaton.classList.add('history-container');
    lastCalculaton.textContent = historyPush;
    historyBoard.appendChild(lastCalculaton);

};
//event listeners

//listen every number value and parse it into integer then pass into object userChoices
numbers.forEach(number => {
    number.addEventListener('click', function () {

        //num1
        if (!userChoices.operator) {
            let num1op = this.dataset.number;
            megalatorScreen.textContent = megalatorScreen.textContent + num1op;
            userChoices.num1 = parseInt(megalatorScreen.textContent);
        }
        //num2 active when user choose operator and after 'equal' click
        if (userChoices.num1 && userChoices.operator) {
            let num2op = this.dataset.number;
            megalatorScreen.textContent = megalatorScreen.textContent + num2op;
            userChoices.num2 = parseInt(megalatorScreen.textContent);
        }
    });

});

//after click 'CA' clear whole screen without history
clearAllButton.addEventListener('click', function () {
    megalatorScreen.textContent = '';
    //can i use loop with iteration on object?
    userChoices.num1 = null;
    userChoices.num2 = null;
    userChoices.operator = null;
    userChoices.result = null;

});

//after click '=' check 3 values in object userChoice are true, if yes call function and publish result
equalButton.addEventListener('click', function () {

    if (userChoices.num1 && userChoices.num2 && userChoices.operator) {


        publishResult(userChoices.num1, userChoices.num2, userChoices.operator);
        megalatorScreen.textContent = userChoices.result;
        //assign whole calculation in variable because ill push it after into history screen
        historyPush = `${userChoices.num1} ${userChoices.operator} ${userChoices.num2} = ${userChoices.result}`;
        miniScreen.textContent = historyPush;
        historyPull();
    }
});

//every basic operator like '+ - / *' clear screen and pass decision in object userChouices
operatorsArr.forEach(operator => {
    operator.addEventListener('click', function () {
        megalatorScreen.textContent = '';
        userChoices.operator = this.dataset.operator;
    })
});

//backspace event
backspace.addEventListener('click', function () {
    let screenView = megalatorScreen.textContent;
    let result = screenView.slice(0, -1);
    console.log('backspace working')
    return result;
});

// spróbować jutro zrobic iteracje obiektu jesli sie da, oraz historyPush zmienic w string i przekazac do history w postaic UL moze i append Child?