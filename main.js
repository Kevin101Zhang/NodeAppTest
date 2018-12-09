require("dotenv").config();
var axios = require("axios");
const fs = require('fs');



var EverythingFunction = function () {
    this.findConcert = function (artist) {

        var URL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=88278a8149393f80e1f3304a58dad9c6";

        axios.get(URL).then(
            function (response) {

                var x = response.data[0];
                var showDatabase = [
                    `Name of Venue: ${x.venue.name}`,
                    `Venue Location: ${x.venue.city}, ${x.venue.country}`,
                    `Date of the Event: ${x.datetime}`
                ]

                console.log(showDatabase);
            }
        );
        fs.appendFile('random.txt', 'URL', (err) => {
            if (err) throw err;
            console.log('Ayooo Success');
        });
    };


    this.findSong = function () {
        //sporitfy API

    }

    this.findMovie = function (movie) {

        var URL = "http://www.omdbapi.com/?t=" + movie + "&apikey=3e2d0a11";

        axios.get(URL).then(
            function (response) {

                var x = response.data;
                var MovieDatabase = [
                    `Title of the movie: ${x.Title}`,
                    `Year the movie came out: ${x.Year}`,
                    `IMDB Rating of the movie: ${x.imdbRating}`,
                    `Rotten Tomatoes Rating of the movie: ${x.Ratings[0].Value}`,
                    `Country where the movie was produced: ${x.Country}`,
                    `Language of the movie: ${x.Language}`,
                    `Plot of the movie: ${x.Plot}`,
                    `Actors in the movie: ${x.Actors}`,
                ]

                console.log(MovieDatabase);
            }
        );
        fs.appendFile('random.txt', 'URL', (err) => {
            if (err) throw err;
            console.log('Ayooo Success');
        });
    };

};


module.exports = EverythingFunction;



// * Title of the movie.
//   * Year the movie came out.
//   * IMDB Rating of the movie.
//   * Rotten Tomatoes Rating of the movie.
//   * Country where the movie was produced.
//   * Language of the movie.
//   * Plot of the movie.
//   * Actors in the movie.
