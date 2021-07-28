const { transpose } = require('./matrix');


const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) return true;
    }
    const newArr = transpose(letters);
    for (l of newArr) {
        if (l.includes(word)) return true;
    }
    return false;
}

module.exports = wordSearch

