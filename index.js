// Write your solution here!
const cats = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendCat(catName) {
    cats.push(catName);
}

function destructivelyPrependCat(catName) {
    cats.unshift(catName);
}

function destructivelyRemoveLastCat() {
    cats.splice(-1, 1);
}

function destructivelyRemoveFirstCat() {
    cats.splice(0,1);
}

function appendCat(catName) {
    return [...cats, catName];
}

function prependCat(catName) {
    return [catName, ...cats];
}

function removeLastCat() {
    return cats.slice(0,-1);
}

function removeFirstCat() {
    return cats.slice(1);
}