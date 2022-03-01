//Задача 1
let arr = [1, 2, 6, 8, 16, 36];
let sum = arr => arr.filter(element => !(element % 2)).reduceRight((sum, element) => sum + Math.sqrt(element), 0); 
console.log('Задача 1:')
console.log(sum(arr))

//Задача 2
console.log('Задача 2:')
let apple = 1.15 , orange = 2.30
console.log(apple + orange) //

//Задача 3
console.log('Задача 3:')
let star = '*';
while (star.length < 7) {
   console.log(star);
   star = star + '*';
}

//Задача 4
console.log('Задача 4:')

//Задача 5
console.log('Задача 5:')
let min = 60, hour = 60
console.log(min * hour)

//Задача 6
console.log('Задача 6:')
let user = prompt ('Как вас зовут?');
alert('Ваше имя:' + user);

//Задача 7
console.log('Задача 7:')
let str = 'abcde';
console.log(str[0] + str[2] + str[4])

//Задача 8
console.log('Задача 8:')
var obj = {'Коля':'1000', 'Вася':'500', 'Петя':'200'};
console.log(obj['Петя'], obj['Коля'])

//Задача 9
console.log('Задача 9:')
let arr1 = [2, 5, 3, 9];
let result = (arr1[0] * arr1[1] + arr1[2] * arr1[3])
console.log(result)

//Задача 10
console.log('Задача 10:')
let arr2 = [[1, 2, 3] , [4, 5, 6] , [7, 8, 9]];
console.log(arr2[1][0])

//Задача 11
console.log('Задача 11:')
let min1 = 56;
if (min1 >=0 && min1 <= 14) {
   alert('1 половина часа');
}
if (min1 >=15 && min1 <=29){
   alert('2 половина часа')
}
if (min1 >=30 && min1 <=44){
   alert('3 половина часа')
}
if (min1 >=45 && min1 <=60){
   alert('4 половина часа')
};
alert(min1);

//Задача 12
console.log('Задача 12:')
let a = prompt('введите число:');
if (a < 0) {
alert('right')
} else {
alert('wrong')
};

//Задача 13
console.log('Задача 13:')
let test = prompt('введите число');
if (test == true){
   alert('right')
} else {
   alert('wrong')
}

//Задача 14
console.log('Задача 14:')
num = prompt('Введите число месяца')
switch(num) {
case '1' :
   result = 'Зима'
   break
case '2' : 
   result = 'Весна' 
   break
case '3' : 
   result = 'Лето'
   break 
case '4' : 
   result = 'Осень'
   break
}
alert(result)

//Задача 15
console.log('Задача 15:')
arrForTask15 = [1, 2, 3, 4, 5].forEach(item => console.log(item))

//Задача 16
console.log('Задача 16:')

let a16 = 10;
let b16 = 3;
console.log(a16 % b16)

//Задача 17
console.log('Задача 17:')

st = Math.pow(2, 10);
console.log(st)

//Задача 18
console.log('Задача 18:')

let whole = Math.sqrt(379).toFixed(0); //Округление до целых
let tenths = Math.sqrt(379).toFixed(1); // до десятых
let hundredths = Math.sqrt(379).toFixed(2); // до сотых
console.log(whole, tenths, hundredths) // "19", "19.5", "19.47"

//Задача 19
console.log('Задача 19:')
let arr19 = [4, -2, 5, 19, -130, 0, 10];
let minimum = Math.min.apply(null, arr);
let maximum  = Math.max .apply(null, arr);
console.log(arr19, minimum, maximum)

//Задача 20
console.log('Задача 20:')
task20 = Math.floor(Math.random() * 100) + 1;
console.log(task20)

//Задача 21 ()
console.log('Задача 21:') 


//Задача 22
console.log('Задача 22:')
let str = 'js';
str = str.toUpperCase();
console.log(str)

//Задача 23
console.log('Задача 23:')
let str = 'я учу javascript';
alert(str.length)

//Задача 24
console.log('Задача 24:')
let str = 'Я учу javascript';
console.log(str.indexOf('учу'))

//Задача 25
console.log('Задача 25:')
let str = 'Я-учу-JS';
alert('Я-учу-JS' .replace(/-/g, '+'));

//Задача 26
console.log('Задача 26:')

let str = 'Я учу JS';
let arr26 = str.split(',');
console.log(arr26);

//Задача 27
console.log('Задача 27:')
let arr27 = ['Я', 'учу', 'JS'];
console.log(arr27.join())
console.log(arr27.join(''))
console.log(arr27.join('-'))

//Задача 28
console.log('Задача 28:')
let str = 'enigma';
console.log(str[0].toUpperCase() + str.slice(1));