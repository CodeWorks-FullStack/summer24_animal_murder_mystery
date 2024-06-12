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

const animals = [
  {
    name: 'Oslo',
    emoji: '🦧',
    weapon: 'Fist',
    isMammal: true,
    likesToEat: ['fruit', 'vegetables', 'meat'],
    isMurderer: false,
    isAlive: true
  },
  {
    name: 'Apollo',
    emoji: '🦒',
    weapon: 'Feet',
    isMammal: true,
    likesToEat: ['vegetables'],
    isMurderer: false,
    isAlive: true
  },
  {
    name: 'Jeff',
    emoji: '🐍',
    weapon: 'Teeth',
    isMammal: false,
    likesToEat: ['meat', 'bugs'],
    isMurderer: false,
    isAlive: true
  },
  {
    name: 'Quetzalcóatllama',
    emoji: '🦙',
    weapon: 'Feet',
    isMammal: true,
    likesToEat: ['vegetables'],
    isMurderer: false,
    isAlive: true
  },
  {
    name: 'Larry',
    emoji: '🦈',
    weapon: 'Teeth',
    isMammal: false,
    likesToEat: ['meat', 'fish'],
    isMurderer: false,
    isAlive: true
  },
  {
    name: 'Ben',
    emoji: '🦛',
    weapon: 'Teeth',
    isMammal: true,
    likesToEat: ['vegetables', 'fruits'],
    isMurderer: false,
    isAlive: true
  },
  {
    name: 'Walter',
    emoji: '🐃',
    weapon: 'Horns',
    isMammal: true,
    likesToEat: ['vegetables'],
    isMurderer: false,
    isAlive: true
  },
]

// function drawAnimals() {
//   let animalEmojis = ''
//   for (let i = 0; i < animals.length; i++) {
//     const animal = animals[i];
//     animalEmojis += animal.emoji
//   }
//   const animalLineupElement = document.getElementById('animalLineup')
//   animalLineupElement.innerText = animalEmojis
// }

function drawAnimals() {
  drawSuspects()
  drawVictims()
}

function drawSuspects() {
  const aliveAnimals = animals.filter((animal) => animal.isAlive == true)

  let animalEmojis = ''

  aliveAnimals.forEach((animal) => animalEmojis += animal.emoji)

  const animalLineupElement = document.getElementById('animalLineup')
  animalLineupElement.innerText = animalEmojis
}

function drawVictims() {
  const notAliveAnimals = animals.filter((animal) => animal.isAlive == false)

  let animalEmojis = ''

  notAliveAnimals.forEach((animal) => animalEmojis += animal.emoji)

  const animalGraveyardElement = document.getElementById('animalGraveyard')
  animalGraveyardElement.innerText = animalEmojis
}

function makeAMurderer() {
  // ✅ select an animal at random
  // gets a random number between -1 and the length of the array (all valid index numbers) 
  const randomIndex = Math.floor(Math.random() * animals.length)
  const randomAnimal = animals[randomIndex]
  // ✅ change isMurderer to true
  randomAnimal.isMurderer = true
  console.log(`random animal at the index of ${randomIndex}`, randomAnimal);
}

// FIXME if no animals left, you lose the game 
function commitMurder() {
  // ✅ make sure murderer is not the victim
  // ✅ make sure animal is alive
  const potentialVictims = animals.filter((animal) => animal.isAlive == true && animal.isMurderer == false)
  console.log('potential victims', potentialVictims);
  const randomIndex = Math.floor(Math.random() * potentialVictims.length)
  // ✅ pick a victim at random
  const randomVictim = potentialVictims[randomIndex]
  // ✅ change isAlive to false
  randomVictim.isAlive = false
  console.log('THE VICTIM', randomVictim);
  drawAnimals()
}

// ANCHOR run these function on page load
drawAnimals()
makeAMurderer()
commitMurder()

// !SECTION