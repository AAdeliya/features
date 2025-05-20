const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
};

//type alias
type Drink = [string, boolean, number];

const pepsi: [string, boolean, number] = ['brown', true, 40];

const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];

//hard to understand
const carSpecs: [number, number] = [400, 3354];

//easy to understand 
const carStats = {
  horsePower: 400,
  weight: 3354
};
