//---------------------------------- 1
// Задайте правильные ts типы, для классических js;
let age: number;
let username: string;
let toggle: boolean;
let empty: null;
let notInitialize: undefined;
let callback: (a: number) => number //function

 age = 50; 
 username = 'Max'; 
 toggle = true;  
 empty = null; 
 notInitialize = undefined; 
 callback = (a) => { return 100 + a }; 
//----------------------------------

//---------------------------------- 2
// Задавайте тип для переменной в которую можно сохранить любое значение.
let anything: any;
anything = -20;
anything = 'Text';
anything = {};
//----------------------------------

//---------------------------------- 3
// Исправьте код с переменной unknown, чтобы в него можно было сохранить переменную с текстом.
let some:unknown;
some = 'Text';

let str: string;

if (typeof some === 'string') {
  str = some;
}
//----------------------------------

//---------------------------------- 4
// Сделайте неизменяемый массив со строго описанными типами. Массив для примера.

let person: [string, number];
person = ['Max', 21];
//----------------------------------

//---------------------------------- 5
// Опишите enum условие следующее, он должен отображать статус загрузки. Загружается (LOADING) и загружена (READY).
enum Status { LOADING, READY };

const data = {
    load: Status.LOADING
}

if (data.load === Status.LOADING) {
  console.log('Loading...');
}
if (data.load === Status.READY) {
  console.log('Loaded.');
}

//----------------------------------

//---------------------------------- 6
// Сделайте переменную, которая может принимать или строку или число.
let union: string | number;
union = 313;
union = "dsad";
//----------------------------------

//---------------------------------- 7
// Сделайте переменную, которая может принимать только одно значение из двух 'enable' или 'disable'
let literal: 'enable' | 'disable';
literal = 'enable';
literal = 'disable';
//----------------------------------

//---------------------------------- 8
// Укажите типы для следующих функций



function showMessage(message: string):void {
  console.log(message);
}


function calc(num1:number, num2:number):number {
  return num1 + num2;
}

function customError():never {
  throw new Error('Error');
}
//----------------------------------

//---------------------------------- 9
// Создайте свой тип данных на основе имеющихся данных.

type Pages = {
    title: string;
    likes: number;
    accounts: string[];
    status: 'open' | 'close';
    details?: {
        createAt: string,
        updateAt: string
    }
}

const page1: Pages= {
  title: 'The awesome page',
  likes: 100,
  accounts: ['Max', 'Anton', 'Nikita'],
  status: 'open',
  details: {
    createAt: '2021-01-01',
    updateAt: '2021-05-01',
  }
}

const page2: Pages= {
  title: 'Python or Js',
  likes: 5,
  accounts: ['Alex'],
  status: 'close',
}
//----------------------------------
