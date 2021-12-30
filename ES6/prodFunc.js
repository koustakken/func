//Рекурсия и стек

function pow(x, n) {
    return (n == 1) ? x : (x * pow(x, n - 1));
  }

//Рекурсивные обходы

let company = { // тот же самый объект, сжатый для краткости
    sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600 }],
    development: {
      sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
      internals: [{name: 'Jack', salary: 1300}]
    }
  };
  
  // Функция для подсчёта суммы зарплат
  function sumSalaries1(department) {
    if (Array.isArray(department)) { // случай (1)
      return department.reduce((prev, current) => prev + current.salary, 0); // сумма элементов массива
    } else { // случай (2)
      let sum = 0;
      for (let subdep of Object.values(department)) {
        sum += sumSalaries1(subdep); // рекурсивно вызывается для подотделов, суммируя результаты
      }
      return sum;
    }
  }


  //рекурсивные структуры

  //задача 1. Вычислить сумму до данного

  function sumTo1(num){
    let sum = 0;
    for (let i = 0; i<=num; i++){
      sum+=i;
    } return sum;
  }

  function sumTo2(num){
    return (num == 1) ? 1 : num + sumTo2(num - 1);
  }
// Задача 2. Вычислить факториал

  function factorial(num){
    return (num==1) ? 1 : num * factorial(num - 1);
  }

  //задача 3. Числа Фибоначчи

  function fib(num){
    return (num == 1 || num == 2) ? 1 : fib(num - 1) + fib(num - 2);
  }
  //fib(77) повесила браузер 

  function fib2(n) {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
      let c = a + b;
      a = b;
      b = c;
    }
    return b;
  }

  //Решение через for более оптимально

  //Задача 4. Вывод односвязного списка

  let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };

  function printList(list){
    console.log(list.value);
    if(list.next) printList(list.next);
  }
  //Задача 5. Вывод односвязного списка в обратном порядке
  function printListReverse(list){
    if(list.next) printListReverse(list.next);
    console.log(list.value);
  }

//export
export {pow, sumSalaries1, company, sumTo1, sumTo2, factorial, fib, fib2, printList, list, printListReverse};