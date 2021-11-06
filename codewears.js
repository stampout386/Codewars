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
