
var word = 'baekjoon';
var alphabets = 'abcdefghijk';
var alphaLocations = [];

// 알파벳 a-z : String.fromCharCode() 97~122
for (var i = 97; i < 123; i++) {
    alphaLocations.push(word.indexOf(String.fromCharCode(i)));
}

console.log(alphaLocations.join(' '));