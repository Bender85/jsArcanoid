'use strict'

var renderer = (function () {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        function (callback) {
            setTimeout(callback, 1000 / 60);
        };
})();

var engine = function () {
    console.log('Игровой цикл не инициализирован');
};

var startGame = function (game) {
    if (typeof game == 'function') {
        engine = game; // функцию game присваиваем к игровому циклу
    }
    gameLoop();
};

var setGame = function (game) {
    if (typeof game == 'function') {
        engine = game;
    }
};

var gameLoop = function () { // обработка игрового цикла
    engine();
    renderer(gameLoop);
};