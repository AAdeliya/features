import { Sorter } from "./Sorter";
import { NumbersCollections } from "./NumbersCollections";
import { CharactersCollections } from "./CharactersCollections";

// const numbersCollections = new NumbersCollections([10, 3, -5, 0]);
// const sorter = new Sorter(numbersCollections);
// sorter.sort();
// console.log(numbersCollections.data);

const charactersCollections = new CharactersCollections('Xaayb');
const sorter = new Sorter(charactersCollections);
sorter.sort();
console.log(charactersCollections);