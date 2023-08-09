class person {
    first_name = "Saikat";
    last_name = "Khandoker";
    age = 28;
    getName = () => {
        return this.first_name + " " + this.last_name;
    };
    city = ['Dhaka', 'Khulna', 'Rangpur'];
};

let person1 = new person();
console.log(person1.age);
















// class Person {

//     //Properties
//     first_name='Jhon'
//     last_name='Dee'

//     //method
//     getName() {
//         return (`The name of the person is ${this.first_name} ${this.last_name}`)
//     }
// }

// const person1 = new Person();
// console.log(person1.getName());
