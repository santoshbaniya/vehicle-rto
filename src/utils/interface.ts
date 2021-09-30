export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: string;
  phone: string;
  website: string;
  company: string;
}
export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geolocation;
}
export interface Geolocation {
  lat: string;
  lng: string;
}
export interface Company {
  name: string;
  bs: string;
  catchPhrase: string;
}
