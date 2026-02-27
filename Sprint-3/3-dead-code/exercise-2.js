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

/**
Removed Unused Global Variables: Deleted const capitalisedPets because the array was being processed
but never used anywhere in the script.

Eliminated Dead Code (Functions): Removed the logPets function since it was never called, keeping 
the codebase focused only on the required output.

Simplified Internal Logic:

Renamed the function to countPets for brevity.

Replaced the if/else statement inside the forEach loop with a Logical OR shortcut (|| 0). This 
handles both initializing the count and incrementing it in a single line.

Optimized Memory Usage: Removed the intermediate variable countedPetsStartingWithH. Instead, 
I passed the function call directly into console.log, as the result didn't need to be stored for further use.

Improved Code Scope: Ensured the function uses its local parameter instead of relying on external 
global variables.
*/

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
