

// Объект с описанием пользователя

const user = { 
  имя: 'Максим',

  возраст: 37,

  рост: 194,

  вес: 99,

  // Метод объекта

  greeting(имя) {
    console.log(`Hello ${имя}`)
  }

}

user.greeting('Max')


// Массив объектов с выводом в консоль простых пользователей

const users = [
  {
    name: 'John',
    age: 22,
    isAdmin: false
  },
  {
    name: 'Iren',
    age: 25,
    isAdmin: false
  },
  {
    name: 'Ivan',
    age: 27,
    isAdmin: true
  },
  {
    name: 'Zack',
    age: 20,
    isAdmin: false
  }
];

let simpleUsers = 0;

for (let i = 0; i < users.length; i++) {
  if (users[i].isAdmin !== true ) {
    simpleUsers++; 
  }
}

console.log( 'Колличество простых пользователей:',simpleUsers)
