// Remove the unused code that does not contribute to the final console log
// The countAndCapitalisePets function should continue to work for any reasonable input it's given, and you shouldn't modify the pets variable.

// const pets = ["parrot", "hamster", "horse", "dog", "hamster", "cat", "hamster"];
// const capitalisedPets = pets.map((pet) => pet.toUpperCase());
// const petsStartingWithH = pets.filter((pet) => pet[0] === "h");

// function logPets(petsArr) {
//   petsArr.forEach((pet) => console.log(pet));
// }

// function countAndCapitalisePets(petsArr) {
//   const petCount = {};

//   petsArr.forEach((pet) => {
//     const capitalisedPet = pet.toUpperCase();
//     if (petCount[capitalisedPet]) {
//       petCount[capitalisedPet] += 1;
//     } else {
//       petCount[capitalisedPet] = 1;
//     }
//   });
//   return petCount;
// }

// const countedPetsStartingWithH = countAndCapitalisePets(petsStartingWithH);

// console.log(countedPetsStartingWithH); // { 'HAMSTER': 3, 'HORSE': 1 } <- Final console log




const pets = ["parrot", "hamster", "horse", "dog", "hamster", "cat", "hamster"];
const petsStartingWithH = pets.filter((pet) => pet[0] === "h");

function countPets(pets) {
  const petCount = {};

  pets.forEach((pet) => {
    const capitalisedPet = pet.toUpperCase();
    petCount[capitalisedPet] = (petCount[capitalisedPet] || 0) + 1;
  });

  return petCount ;
}


console.log(countPets(petsStartingWithH)); // { 'HAMSTER': 3, 'HORSE': 1 } <- Final console log
