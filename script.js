'use strict';

const divs = document.querySelectorAll('.general div');
const div = document.querySelector('.general');
const button = document.querySelector('button');
const arr = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], 
    [0, 3, 6], 
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
let flag = false;
for (let i = 0; i < divs.length; i++) {
        divs[i].addEventListener('click', function func () {
            if (!flag) {
                flag = true;
                divs[i].textContent = 'x';
            } else {
                flag = false;
                divs[i].textContent = 'o';
            }
            for (let k = 0; k < arr.length; k++) {
                if (divs[arr[k][0]].textContent != '' && divs[arr[k][0]].textContent === divs[arr[k][1]].textContent && divs[arr[k][0]].textContent === divs[arr[k][2]].textContent) {
                    alert('Game Over! Winner is ' + divs[arr[k][0]].textContent);
                    div.classList.add('win');
                }
            }
        divs[i].removeEventListener('click', func);
    })
}
button.addEventListener('click', function() {
    for (let elem of divs) {
        elem.textContent = '';
    }
    div.classList.remove('win');
    let flag = false;
    for (let i = 0; i < divs.length; i++) {
        divs[i].addEventListener('click', function func () {
            if (!flag) {
                flag = true;
                divs[i].textContent = 'x';
            } else {
                flag = false;
                divs[i].textContent = 'o';
            }
            for (let k = 0; k < arr.length; k++) {
                if (divs[arr[k][0]].textContent != '' && divs[arr[k][0]].textContent === divs[arr[k][1]].textContent && divs[arr[k][0]].textContent === divs[arr[k][2]].textContent) {
                    alert('Game Over! Winner is ' + divs[arr[k][0]].textContent);
                    div.classList.add('win');
                }
            }
        divs[i].removeEventListener('click', func);
    })
}
})