"use strict";
function Add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log("Result -->" + num);
}
printResult(Add(2, 4));
let combineNums = Add;
combineNums(3, 3);
