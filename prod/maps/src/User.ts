import faker from 'faker';
import { Mappable } from './CustomMap';

export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  color: string = 'red';

  constructor() {
    this.name = faker.name.firstName();
    console.log(this.location);
    this.location = {
      lat: parseFloat(faker.address.latitue()),
      lng: parseFloat(faker.address.longitude())
    };

  }

  markerContent(): string {
    return `User Name: ${this.name}`;
  }

}