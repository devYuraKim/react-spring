var Customer = /** @class */ (function () {
    function Customer(theFirst, theLast) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
    return Customer;
}());
//let myCustomer = new Customer();
//myCustomer.firstName = "Marine";
//myCustomer.lastName = "LePenne";
var myCustomer = new Customer("Marine-", "LePenne");
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
