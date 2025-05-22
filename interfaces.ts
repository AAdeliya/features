//fixing long annotations with interfaces

interface Reportable {  //made more generic 
  summary(): string;
}

const olvCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;   //syntax around interfaces 
  }
};

const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  }
}

const printSummary = (item: Reportable): void => {
console.log(item.summary());
};

printSummary(olvCivic);
printSummary(drink);
