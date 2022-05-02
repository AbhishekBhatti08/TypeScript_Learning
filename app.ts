

// function Add ( n1:number, n2: number) {
//  return n1 + n2;
// }

// function printResult (num: number): void {
//     console.log("Result -->" + num)
// }

// printResult(Add(2,4));

// let combineNums: (n1:number, n2:number)=>  number = Add;

// combineNums(3,3);


class Employee {

 private id: number [] = [];
//  private employees: string[]= [];
 private name:string[]=[];


 constructor() {
     this.name = ["Anna","Michael"],
     this.id=[1,2]
 }

 printData(){
     console.log(this.name)
 }


}

let abc = new Employee;;
abc.printData();

class Data extends Employee {
    constructor(id: number, private reports: string[]){
        super();
    }

    addReport(text: string){
        this.reports.push(text);
    }

    printReport(){
        console.log(this.reports)
    }
}   