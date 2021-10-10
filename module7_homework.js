//Exercise 1
const obj = {
    name: 'Darya',
    surname: 'Zibirova',
    age: 26
}

function func(checkKeys){
    for (const key in checkKeys) {
        console.log(key);
        console.log(checkKeys[key]);
    }
}

func(obj);

//Exercise 2
const obj = {
    1: 'Darya',
    2: 'Zibirova',
    3: 26
  }

  function findString(object, string) {
    let result = (string in object);
    return result;
  }

  console.log(findString(obj, 5));

//Exercise 3
function f(){
    const emptyObj = Object.create(null);
}

f();

//Exercise 4
function Appliance (brand, power) {
    this.brand = brand;  
    this.power = power;
      this.applianceOn = function() {
        console.log(`${this.brand}  работает с мощностью ${this.power} вт`);
      }
      this.applianceOff = function() {
        console.log(`${this.brand} выключен из розетки`);
      }
    }

    // У каждого из приборов есть собственные свойства, отличные от родительских;
    function Computer(power, brand, price, color) { 
      this.power = power;
      this.brand = brand;
      this.price = price;
      this.color = color;

      this.parameters = function () {
        console.log(`Компьютер: ${this.brand}, мощность: ${this.power} Вт, цена: ${this.price} руб., цвет: ${this.color}`);
      }
    }

    function Lamp(brand,power, price, color) { 
      this.power = power;
      this.brand = brand;
      this.price = price;
      this.color = color;

      this.parameters = function () {
     console.log(`Лампа: ${this.brand}, мощность: ${this.power} Вт, цена: ${this.price} руб., цвет: ${this.color}`); 
     }
    }

    //Делегирующая связь [[Prototype]] для 2х приборов: компьютера и лампы;
    Computer.prototype = new Appliance(); 
    Lamp.prototype = new Appliance();

    //Созданы экземпляры каждого прибора;
    let appliance1 = new Computer (70, "ASUS", 25000, "Black");
    let appliance2 = new Lamp ("Lucia", 40, 1000, "White");

    //Вывод в консоль результатов работы;
    appliance1.parameters (); 
    appliance1.applianceOn(); 
    appliance1.applianceOff();
    appliance2.parameters (); 
    appliance2.applianceOn(); 
    appliance2.applianceOff();

//Exercise 5
class Appliance { 
    constructor(brand, power) {
        this.brand = brand;  
        this.power = power;
        }
    applianceOn () {
        console.log(`${this.brand}  работает с мощностью ${this.power} вт`);
        }
    applianceOff () {
        console.log(`${this.brand} выключен из розетки`);
        }
    }

class Computer extends Appliance {
    constructor(power, brand, price, color) {
        super (brand, power);
        this.power = power;
        this.brand = brand;
        this.price = price;
        this.color = color;
    }
    parameters ( ) {
        console.log(`Компьютер ${this.brand}, мощность: ${this.power} Вт, цена: ${this.price} руб., цвет: ${this.color}`);
        }
    }

class Lamp extends Appliance {
    constructor(brand, power, price,color) { 
        super(brand, power);
        this.power = power;
        this.brand = brand;
        this.price = price;
        this.color = color;
    }
    parameters ( ) {
        console.log(`Лампа ${this.brand}, мощность: ${this.power} Вт, цена: ${this.price} руб., цвет: ${this.color}`); 
        }
    }

let appliance1 = new Computer (70, "ASUS", 25000, 'Black');
let appliance2 = new Lamp ('Lucia', 40, 1000 , 'White');

appliance1.parameters (); 
appliance1.applianceOn(); 
appliance1.applianceOff();
appliance2.parameters (); 
appliance2.applianceOn(); 
appliance2.applianceOff();