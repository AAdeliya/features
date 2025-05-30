import { Sorter } from "./Sorter";
import { NumbersCollections } from "./NumbersCollections";

const numbersCollections = new NumbersCollections([10, 3, -5, 0]);
const sorter = new Sorter(numbersCollections);
sorter.sort();
console.log(numbersCollections.data);