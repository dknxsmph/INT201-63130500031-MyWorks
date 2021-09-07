let person = {}; //implicit class
person.name = "Johny";
person.id = "123";
console.log(person);
person.email = "Johny@example.com";
console.log(person);
delete person.email;
console.log(person);

class Person {
    constructor(id, name) {
            if (id.length != 13) this._id = 'unknown';
            else this._id = id;
            this._name = name;
        }
        //getter
    get id() {
        return this._id;
    }
    get name() {
            console.log(`you are in getter`)
            return this._name;
        }
        //setter
    set id(id) {
        this._id = id; //backing field
    }
    set name(name) {
        console.log(`yoy are in setter`)
        this._name = name;
    }

    //method
    getPerson() {
        return `person id = ${this._id}, person name= ${this._name}`;
    }
    toString() {
        return `person id = ${this._id}, person name= ${this._name}`;
    }
}
let p1 = new Person('1234567891234', `jhy`);
p1.name = 'sehun';
console.log(p1.name);


// let per1 = new Person('1234567', 'dy');
// let per2 = new Person('8888888888888', 'mark');

// console.log(per1.getPerson());
// console.log(per2.toString());

// Person.prototype.getPersonFirstNameLetter = function() {
//     return this._name.charAt(1);
// }; // ระดับ  Class
// console.log(per1.getPersonFirstNameLetter());

// per2.getPersonFirstNameLetter = function() {
//     return this._name.charAt(0).toUpperCase();
// }; //per1 จะเรียกใช้ getPersonFirstNameLette ไม่ได้
// console.log(per2.getPersonFirstNameLetter());

// class Student {
//     constructor(stdId) {
//         studentId = stdId;
//     }
// }
// console.log(Object.prototype.isPrototypeOf(per1));
// console.log(Person.prototype.isPrototypeOf(per1));
// console.log(Student.prototype.isPrototypeOf(per1));