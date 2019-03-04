import { print } from 'util';

// // Promises

// // get product
// // get price
// // print to screen the price

// var products = [
// 	{
// 		id: 1,
// 		title: 'Sneakers',
// 		price: 300
// 	}
// ];

// const getProducts = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		if (products.length >= 1) {
// 			resolve(products);
// 		} else {
// 			reject('Error: there is no product available');
// 		}
// 	}, 2000);
// });

// getProducts
// 	.then(products => {
// 		console.log(products);
// 		return products[0];
// 	})
// 	.then(products => {
// 		console.log(products);
// 		return products.price;
// 	})
// 	.then(price => {
// 		console.log(price);
// 		return price;
// 	})
// 	.catch(error => {
// 		console.log(error);
// 	});

// // ES7
// Includes
// const array = [1, 2, 3, 4, 5, 6];
// console.log(array.includes(7)); // returns false

// if (array.includes(6)) {
// 	console.log('yes we do');
// } else {
// 	console.log('sorry not here');
// }

// Exponentiation infix
// console.log(2 ** 4);

// ES8 / ES2017
// Object.values
// const user = {
// 	id: 345,
// 	name: 'joe',
// 	age: 30,
// 	location: 'NY'
// };
// console.log(Object.values(user));
// console.table(Object.values(user));
// // Object.entries
// console.table(Object.entries(user));
// for (let [key, value] of Object.entries(user)) {
// 	console.log(`key: ${key} value: ${value}`);
// }

// string padding
// const letter = 'A'

// console.log(letter.padStart(10, '*'))

// Object.getOwnPropertyDescriptors
// var product = {
// 	title: 'yeezy',
// 	price: 360,
// 	set discount(x) {
// 		this.d = x;
// 	},
// 	get discount() {
// 		return this.d;
// 	}
// };

// var product2 = Object.defineProperties(
// 	{},
// 	Object.getOwnPropertyDescriptors(product)
// );

// console.log(product2);

// Trailing commas
// const printUser = function(name, age) {
// 	console.log(`${name} ${age}`);
// };
// printUser('joe', 30);

// Async await***

const getUser = fname => {
	var user = {
		id: 3,
		fname: 'Jane'
	};
	return new Promise((resolve, reject) => {
		console.log('getting user');
		setTimeout(() => {
			if (fname == user.fname) {
				resolve(user);
			} else {
				reject('error');
			}
		}, 2000);
	});
};
const getTweet = id => {
	var tweet = {
		user_id: 6,
		post: 'Love star wars'
	};
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log('getting tweet');
			if (tweet.user_id === id) {
				resolve(tweet);
			} else {
				reject('error no tweets');
			}
		}, 2000);
	});
};

const printUserTweet = async fname => {
	try {
		const user = await getUser(fname); // waits for promise to resolve and then assigns to variable
		const tweet = await getTweet(user.id);
		console.log(`${user.fname} tweeted ${tweet.post}`);
		return `${user.fname} tweeted ${tweet.post}`;
	} catch (error) {
		console.log(`error: ${error}`);
	}
};

printUserTweet('Jane');

// ES9 / 2018
// Rest properties for objects
// let user = {
// 	fname: 'Joe',
// 	lname: 'Santos',
// 	age: 30,
// 	phone: '718-294-8978'
// };

// let { fname, lname, ...others } = user; // destructuring with spread operator
// console.log(`${fname} ${lname}`);
// console.log(others); // rest of the properties in object

// spread properties for objects
// let car = {
// 	title: 'benz',
// 	price: 100000,
// 	country: 'germany'
// };

// const newObject = {
// 	...user,
// 	...car
// };
// console.log(newObject);

// Asynchronous iteration - loop over bunch of promises in order
// const steps = [
// 	new Promise(resolve => resolve('We wake up')),
// 	new Promise(resolve => resolve('Eat breakfast')),
// 	new Promise(resolve => resolve('Code'))
// ];

// async function runSteps() {
// 	for await (const step of steps) {
// 		console.log(step);
// 	}
// }

// runSteps();

// ES10 / 2019
// Array.flat
// const names = [['Joe', 'Billy'], ['cindy', 'joe', [23, 4, 56]]];

// console.log(names.flat(3)); // Infinity

// Array.flatMap
// const names = ['Joe is at the store', 'Billy is programming'];

// let newArray = names.flatMap(value => value.split(' '));
// console.log(names);

// Trim start and trim end
// const user = '       Joe';
// console.log(user.trimStart()); // removes white space at start

// functionToString - prints function as a string
// const printName = () => {
// 	console.log('joe');
// };
// console.log(printName.toString());
