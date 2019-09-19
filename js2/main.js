console.log('Homework №2');

 var userObj = {
  firstName: 'Serhii',
  lastName: 'Stashko',
  age: 27,
  fullName() {
      return (userObj.firstName + ' '+ userObj.lastName);
  }
 };
console.log(userObj);
console.log(userObj.fullName());
function defUpperStr (name) {
return (name || 'DEFAULT TEXT').toUpperCase();
}
console.log(defUpperStr('My text'));
console.log(defUpperStr());
 function evenFn(n) {
   var num = [];
   for (var i = 1; i <= n;  i++) if (i % 2 ===0) num.push(i);
   return num;
 }
  console.log(evenFn(10));
  console.log(evenFn(15));
  console.log(evenFn(20));
function weekFn(n) {
  var day = '';
  switch (n) {
  case 1 : day = 'Понедельник';break;
  case 2 : day = 'Вторник';break;
  case 3 : day = 'Среда';break;
  case 4 : day = 'Четверг';break;
  case 5 : day = 'Пятница';break;
  case 6 : day = 'Суббота';break;
  case 7 : day = 'Воскресенье';break;
  default :day = null;
}
return day;
}
console.log(weekFn(1));
console.log(weekFn(3));
console.log(weekFn(7));
console.log(weekFn(9));
console.log(weekFn(1.5));
console.log(weekFn('2'));
function ageClassification(n) {
  return  (n < 0) ? null : 
  (n <= 24) ? 'детский возраст' :
  (n <= 44) ? 'молодой возраст' :
  (n <= 65) ? 'средний возраст' :
  (n <= 75) ? 'пожилой возраст' : 
  (n <= 90) ? 'старческий возраст' : 
  (n <= 122) ? 'долгожители' :
   null;
}
console.log('-1 :', ageClassification(-1));
console.log('5 :', ageClassification(5));
console.log('34 :', ageClassification(34));
console.log('50 :', ageClassification(50));
console.log('65.1 :', ageClassification(65.1));
console.log('80 :', ageClassification(80));
console.log('110 :', ageClassification(110));
console.log('130 :', ageClassification(130));
function oddFn(n) {
  let arr = [];
  let i = 0;
  while (i++ < n) if (i % 2!==0) arr.push(i);
  return arr;
}
console.log(oddFn(10));
console.log(oddFn(15));
console.log(oddFn(20));
function  mainFunc(a, b, callback) {
  if (callback && typeof callback==='function') return callback(a, b);
  return false;
  }
function cbRandom(a, b) {
  return Math.floor(Math.random() * (b - a + 1)) + a;
}
function cbPow(a, b) {
  return Math.pow(a, b);
}
function cbAdd(a, b) {
  return a + b;
}
console.log(mainFunc(2, 5, cbRandom));
console.log(mainFunc(2, 5, cbPow)); 
console.log(mainFunc(2, 5, cbAdd));
console.log(mainFunc(2, 5, 'not a func'));
