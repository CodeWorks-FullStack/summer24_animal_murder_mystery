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
    name: 'Mick',
    emoji: '🦧',
    weapon: 'Crocs',
    isMammal: true,
    likesToEat: ['nachos', 'salads', 'cheetos'],
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
  }
]

const clues = ['food', 'weapon', 'isMammal', 'emoji']

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

function commitMurder() {
  // ✅ make sure murderer is not the victim
  // ✅ make sure animal is alive
  const potentialVictims = animals.filter((animal) => animal.isAlive == true && animal.isMurderer == false)

  // if there are no victims left
  if (potentialVictims.length == 0) {
    endGame()
  }

  console.log('potential victims', potentialVictims);
  const randomIndex = Math.floor(Math.random() * potentialVictims.length)
  // ✅ pick a victim at random
  const randomVictim = potentialVictims[randomIndex]
  // ✅ change isAlive to false
  randomVictim.isAlive = false
  console.log('THE VICTIM', randomVictim);
  drawAnimals()
  drawClue()
}

function accuseAnimal() {
  // ✅ allow user to type in name of animal
  const nameOfAnimal = window.prompt("Who did it?")
  console.log('Accused animal name', nameOfAnimal);
  // ✅ get the murderer
  const murderer = animals.find((animal) => animal.isMurderer == true)
  console.log('MURDERER', murderer);
  // ✅ compare the murderer's name to the user input
  if (nameOfAnimal == murderer.name) {
    window.alert(`${murderer.name} is going to jail forever. Great job detective!`)
  }
  // ✅ murder another animal if guessed incorrectly
  else {
    commitMurder()
  }
}

function drawClue() {
  // get ✅ the murderer
  const murderer = animals.find((animal) => animal.isMurderer == true)

  // NOTE shift removes the first element from an array and returns it
  const nextClue = clues.shift()

  let clueText = ''

  // if (nextClue == 'food') {
  //   // ✅ figure out what the murderer likes to eat
  //   const randomFoodIndex = Math.floor(Math.random() * murderer.likesToEat.length)
  //   const randomFood = murderer.likesToEat[randomFoodIndex]
  //   clueText = `<li>The murderer has a taste for ${randomFood}</li>`
  // }

  // if (nextClue == 'weapon') {
  //   clueText = `<li>The murderer used ${murderer.weapon} to murder their victim</li>`
  // }

  // Switch will evaluate the key passed through parentheses
  switch (nextClue) {
    // case checks if the key is 'food'
    case 'food':
      const randomFoodIndex = Math.floor(Math.random() * murderer.likesToEat.length)
      const randomFood = murderer.likesToEat[randomFoodIndex]
      clueText = `<li>The murderer has a taste for ${randomFood}</li>`
      // break will end swicth statement
      break;

    case 'weapon':
      clueText = `<li>The murderer used ${murderer.weapon} to murder their victim</li>`
      break;

    case 'isMammal':
      if (murderer.isMammal) {
        clueText = `<li>The murderer is a mammal</li>`
      }
      else {
        clueText = `<li>The murderer is not a mammal</li>`
      }
      break;

    case 'emoji':
      clueText = `<li>Here is a security camera enhancement of the murderer: <span class="footage">${murderer.emoji}</span></li>`
      break;

    // if none of our cases match, run this code 
    default:
      clueText = `<li>You are out of clues! You should be a better detective!</li>`
      break;
  }

  // ✅ draw that to page
  const cluesElement = document.getElementById('clues')
  cluesElement.innerHTML += clueText
}

function endGame() {
  window.alert()
}

// ANCHOR run these function on page load
drawAnimals()
makeAMurderer()
commitMurder()

// !SECTION