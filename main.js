let megalatorScreen = document.querySelector('[data-calculator="screen"]');

const numbers = [...document.querySelectorAll('[data-number]')];

let num1;
let num2;

numbers.forEach(number => {
    number.addEventListener('click', function () {
        let num = parseInt(this.dataset.number);
        console.log(num);
        num1 = megalatorScreen.textContent = megalatorScreen.textContent + num;

    });
});

console.log(11111 + 22222);