function anagrams(word, words) {
	const length = word.length;
	const sample = word.split('').sort().join('');
	return words
		.filter((w) => w.length === length)
		.filter(function (e) {
			return e.split('').sort().join('') === sample;
		});
}

let words = ['ehlol', 'loleh', 'hhhrd'];
console.log(anagrams('hello', words));

let arr = [1, 8, 4, 4, 6, 1, 8, 22, 22, 44, 44, 57, 57];

function findUnique(numbers) {
	numbers.sort();
	for (let i = 0; i < numbers.length; i++) {
		if (numbers[i] !== numbers[i - 1] && numbers[i] !== numbers[i + 1]) {
			console.log(numbers[i]);
			return numbers[i];
		}
	}
}

findUnique(arr);

function findUnique2(numbers) {
	const store = numbers.reduce((a, b) => {
		!a[b] ? (a[b] = 1) : a[b]++;
		return a;
	}, {});
	console.log(store);
	return +Object.keys(store).filter((key) => store[key] === 1);
}

findUnique2(arr);

function pigIt(str) {
	return str
		.split(' ')
		.map((item) => {
			if (!item.match(/^[.,:!?]/)) {
				item = item + item[0] + 'ay';
				item = item.slice(1);
			}
			return item;
		})
		.join(' ');
}

