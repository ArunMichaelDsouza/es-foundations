/* 
	Arrow Functions
*/
const square = num => num * num;
console.log(square(10));

const calculate = (a, b) => {
	++b;
	return a + b;
};
console.log(calculate(1, 2));

const arr = [1,2,3,4,5].map(i => i * 2);
console.log(arr);

const reducedValue = [1,2,3,4,5].reduce((i, j) => {
	return i + j;
});
console.log(reducedValue);



/*
	Lexical this
*/
const obj = {
	arr: [1,2,3,4,5],
	getDoubled() {
		return this.arr.map(i => i * 2);
	},
}
console.log(obj.getDoubled());

