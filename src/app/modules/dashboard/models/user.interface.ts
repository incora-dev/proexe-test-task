export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: IUserAddress;
  phone: string;
  website: string;
  company: IUserCompany;
}

export interface IUserAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: string;
}

export interface IUserCompany {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface IAddressGeo {
  lat: number;
  lng: number;
}
