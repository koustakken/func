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

//export
export {pow, sumSalaries1, company};