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
        if (numbers[i] != numbers[i - 1] && numbers[i] != numbers[i + 1]) {
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
    let c = +Object.keys(store).filter((key) => store[key] === 1);
    return c;
}

findUnique2(arr);

let str = 'Pig latin is cool';
let str2 = 'Hello world !';
let str3 = 'О tempora о mores';

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
var moveZeros = function (arr) {
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
