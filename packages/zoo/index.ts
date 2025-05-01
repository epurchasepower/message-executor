import { getRandomAnimal } from "@epurchasepower/animals";
import { getRandomName } from "@epurchasepower/names";

const name = getRandomName();
const animal = getRandomAnimal();

console.log(`${name} the ${animal.name} says ${animal.sound}!`);
