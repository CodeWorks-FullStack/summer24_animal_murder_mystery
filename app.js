// SECTION array methods
console.groupCollapsed()
const cats = [
  {
    name: 'Gopher',
    age: 2,
    likesCheese: false,
    favoriteToys: ['mouse', 'candy cane']
  },
  {
    name: 'Priscilla',
    age: 1,
    likesCheese: true,
    favoriteToys: ['stingray', 'bumblebee']
  },
  {
    name: 'Cali',
    age: 5,
    likesCheese: false,
    favoriteToys: ['mouse', 'ankle', 'shoestring']
  }
]

// Adds item to end of array, does change the original array in memory
cats.push({
  name: 'Frankie',
  age: 4,
  likesCheese: true,
  favoriteToys: ['taco bell wrapper', 'hands under blankets']
})

// Adds item to beginning of array
// cats.unshift({})

console.log('cats array', cats);

// function sayWhatIsUp(cat) {
//   console.log(`what is up`, cat);
// }
// const foundCat = cats.find(sayWhatIsUp)

// Gives a single value back when callback function returns true
const foundCat = cats.find((cat) => cat.name == 'Priscilla')

console.log('We found a cat!', foundCat);

// Gives an array back of items that match statement in callback
const oldCats = cats.filter((cat) => cat.age > 2)

console.log('we got the old cats', oldCats);

const catsWhoLikeCheese = cats.filter((cat) => cat.likesCheese == false)

console.log('these cats like cheese', catsWhoLikeCheese);

for (let i = 0; i < cats.length; i++) {
  const cat = cats[i];
  console.log(cat.name)
}

// Just a for loop, does the same thing as the actual for loop above
cats.forEach((cat) => console.log(cat.name))
console.groupEnd()

// SECTION application code
// !SECTION