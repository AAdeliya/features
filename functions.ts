             //annotations          //return 
const add = (a: number, b: number): number => {
  return a + b;
};

const substract = (a: number, b: number) : number => {
  return a - b;
};

function divide(a: number, b: number): number {
  return a / b;

}

const multiply =  function(a: number, b: number) : number {
  return a * b;
}

const logger = (message: string): void => {
  console.log(message);
};

//never expect to return anything 
const throwError = (message: string): never => {
  throw new Error(message);
};

const forecast = {
  date: new Date(),
  weather: 'sunny'
};

const logWeather = ({date, weather }:{ date: Date, weather: string }): void => {
  console.log(forecast);
  console.log(forecast.weather);

};

logWeather(forecast);