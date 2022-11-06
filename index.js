// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat() {
    cats.push("Ralph");
}

function destructivelyPrependCat() {
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat() {
    var newCats = cats.slice();
    newCats.push("Broom");
    return newCats;
}

function prependCat() {
    var newCats = cats.slice();
    newCats.unshift("Arnold");
    return newCats;
}

function removeLastCat() {
    var Gatos = cats.slice();
    Gatos.pop();
    return Gatos;
}
function removeFirstCat() {
    var Gotos = cats.slice();
    Gotos.shift();
    return Gotos;
}
