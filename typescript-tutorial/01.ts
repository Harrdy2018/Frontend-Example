(()=>{
    // base type
    function sayHi(str: string){
        return str;
    }
    let text="xiao tiantian";
    console.log(sayHi(text));

    // interface
    interface IPerson{
        firstName: string;
        lastName:string;
    }
    function showFullName(person:IPerson){
        console.log(person.firstName+"_"+person.lastName);
    }
    let personb={
        firstName:"asd",
        lastName:"sdf"
    };
    showFullName(personb);

    // class
    class Person{
        firstName: string;
        lastName:string;
        fullName:string;

        constructor(firstName: string, lastName:string){
            this.firstName=firstName;
            this.lastName=lastName;
            this.fullName=this.firstName+"_"+this.lastName;
        }
    }
    let person=new Person("aa","bb");
    console.log(person);
})()