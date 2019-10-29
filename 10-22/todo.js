const fetch = require('node-fetch');

// fetch('https://jsonplaceholder.typicode.com/todos')
//     .then(res => res.json())
//     .then(todos => todos[2])
//     .then(console.log);

(async function () {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');

    const todos = await response.json();

    const thirdItem = todos[2];

    console.log(thirdItem);
})(); 
