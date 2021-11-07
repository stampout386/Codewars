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
