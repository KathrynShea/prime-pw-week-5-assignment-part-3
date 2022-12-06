console.log('***** Music Collection *****')
let collection = [];

function addToCollection(title, artist, yearPublished) {
    collection.push({title, artist, yearPublished});
    return collection.at(-1);
}


// Test addToCollection
console.log('Just added', addToCollection('Oops!... I Did It Again', 'Britney Spears', 2000));
console.log('Just added', addToCollection('thank u, next', 'Ariana Grande', 2019));
console.log('Just added', addToCollection('No More Drama', 'Missy Elliott', 2001));
console.log('Just added', addToCollection('Sing to the Moon', 'Laura Mvula', 2013));
console.log('Just added', addToCollection('Voodoo', "D'Angelo", 2000));
console.log('Just added', addToCollection('Iconology', 'Missy Elliott', 2019));

console.log(collection);