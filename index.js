 const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    cats.push("Ralph")
}

function destructivelyPrependCat(name) {
    cats.unshift("Bob")
}

function destructivelyRemoveLastCat() {
    cats.pop()
}

function destructivelyRemoveFirstCat(){
    cats.shift()
}

function appendCat() {
    let newCats = [...cats,"Broom"]
    return newCats
}

function prependCat(name) {
    let prependCats = ["Arnold",...cats]
    return prependCats
}

function removeLastCat() {
    let noLastCat = cats.slice(0,cats.length -1)
    return noLastCat
}

function removeFirstCat() {
    let noFirstCat = cats.slice(1)
    return noFirstCat
}