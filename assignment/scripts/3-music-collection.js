console.log("***** Music Collection *****");
let collection = [];

function addToCollection(title, artist, yearPublished, tracks) {
  collection.push({ title, artist, yearPublished, tracks });
  return collection.at(-1);
}

function showCollection(array) {
  console.log("There are", array.length, "items in the collection");

  for (let type of array) {
    console.log(
      type.title + " by " + type.artist + ", published in " + type.yearPublished
    );
    for (let i = 0; i < 3; i++) {
      console.log(
        i + 1 + ". " + type.tracks[i].name + ": " + type.tracks[i].duration
      );
    }
  }
}

function findByArtist(thisArtist) {
  let albumsByArtist = [];

  for (let i = 0; i < collection.length; i++) {
    if (collection[i].artist === thisArtist) {
      albumsByArtist.push(collection[i]);
    }
  }
  return albumsByArtist;
}

function search(object) {
  let newArray = [];
  if (object == undefined) {
    return collection;
  }
  if (Object.keys(object).length === 0) {
    return collection;
  }
  for (let i = 0; i < collection.length; i++) {
    if (
      collection[i].artist === object.name &&
      collection[i].yearPublished === object.year
    ) {
      for (let j = 0; j < 3; j++) {
        if (collection[i].tracks[j].name === object.trackName) {
          newArray.push(collection[i]);
        }
      }
    }
  }
  return newArray;
}

// Test addToCollection
console.log(
  "Just added:",
  addToCollection("Oops!... I Did It Again", "Britney Spears", 2000, [
    { name: "Opps!...I Did It Again", duration: "3:32" },
    { name: "Stronger", duration: "3:23" },
    { name: "Lucky", duration: "3:17" },
  ])
);
console.log(
  "Just added:",
  addToCollection("thank u, next", "Ariana Grande", 2019, [
    { name: "imagine", duration: "3:32" },
    { name: "needy", duration: "2:52" },
    { name: "NASA", duration: "3:02" },
  ])
);
console.log(
  "Just added:",
  addToCollection("No More Drama", "Missy Elliott", 2001, [
    { name: "Love", duration: "2:46" },
    { name: "Family Affair", duration: "4:27" },
    { name: "Crazy Games", duration: "3:24" },
  ])
);
console.log(
  "Just added:",
  addToCollection("Sing to the Moon", "Laura Mvula", 2013, [
    { name: "Like the Morning Dew", duration: "3:41" },
    { name: "Sing to the Moon", duration: "4:08" },
    { name: "Is There Anybody Out There?", duration: "5:12" },
  ])
);
console.log(
  "Just added:",
  addToCollection("Voodoo", "D'Angelo", 2000, [
    { name: "Playa Playa", duration: "7:07" },
    { name: "The Line", duration: "5:16" },
    { name: "The Root", duration: "6:33" },
  ])
);
console.log(
  "Just added:",
  addToCollection("Iconology", "Missy Elliott", 2019, [
    { name: "Throw It Back", duration: "3:13" },
    { name: "DripDemeanor", duration: "3:52" },
    { name: "Cool Off", duration: "2:16" },
  ])
);
console.log("Here is the full collection", collection);

//Test showCollection
console.log("Here are all the albums and tracks listed out:");
showCollection(collection);

//Test findByArtist
console.log("Albums by Ariana Grande", findByArtist("Ariana Grande"));
console.log("Albums by Missy Elliott", findByArtist("Missy Elliott"));
console.log("Albums by Justin Bieber", findByArtist("Justin Bieber"));

//Test search
console.log(
  'Albums by Ariana Grande in 2019 with track "NASA"',
  search({ name: "Ariana Grande", year: 2019, trackName: "NASA" })
);
console.log(
  'Albums by Ariana Grande in 2019 with track "imagine"',
  search({ name: "Ariana Grande", year: 2019, trackName: "imagine" })
);
console.log(
  "Albums by NO OBJECT SENT- should return whole collection",
  search()
);

console.log("Albums by Justin Bieber", search({ name: "Justing Bieber" }));
