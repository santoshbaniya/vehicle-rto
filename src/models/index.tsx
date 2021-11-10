export interface bike {
  status: string;
  liscence_plate: number;
  owner_name: string;
  financer: string;
  insurance_company: string;
  model: string;
  class: string;
  registration_date: Date;
  vehicle_age: number;
  insurance_expiry: Date;
  chasis_number: number;
  engine_number: number;
  fuel_type: string;
  brand_name: string;
  brand_model: string;
  fitness_upto: number;
  wheel_count: number;
  rto_code: string;
  rto: string;
  state: string;
  image: boolean;
}
export interface car {
  status: string;
  liscence_plate: number;
  owner_name: string;
  financer: string;
  insurance_company: string;
  model: string;
  class: string;
  registration_date: Date;
  vehicle_age: number;
  insurance_expiry: Date;
  engine_number: number;
  fuel_type: string;
  brand_name: string;
  brand_model: string;
  wheel_count: number;
  rto_code: string;
  rto: string;
  image: boolean;
}
export interface liscence {
  registrationNo: number;
  status: string;
  ownerName: string;
  registrationDate: Date;
  registrationAuthority: string;
}
