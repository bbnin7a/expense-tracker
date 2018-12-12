// create promise but ourselves
// but in normal case, we seldom to create ...
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      name: 'Jacky',
      age: 30
    }) 
    resolve('This is my other resolved data') // this will not run

    // reject('Something went wrong!')
  }, 2000)
})

console.log('before')

promise.then((data) => {
  console.log(data)
  return "some data"
}).then((str) => {
  console.log('doces this run?', str)
}).catch(err => {
  console.log('error: ',err)
})

// another method, but a bit confusing
// hard to read the promise structure
// promise.then((data) => {
//   console.log(data)
// }, (err) => {
//   console.log('error: ',err)
// })

console.log('after')