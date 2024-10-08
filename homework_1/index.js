// Написати програму, яка виводить числа від 1 до 10, використовуючи цикли for і while.
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}


// Створити масив, що складається з елементів різних типів (примітивів) (число, рядок, булева змінна) 
// довжиною 10 елементів. Вивести їх тип за допомогою typeof у консоль. Виведення здійсніть за 
// допомогою перебору масиву різними способами: методом forEach, циклами for, while і do while.  
const arr = [23, 'string', true, 'some string', false, 123, 56, true, 'hello, world!', 111];

// forEach
arr.forEach(elem => console.log(typeof(elem)));

// while
let index = 0;
while (index <= arr.length) {
    console.log(typeof(arr[index]));
    index++;
}

// do while
let arrIndex = 0;
do {
    console.log(typeof(arr[arrIndex]));
    arrIndex++;
} while (arrIndex < arr.length)


// Створити масив об'єктів (приклад об'єкта {name: ‘’, age: xx, pets: [cat, dog]}) і 
// використати метод filter, щоб вивести всіх, кому більше 20 років.  
const users = [
    {
        name: 'Alex',
        age: 21,
        pets: ['cat', 'dog'],
    },
    {
        name: 'John Doe',
        age: 17,
        pets: ['cat'],
    },
    {
        name: 'Mike',
        age: 27,
        pets: ['dog'],
    },
    {
        name: 'Helen Malr',
        age: 54,
        pets: ['cat', 'dog'],
    },
    {
        name: 'Sam Malone',
        age: 18,
        pets: ['cat', 'dog'],
    },
];

console.log(users.filter(user => user.age > 20));

// За допомогою map пройтися по масиву із завдання вище та додати кожному домашню тварину. Результат вивести у консоль.  
users.map(user => user.pets.push('parrot'));
console.log(users);


// Створити масив із 10 елементів і заповнити його числом 42 за допомогою відповідного методу 
// (завдання знайти його в документації, посилання в описі до лекції). За допомогою splice 
// вставити на 5-ту позицію слово "answer". За допомогою find знайти це слово і вивести його у консоль.  
const array = new Array(10);
array.fill(42);
array.splice(4, 1, 'answer');
console.log(array.find(item => item === 'answer'));


// Створіть об'єкт із кількома ключами на ваш розсуд. І наведіть приклади використання keys, hasOwn, values.
const person = {
    name: "Ivan",
    age: 30,
    occupation: "Developer",
    city: "Kyiv"
};

const keys = Object.keys(person);
console.log("Object keys:", keys);

const hasAge = person.hasOwnProperty('age');
console.log("Does the key 'age' exist in the object?", hasAge);

const hasSalary = person.hasOwnProperty('salary');
console.log("Does the key 'salary' exist in the object?", hasSalary);

const values = Object.values(person);
console.log("Object values:", values);
