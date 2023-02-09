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
