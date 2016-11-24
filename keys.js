'use strict'

// обьект с свойствами кнопок клавиатуры
var keys = {
    'W': 87,
    'S': 83,
    'A': 65,
    'D': 68,
    'LEFT': 37,
    'RIGHT': 39
};

var keyDown = {}; // переменная с пстым обьектом

var setKey = function (keyCode) {
    keyDown[keyCode] = true;
};
var clearKey = function (keyCode) {
    keyDown[keyCode] = false;
};
var isKeyDown = function (keyName) {
    return keyDown[keys[keyName]] == true;
};

// функция когда нажата кнопка
window.onkeydown = function (e) {
    setKey(e.keyCode);
    // console.log(e.keyCode);
};
// функция когда отжата кнопка(очистка)
window.onkeyup = function (e) {
    clearKey(e.keyCode);
};



// функция получения кода кнопки на клавиатуре
// window.onload = function () {
//     window.onkeydown = function (e) {
//         console.log(e.keyCode);
//         // setKey(e.keyCode);
//     }
// }