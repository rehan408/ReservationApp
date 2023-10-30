interface Reservation {
  arrivalDate: string;
  departureDate: string;
  roomSize: string;
  roomQuantity: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  streetName: string;
  streetNumber: string;
  zipCode: string;
  state: string;
  city: string;
  extras: string;
  payment: string;
  note: string;
  tags: string;
  reminder: boolean;
  newsletter: boolean;
  confirm: boolean;
}
  
  export default Reservation;