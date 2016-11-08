/* 
	Arrow Functions
*/
const square = num => num * num; // Arrow shorthand method
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
		return this.arr.map(i => i * 2); // Access parent scope directly using 'this'
	},
}
console.log(obj.getDoubled());



/*
	const and let + block scoping 
*/
const int = 10;
let char = 'Text1';
{
	let char = 'Text2'; // 'let' and 'const' enables block scoping
}
//int = 12; // Not allowed, int is read-only
console.log(char);
{
	const b = 'b';
}
//console.log(b); // undefined




/* 
	Default parameters
*/
const fn = (greet, name='world') => greet + ' ' + name;
console.log(fn('Hello')); 
console.log(fn('Hello', 'guys')); 



/*
	Object shorthand properties
*/
const firstName = 'Arun', lastName = 'Dsouza', func = () => 'Func!';
const user = { firstName, lastName, func }; // Sets key name as that of variable
console.log(user);
console.log(user.func());



/* 
	Spread operator
*/
const list = [5,6,7,8,9];
console.log(...list); // Spreads out to individual items

const add = (a, b, c) => a + b + c;
console.log(add(...[1,2,3]));


const key = 'info', info = { id: 12, num: 1244 };
const userInfo = {
	name: 'test',
	email: 'a@a.com'
};
const detail = { ...userInfo, [key]: info }; // Spread out objects to add new key/value pairs
console.log(detail);



/* 
	String templates
*/
const string = 'This is a string';
const template = `${string}  

		String templates can be multi-line
`;
console.log(template);









