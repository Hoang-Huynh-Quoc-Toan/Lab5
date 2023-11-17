const price = 45.345364386349;
let amount = price * (1 + 0.08);

console.log("Tổng giá trị hàng hóa là:", amount.toFixed(2));

let a = undefined;
console.log(a);

const b = {
    name: "Toản",
    age: 27,
    hometown: "Vũng Tàu"
}

console.log(b.name)
console.log(b["age"])

var d = [];
var e = [];
var f = d;
 
console.log(d == e); // false
console.log(d === e); // false
console.log(d == f); // true
console.log(d === f); // true