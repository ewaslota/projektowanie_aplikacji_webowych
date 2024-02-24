let customer= {
    firstName: 'Anka',
    lastName: 'Kowalska',
    showDetails: function () {
        console.log('Klient nazywa się: ' + this.firstName + ' ' + this.lastName);
    }
}

customer.showDetails();

function Customer2 (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.showDetails = function () {
        console.log('Klient nazywa się: ' + this.firstName + ' ' + this.lastName);
    }
}

let customer2 = new Customer2('Jan', 'Nowak');
customer2.showDetails();


class Customer3 {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    showDetails () {
        console.log('Klient nazywa się: ' + this.firstName + ' ' + this.lastName);
    }
}

let customer3 = new Customer3('Adam', 'Brzęczyszczykiewicz');
customer3.showDetails();

