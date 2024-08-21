/*class Customer2 {
  private firstName: string;
  private lastName: string;

  constructor(theFirst: string, theLast: string) {
    this.firstName = theFirst;
    this.lastName = theLast;
  }
}

let myCustomer2 = new Customer2("Marine", "LePenne");

console.log(myCustomer2.firstName);
console.log(myCustomer2.lastName);
*/

class Customer2 {
  private _firstName: string;
  private _lastName: string;

  constructor(theFirst: string, theLast: string) {
    this._firstName = theFirst;
    this._lastName = theLast;
  }

  public get firstName(): string {
    return this._firstName;
  }

  public set firstName(value: string) {
    this._firstName = value;
  }

  public get lastName(): string {
    return this._lastName;
  }

  public set lastName(value: string) {
    this._lastName = value;
  }
}

let myCustomer2 = new Customer2("Gerard", "DePardieu");

console.log(myCustomer2.firstName);
console.log(myCustomer2.lastName);
