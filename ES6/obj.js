let user = {
    name: "John",
    age: 30
  };

//console.log(Object.keys(user));
//console.log(Object.values(user));
//console.log(Object.entries(user));

//перебор значений свойств в цикле 
for(let val of Object.values(user)){
    //document.write(val);
}
//трансформация объекта
let prices = {
    banana : 1,
    apple: 9,
    meat: 0
};

let doublePrices = Object.fromEntries(
    Object.entries(prices).map(([keys, value]) => [keys, value*2])
);
//console.log(doublePrices);

//задача 1 Сумма свойств объекта 
let salaries = {
    "aaa":10,
    "bbb":20,
    "ccc":30,
    "ddd":40,
    "eee":50
}

const sumSalaries = obj =>{
    let sum = 0;
    for (let i of Object.values(obj)) sum += i;
    return sum;
};



//задача 2 Подсчет количества свойств объекта
const count = obj => {
    let countProps = 0;
    return Object.keys(obj).length;
};

export {sumSalaries, count, user, salaries};