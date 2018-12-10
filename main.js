require("dotenv").config();
var Spotify = require("node-spotify-api");
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);
var axios = require("axios");
const fs = require('fs');
var hr = "\n🤡 🤡 🤡 🤡 🤡 🤡 🤡 🤡 🤡 🤡 🤡 🤡 🤡 🤡 🤡 🤡 🤡 🤡 🤡 🤡 🤡 🤡 🤡 🤡 🤡 🤡 🤡 🤡 🤡 🤡 🤡 🤡 🤡 🤡 🤡 🤡 🤡 🤡 🤡 🤡 🤡 🤡 🤡 🤡 🤡 🤡 🤡 🤡 🤡 🤡 🤡 🤡 🤡 🤡 🤡 🤡 🤡 🤡 🤡 🤡 🤡 🤡 🤡 🤡 🤡 🤡 🤡 🤡 🤡 🤡 🤡 🤡 🤡 🤡 🤡 🤡 🤡 🤡 🤡 🤡 🤡 🤡 🤡 🤡 🤡 🤡 🤡 🤡 🤡 🤡 🤡 🤡 🤡 🤡 🤡 🤡\n";

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
                console.log(hr);
            }
        );
        fs.appendFile('random.txt', 'URL', (err) => {
            if (err) throw err;
            console.log('Ayooo Success');
        });
    };


    this.findSong = function song(songName) {
        spotify.search(
            {
                type: "track",
                query: songName,
                limit: 1
            },
            function (err, data) {
                if (err) {
                    return console.log("Error occurred: " + err);
                }

                var x = data.tracks.items[0];
                var allArtist = [];
                for (i = 0; i < x.artists.length; i++) {
                    allArtist.push(x.artists[i].name);
                }

                var showDatabase = [
                    `Song Name: ${x.name}`,
                    `Artist: ${allArtist.join(", ")}`,
                    `Album: ${x.album.name}`,
                    `Preview ${x.preview_url}`

                ]
                console.log(showDatabase);
                console.log(hr);
            }
        );
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
                console.log(hr);
            }
        );
        fs.appendFile('random.txt', 'URL', (err) => {
            if (err) throw err;
            console.log('Ayooo Success');
        });
    };

    this.doRandom = function () {
        var randomNum = Math.floor(Math.random()*3);
        var functionArray = [
            this.findConcert(),
            this.findSong("The Sign"),
            this.findMovie() 
        ];
        var randomReturn = functionArray[randomNum];

        console.log(randomReturn);

        fs.appendFile('random.txt', 'URL', (err) => {
            if (err) throw err;
            console.log('Sucess random');
        });

    };


}
    module.exports = EverythingFunction;

