const carMakers = ['ford', 'toyota', 'mersedes'];

const dates = [new Date(), new Date()];

const carsByMake = [
  ['f150'],
  ['corolla'],
  ['GLE350']
];

//Help with inference when extracting values
const car = carMakers[0];

const myCar = carMakers.pop();

//Prevent incomatible values
carMakers.push(100);

//Help with 'map'
carMakers.map((car: string) : string => {
  return car.toUpperCase();
});

//Flexible types
const importantDates: (Date | string)[] = [new Date()];
importantDates.push('2030-10-10');
importantDates.push(new Date());
importantDates.push(new Date());