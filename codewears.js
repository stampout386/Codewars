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

pigIt(str);
pigIt(str2);
pigIt(str3);
