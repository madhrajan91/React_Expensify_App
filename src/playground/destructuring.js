//Object Destructuring
// const person = {
//     name: 'X',
//     age: 27,
//     location: {
//         city: 'Boston',
//         temp:30
//     }
// }
// const {name: firstName='Annonymous', age} = person;
// console.log(`${firstName} is ${age}`);


// const {temp:temperature, city} = person.location

// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}`)
// }

const book = {
    title: 'Ego is the enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const {name:publisherName='selfPublished'} = book.publisher;
console.log(`Publisher ${publisherName}`)

//
// Array Destructuring
//

const address = ['1299 S Juniper Street','Boston', 'Massachusetts', '02478']

const [, city, state='New York'] = address;

console.log(`You are in ${city} ${state} `)


const item=['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [coffee='Coffee', , medium] = item
console.log(`A medium ${coffee} costs ${medium}`)