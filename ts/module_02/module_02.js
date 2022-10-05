//---------------------------------- 1
// Задайте правильные ts типы, для классических js;
var age;
var username;
var toggle;
var empty;
var notInitialize;
var callback; //function
age = 50;
username = 'Max';
toggle = true;
empty = null;
notInitialize = undefined;
callback = function (a) { return 100 + a; };
//----------------------------------
//---------------------------------- 2
// Задавайте тип для переменной в которую можно сохранить любое значение.
var anything;
anything = -20;
anything = 'Text';
anything = {};
//----------------------------------
//---------------------------------- 3
// Исправьте код с переменной unknown, чтобы в него можно было сохранить переменную с текстом.
var some;
some = 'Text';
var str;
if (typeof some === 'string') {
    str = some;
}
//----------------------------------
//---------------------------------- 4
// Сделайте неизменяемый массив со строго описанными типами. Массив для примера.
var person;
person = ['Max', 21];
//----------------------------------
//---------------------------------- 5
// Опишите enum условие следующее, он должен отображать статус загрузки. Загружается (LOADING) и загружена (READY).
var Status;
(function (Status) {
    Status[Status["LOADING"] = 0] = "LOADING";
    Status[Status["READY"] = 1] = "READY";
})(Status || (Status = {}));
;
var data = {
    load: Status.LOADING
};
if (data.load === Status.LOADING) {
    console.log('Loading...');
}
if (data.load === Status.READY) {
    console.log('Loaded.');
}
//----------------------------------
//---------------------------------- 6
// Сделайте переменную, которая может принимать или строку или число.
var combine;
combine = 313;
combine = "dsad";
//----------------------------------
//---------------------------------- 7
// Сделайте переменную, которая может принимать только одно значение из двух 'enable' или 'disable'
var state;
state = 'enable';
state = 'disable';
//----------------------------------
//---------------------------------- 8
// Укажите типы для следующих функций
function showMessage(message) {
    console.log(message);
}
function calc(num1, num2) {
    return num1 + num2;
}
function customError() {
    throw new Error('Error');
}
var page1 = {
    title: 'The awesome page',
    likes: 100,
    accounts: ['Max', 'Anton', 'Nikita'],
    status: 'open',
    details: {
        createAt: '2021-01-01',
        updateAt: '2021-05-01'
    }
};
var page2 = {
    title: 'Python or Js',
    likes: 5,
    accounts: ['Alex'],
    status: 'close'
};
//----------------------------------
