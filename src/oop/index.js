export class Customer {
    constructor(id,customerNumber){
        this.id=id //this demek instance karşılık gelir, kafamızdan verdik değeri instance'ın id ve customerNumber değerlerini yaptık
        this.customerNumber=customerNumber 
    }
}
let customer=new Customer(1,"12345");
//prototyping -- nesneye başka bir özellik ekliyoruz
customer.name="Murat Kurtboğan" //instance üzerinden prototyping
console.log(customer.name)

Customer.bisey="Bişey"; //class üzerinden prototyping
console.log(customer.bisey)

console.log(customer.customerNumber) //instance için oluşturduk yukarıda bu yüzden okuyabiliyoruz

class IndividualCustomer extends Customer {
    constructor(firstName,id,customerNumber){
        super(id,customerNumber)
        this.firstName=firstName
    }
}

class CorporateCustomer {
    constructor(companyName,id,customerNumber){
        super(id,customerNumber)
        this.companyName=companyName
    }
}

