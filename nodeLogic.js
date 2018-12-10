var EverythingFunction = require("./main");

// Create a new TV object
var New = new EverythingFunction();
var search = process.argv[2];
var term = process.argv.slice(3).join(" ");


if (search === "concert-this") {
    console.log("Searching for A Concert");

    if (!term) {
        term = "Axwell";//Random term
    }
    New.findConcert(term);

} else if (search === "spotify-this-song") {
    console.log("Searching for Spotify Song");

    if (!term) {
        term = "The Sign";
    }
    New.findSong(term);

} else if (search === "movie-this") {
    console.log("Searching for Movies");

    if (!term) {
        term = "Mr. Nobody";
    }
    New.findMovie(term);

} else if (search === "do-what-it-says") {
    New.doRandom(term);
}