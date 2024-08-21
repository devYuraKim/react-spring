class Customer {
  firstName: string;
  lastName: string;

  constructor(theFirst: string, theLast: string) {
    this.firstName = theFirst;
    this.lastName = theLast;
  }
}

//let myCustomer = new Customer();
//myCustomer.firstName = "Marine";
//myCustomer.lastName = "LePenne";

let myCustomer = new Customer("Marine", "LePenne");

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
