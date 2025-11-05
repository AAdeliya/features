import { Sorter } from "./Sorter";
import { NumbersCollections } from "./NumbersCollections";
import { CharactersCollections } from "./CharactersCollections";
import { LinkedList } from "./LinkedList";

const numbersCollections = new NumbersCollections([10, 3, -5, 0, 5]);
numbersCollections.sort();
console.log(numbersCollections.data);

const charactersCollections = new CharactersCollections('Xaayb');
charactersCollections.sort();
console.log(charactersCollections);

const linkedlist = new LinkedList();
linkedlist.add(500);
linkedlist.add(-10);
linkedlist.add(-3);


