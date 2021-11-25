(function () {
    // base type
    function sayHi(str) {
        return str;
    }
    var text = "xiao tiantian";
    console.log(sayHi(text));
    function showFullName(person) {
        console.log(person.firstName + "_" + person.lastName);
    }
    var personb = {
        firstName: "asd",
        lastName: "sdf"
    };
    showFullName(personb);
    // class
    var Person = /** @class */ (function () {
        function Person(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.fullName = this.firstName + "_" + this.lastName;
        }
        return Person;
    }());
    var person = new Person("aa", "bb");
    console.log(person);
})();
