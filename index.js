const cats = ["Milo", "Otis", "Garfield"];
console.log(cats)
beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  });
function destructivelyAppendCat(name) {
    cats.push(name)};
    destructivelyAppendCat("Ralph");
    console.log(cats);
function destructivelyPrependCat(name) {
    cats.unshift(name)}
    destructivelyPrependCat("Bob")
    console.log(cats)
function destructivelyRemoveLastCat(name) {
    cats.pop(name)};
    destructivelyRemoveLastCat("Ralph");
    console.log(cats);
function destructivelyRemoveFirstCat(name) {        cats.shift(name)};
    cats.shift("Bob");
    console.log(cats);
function appendCat(name) {
    let newCats = [...cats, "Broom"]
    return newCats
}
console.log(newCats)
function prependCat(name) {
    let newCats = ["Arnold", ...cats]
    return newCats
}
console.log(newCats)
function removeLastCat() {
    return cats.slice(0, -1)}
    removeLastCat()
console.log(cats)
function removeFirstCat() {
    return cats.slice(1)}
    removeFirstCat()
    console.log(cats)
