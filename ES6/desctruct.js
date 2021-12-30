// Деструкторизация массива

//import { salaries } from "./obj";

let a = [1,2,3,4,5];
let [first, second] = a;
let [firstName, surName] = "Imya Familya".split(' ');

//Вложенная деструкторизация 

let options = {
    size: {
      width: 100,
      height: 200
    },
    items: ["Cake", "Donut"],
    extra: true
  };

  let {
    size :{
        width: w = 200,
        height: h = 200,
    },
    items : [elem1, elem2],
    title = "Menu"
  } = options;

//Умные параметры функций

let optionsMenu = {
    titleMenu: "My menu",
    itemsMenu: ["elm3", "elm4"]
};

function showMenu({
    titleMenu = "Untitled",
    widthMenu = 100,
    heightMenu = 100,
    itemsMenu = []
}) {
    console.log(titleMenu,itemsMenu)
}

//Задача 1 Деструктурирующие присваивание

let user1 = {
    name: "John",
    years: 30
  };

let {
    name,
    years: age,
    IsAdmin = false,
} = user1;

//Задача 2 Максимальная зарплата

let salariesD = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };

const topSalary = obj =>{
    let max = 0;
    let maxName = null;
    for(const [name, salary] of Object.entries(obj)){
        if (salary > max) {
            max = salary;
            maxName = name;
        } 
    } return maxName;
};

//export
export {showMenu, optionsMenu, user1, name,
     age, IsAdmin, topSalary, salariesD};