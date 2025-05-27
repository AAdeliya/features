import faker from 'faker';

export class User {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.name.firstName();
    console.log(this.location);
    this.location = {
      lat: parseFloat(faker.address.latitue()),
      lng: parseFloat(faker.address.longitude())
    };

  }

}