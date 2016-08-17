function canChangeWord(targetWord, testWord) {
    var matcher = new RegExp(testWord, "g");
    return matcher.test(targetWord);
}

function getChangedWord(fullword, change, origin) {
    var result = fullword.replace(change, origin);
    return result || fullword;
}

function getKeyChangeObj(origin, change) {
    return {key: origin, change: change};
}

/* test case */
console.log(canChangeWord('bsdfkhskdjf', 'fkhsk'));
console.log(canChangeWord('bsdfkhskdjf', 'fdf'));

console.log(getChangedWord('bsdfkhskdjf', 'fkhsk', 'aaaaa'));
console.log(getChangedWord('bsdfkhskdjf', 'fdf', 'aaaaa'));

var testStrs = [];

testStrs.push(getKeyChangeObj('a', 'bb'));
testStrs.push(getKeyChangeObj('b', 'aa'));

var quizStr = {origin: 'a', changed: 'bbbbbbbb'};
var changingWord = quizStr.changed;

function changeWord(changingWord, testStrObj) {
    if(canChangeWord(changingWord, testStrObj.change)) {
        changingWord = getChangedWord(changingWord, testStrObj.change, testStrObj.key);
        console.log(changingWord);
    }
}

// TODO 최소경로 알고리즘을 알아야 풀 수 있을듯

