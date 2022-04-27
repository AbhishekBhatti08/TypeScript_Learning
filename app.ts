

function Add ( n1:number, n2: number) {
 return n1 + n2;
}

function printResult (num: number): void {
    console.log("Result -->" + num)
}

printResult(Add(2,4));

let combineNums: (n1:number, n2:number)=>  number = Add;

combineNums(3,3);
