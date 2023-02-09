// сумма двух чисел
function sum(a, b) {
  console.log(a + b);
}
sum(10, 40);
sum(5, 5);

//площадь прямоугольника
function area(x, y) {
  console.log("площадь прямоугольника " + x * y);
}
area(5, 5);
area(30, 6);

//число четное или нечетное
function num(f) {
  if (f % 2 === 0) {
    console.log(f + " even");
  } else if (f % 2 === 1) {
    console.log(f + " odd");
  } else {
    console.log(f + " its not a number");
  }
}
num(5);
num(10);
num("iphone");

//функция которая считает от первого числа до второго
function countup(a, b) {
  let number = a;
  while (number <= b) {
    console.log(number);
    number++;
  }
}
countup(5, 10);
countup(-10, 10);

//функция отчет
function countdown(a, b) {
  let number = a;
  while (number >= b) {
    console.log(number);
    number--;
  }
}
countdown(10, 5);
countdown(10, -10);

function count(a, b) {
  if (a < b) {
    countup(a, b);
  } else {
    countdown(a, b);
  }
}

//массив вывести имена
let names = ["Aidai", "Bakyta", "Joldosh"];
for (i = 0; i < names.length; i++) {
  console.log("your name is " + names[i]);
}

// вывести имена наоборот
for (i = names.length - 1; i >= 0; i--) {
  console.log("your name is " + names[i]);
}

//вывести длинну имени (количество букв в именах)
for (i = 0; i < names.length; i++) {
  console.log(names[i].length);
}