let names = [{name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'}];

function list(names) {
	let str = '';
	for (let i = 0; i < names.length; i++) {
		if (names[i].name === names[names.length - 1].name) {
			str += `${names[i].name}`;
		} else if (names[i].name === names[names.length - 2].name) {
			str += `${names[i].name} & `;
		} else {
			str += `${names[i].name}, `;
		}
	}
	return str;
}

list(names);

function digital_root(n) {
	let arr = String(n).split('');
	let sum = 0;
	arr.map((item) => (sum += Number(item)));
	if (sum > 10) {
		digital_root(sum);
	} else {
		console.log(sum);
		return sum;
	}
}

// digital_root(493193);

function digital_root2(n) {
	let result = 0;
	String(n)
		.split('')
		.map((num) => {
			result += Number(num);
		});
	return result >= 10 ? digital_root(result) : result;
}

let dna = 'ATTGC';

function DNAStrand(dna) {
	let arr = dna.split('');
	console.log(arr);
	let arr2 = arr.map((item) => {
		if (item === 'A') {
			return 'T';
		}
		if (item === 'T') {
			return 'A';
		}
		if (item === 'C') {
			return 'G';
		}
		if (item === 'G') {
			return 'C';
		}
	});
	return arr2.join('');
}

DNAStrand(dna);

function sumIntervals(intervals) {
	intervals = intervals.sort(function (a, b) {
		// O(n)
		return a[0] - b[0];
	});
	intervals = intervals.reduce(function (acc, el, index, array) {
		// O(n)
		const anterior = array[index - 1];
		if (array.length > 1 && anterior !== undefined) {
			if (el[0] < acc[acc.length - 1]) {
				if (el[1] >= acc[acc.length - 1]) {
					acc[acc.length - 1] = el[1];
				}
			} else {
				acc.push(...el);
			}
		} else {
			acc.push(...el);
		}
		return acc;
	}, []);
	let result = 0;
	for (let i = 0; i < intervals.length - 1; i += 2) {
		// O(2n)
		result += intervals[i + 1] - intervals[i];
	}
	return result;
}

let arrNull = [false, 1, 0, 1, 2, 0, 1, 3, 'a'];
let arr123 = [
	'a',
	'b',
	null,
	'c',
	'd',
	1,
	false,
	1,
	3,
	1,
	9,
	{},
	9,
	0,
	0,
	0,
	0,
	0,
	[],
	0,
	0,
	0,
	0,
	0,
];
let moveZeros = function (arr) {
	let newArr = [];
	let nullArr = [];
	arr.forEach((item) => {
		if (item === 0) {
			nullArr.push(item);
		} else {
			newArr.push(item);
		}
	});
	nullArr.forEach((item) => newArr.push(item));
	return newArr;
};

let domainName1 = 'http://github.com/carbonfive/raygun';
let domainName2 = 'http://www.zombie-bites.com';
let domainName3 = 'https://youtube.com';

function domainName(url) {
	if (url.includes('www.')) {
		let index1 = url.indexOf('www.') + 4;
		let index2 = url.lastIndexOf('.');
		let a = url.slice(index1, index2);
		console.log(url.slice(index1, index2));
		return a;
	} else if (url.includes('http://')) {
		let index1 = url.indexOf('http://') + 7;
		let index2 = url.indexOf('.');
		let a = url.slice(index1, index2);
		console.log(url.slice(index1, index2));
		return a;
	} else if (!url.includes('http://')) {
		let index1 = url.indexOf('https://') + 8;
		let index2 = url.indexOf('.');
		let a = url.slice(index1, index2);
		console.log(url.slice(index1, index2));
		return a;
	}
}

domainName(domainName3);
// domainName(domainName1);
// domainName(domainName2);

function dN(url) {
	return url.replace(/.+\/\/|www.|\..+/g, '');
}

// function tribonacci(signature, n) {
//     function trib(arr, n, b) {
//         for (let i = b; i < arr.length; i++) {
//             let nextNum = arr[i] + arr[i + 1] + arr[i + 2];
//             arr.push(nextNum);
//             if (arr.length === n) {
//                 console.log(arr);
//                 return arr;
//             } else {
//                 b++;
//                 trib(arr, n, b);
//             }
//         }
//     }
//     if (n === 0) {
//         return [];
//     } else {
//         let b = 0;
//         let arr = [...signature];
//         trib(arr, n, b);
//     }
// }

// tribonacci([1, 1, 1], 10);
// // tribonacci([0.5, 0.5, 0.5], 30);
//
// //Tribonacci Sequence
// function tribonacci1(signature, n) {
//     let trib = signature;
//     for (i = 3; i < n; i++) {
//         trib.push(trib[i - 1] + trib[i - 2] + trib[i - 3]);
//     }
//     return trib.slice(0, n);
// }

function persistence(num) {
	let count = 0;
	let num1 = num;

	function per(num1) {
		let arr = String(num1).split(',');
	}
}

let n = String(24);
console.log(n.split(''));
let arr222 = n.split('');
console.log(arr222[0] * arr222[1]);

function disemvowel(str) {
	return str.replace(/[aeiou]/gi, '');
}

function search(budget, prices) {
	let shops = [];
	prices.map((item) => {
		if (item <= budget) {
			shops.push(item);
		}
	});
	shops.sort(function (a, b) {
		return a - b;
	});
	return String(shops);
}

search(3, [6, 1, 2, 9, 2]);

function abbrevName(name) {
	let arr = name.split(' ');
	return `${arr[0][0].toUpperCase()}.${arr[1][0].toUpperCase()}`;
}

abbrevName('Evan Cole');

function adder(a, b) {
	console.log(a + b);
	return a + b;
}

adder(5, 5);

function finalGrade(exam, projects) {
	if (exam > 90 || projects > 10) {
		return 100
	}
	if (exam > 75 && projects >= 5) {
		return 90
	}
	if (exam > 50 && projects >= 2) {
		return 75
	} else {
		return 0
	}
}

console.log(finalGrade(100, 12))

function bmi(weight, height) {
	let dmi = weight / (height * height)
	if (dmi <= 18.5) {
		return "Underweight"
	}
	if (dmi <= 25) {
		return "Normal"
	}
	if (dmi <= 30) {
		return "Overweight"
	}
	if (dmi > 30) {
		return "Obese"
	}
}

console.log(bmi(80, 1.8))

function paperwork(n, m) {
	if (n < 0 || m < 0) {
		return 0
	} else {
		return n * m
	}
}

function remainder(a, b) {

	if (a > b && b === 0) {
		return NaN
	} else if (b > a && a === 0) {
		return NaN
	}
	return (a > b) ? a % b : b % a;

}

console.log(remainder(0, 0))

function NameMe(first, last) {
	this.firstName = first;
	this.lastName = last;
	return {name: this.firstName + ' ' + this.lastName};
}

let n = new NameMe('John', 'Doe');
n.firstName //Expected: John
n.lastName //Expected: Doe
n.name //Expected: John Doe

console.log(n)

const Person = function () {
	const person = {
		_name: "Leroy",
		_friends: [],
		fillFriends(f) {
			this._friends = f
		}
	};
	return person;
};

