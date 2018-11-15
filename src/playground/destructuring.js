//
// OBJECT DESTRUCTURING
// --------------------
//


// const person = {
//     name: 'Jacky',
//     age: 27,
//     location: {
//         city: "Hong Kong",
//         temp: 23
//     }
// };

// const { name: firstName = 'Anonymous', age } = person
// // if the name isn't provided, it will use the default value
// const { city, temp: temperature } = person.location

// console.log(`${firstName} is ${age}.`)

// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}`)
// }


// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// }

// const { name: publisherName = "Self-Published" } = book.publisher
// console.log(publisherName)


//
// ARRAY DESTRUCTURING
// -------------------
//

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennysylvania', '19147'];

const [street, city, state, zip] = address
// depends on the position
// or we can skip the first two item and last item
// const [,,state] = address

console.log(`You are in ${street} ${zip}`)

const item = ['Coffee (hot)', '$18', '$22', '$28'];
const [itemName,,mediumPrice] = item
console.log(`A medium ${itemName} costs ${mediumPrice}`)

