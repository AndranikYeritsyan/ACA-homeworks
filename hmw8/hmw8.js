// class Employee{
//     constructor(id,firstName,lastName,position,salary,workingHours){
//         this.id=id;
//         this.firstName=firstName;
//         this.lastName=lastName;
//         this.position=position;
//         this.salary=salary;
//         this.workingHours=workingHours;
//     }
//     getFullName(){
//         return `${this.firstName} ${this.lastName} `
//     }

//     get employe(){
//         return `${this.id},${this.firstName},${this.lastName},${this.position},${this.salary},${this.workingHours}`
//     }

//     set employe({id,firstName,lastName,position,salary,workingHours}){
//         this.id=id;
//         this.firstName=firstName;
//         this.lastName=lastName;
//         this.position=position;
//         this.salary=salary;
//         this.workingHours=workingHours;
//     }

//     getAnnularSalary(){
//         return this.salary * 12
//     }

//     raiseSalary(percent){
//         this.salary=this.salary + (this.salary*percent)/100
//         return this.salary
//     }
// }




//  u=new Employee(1,"Ando",'Yeritsyan','tnoren',100000,8)

//ex2
// class Acount {
//     constructor(id, name, balance) {
//         this.id = id;
//         this.name = name;
//         this.balance = balance;

//     }
//     get user() {
//         return `${this.id}, ${this.name}, ${this.balance}`
//     }

//     set user({ name, balance }) {
//         this.name = name;
//         this.balance = balance

//     }

//     credit(amount) {
//         this.balance = this.balance + amount;
//         return this.balance
//     }

//     debit(amount) {
//         if (this.balance >= amount) {
//             return this.balance - amount
//         } else {
//             return "anbavarar hashvekshir"
//         }
//     }

//     transferTo(anotherAccount, amount) {
//         if (this.balance > amount) {
//             anotherAccount.balance += amount;
//             return this.balance - amount
//         } else {
//             return "“Amount exceeded balance"
//         }
//     }



// }

// user1 = new Acount(5, "And Yeritsyan", 50000)
// user2 = new Acount(6, "Davo", 20000)



//ex3
class Person{
    constructor(firstName, lastName, gender, age){
        this.firstName=firstName;
        this.lastName=lastName;
        this.gender=gender;
        this.age=age;
    }

    get person(){
        return `${this.firstName},${this.lastName},${this.gender},${this.age}`
    }

    set person({firstName, lastName, gender, age}){
        this.firstName=firstName;
        this.lastName=lastName;
        this.gender=gender;
        this.age=age;
    }
    
    toString(){
        return this.person
    }
}



class Student extends Person{
    constructor({programName,grade},year,fee){
        super('Ando','Yeritsyan','Txa','22')
        this.programName=programName;
        this.grade=grade;
        this.year=year;
        this.fee=fee;
    }
    get student(){
        return `FirsName:${this.firstName},LastName:${this.lastName},Gender:${this.gender},Age:${this.age},"programName":${this.programName},"Grade":${this.grade},"Year":${this.year},"Fee":${this.fee}`
    }
    set student({firstName, lastName, gender, age,programName,grade,year,fee}){
        this.firstName=firstName;
        this.lastName=lastName;
        this.gender=gender;
        this.age=age;
        this.programName=programName;
        this.grade=grade;
        this.year=year;
        this.fee=fee;
    }
    passExam(){
        if(this.grade>=50){
            this.year++
            return this
        }else{
            return "anbavarar gnahatakan"
        }
    }
    
    toString(){
       return this.student
    }
}

student1=new Student({programName:"math",grade:52},2018,250000)