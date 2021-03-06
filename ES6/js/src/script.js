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
};
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

const data = {
	id: 11,
	name: 'User'
};
console.log(...data);

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
console.log(template); // 

const evalutate = `10 + 23 = ${ 10 + 23 }`;
console.log(evalutate);

console.log(`${ new Date() }`); // Expressions in string templates

const stringFn = (string, ...values) => {
  return `${string[0]}${values[0]}-${values[1]}-${values[2]}`;
}

const tmpl = stringFn`Its ${new Date().getDate()} ${new Date().getMonth()+1} ${new Date().getFullYear()}`;
console.log(tmpl);



/* 
	Destructuring 
*/
const i = {
	id: 111
};

let { id } = i;
console.log(id);

const j = {
	no: 222
};

let { no:userId } = j; // Alias to use object property
console.log(userId);

const getDestructured = (props) => {
	const { id, name } = props;

	return `Id of ${name} is : ${id}`;
}

const o = { id: 333, name: 'Test' };
console.log(getDestructured(o));

const users = ['Dave', 'Erica', 'James', 'Alan'];
const [destrcutedArray1, destrcutedArray2, , destrcutedArray3] = users; // Destructuring an array
console.log(destrcutedArray1);
console.log(destrcutedArray2);
console.log(destrcutedArray3);

const userList = [{
	id: 1,
	email: 'a@a.com'
}, {
	id: 2,
	email: 'b@a.com'
}, {
	id: 3,
	email: 'c@a.com'
}];

userList.forEach(({ email }) => { // Destructuring array element property
	console.log(email);
});



/*
	Modules

	ES6 Modules implementation is performed in the following branches - 
	1) modules-object-library
	2) modules-individual-export
	3) modules-direct-export
	4) modules-export-from
*/



/* 
	Array.from 
*/
const listItems = document.querySelectorAll('li'),
	listItemsArray = Array.from(listItems); // Convert nodelist to array

listItemsArray.forEach(function(item) {
	item.innerHTML < 10 ? item.style.color = 'red' : '';
});	



/*
	ES6 Promises 
*/
const asyncOperation = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve();
	}, 2000);
});

// Async operation result to be obtained here
asyncOperation
.then(() => {
	console.log('Promise resolved');
})
.catch(() => {
	console.log('Promise rejected');
});



/* 
	ES6 Maps
*/
const map = new Map();
map.set('id', 12432);
map.set('type', 'user');
console.log(map);
console.log(map.get('id'));
console.log(map.size);

map.clear();
console.log(map);

map.set('id', 12432);
map.set('type', 'user');
console.log(map.has('id'));

console.log(map.entries()); // Map iterators
console.log(map.keys());
console.log(map.values());

for(var [mapKey, mapValue] of map.entries()) { // For of implementation
	console.log(`${mapKey} : ${mapValue}`);
}

const mapId = 'id',
	newMap = new Map();

newMap.set(mapId, 66534); // Set primitives as map keys i.e. string, number etc.
console.log(newMap.get(mapId));



/*
	ES6 WeakMaps
*/
const weakMap = new WeakMap(), 
	wkobj = {};
weakMap.set(wkobj, 213456); // No primitive types allowed as keys
console.log(weakMap.get(wkobj));
//console.log(weakMap.entries()); // Not available as weakmaps are immutable












