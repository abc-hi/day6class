class Movie {
  // Constructor
  constructor(title, studio, rating) {
      this.title = title;
      this.studio = studio;
      this.rating = rating || "PG";
  }

  // Method to filter movies with a rating of "PG"
  static getPG(movies) {
      return movies.filter(movie => movie.rating === "PG");
  }
}

// Create an instance of Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”
const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG­13");

// Print details of the movie
console.log(`Title: ${casinoRoyale.title}`);
console.log(`Studio: ${casinoRoyale.studio}`);
console.log(`Rating: ${casinoRoyale.rating}`);

// Create an array of Movie instances
const movies = [
  new Movie("Movie1", "Studio1", "PG"),
  new Movie("Movie2", "Studio2", "R"),
  new Movie("Movie3", "Studio3", "PG"),
  new Movie("Movie4", "Studio4", "G")
];

// Get only "PG" rated movies
const pgMovies = Movie.getPG(movies);

// Print details of "PG" rated movies
console.log("\nPG Rated Movies:");
pgMovies.forEach(movie => {
  console.log(`Title: ${movie.title}, Rating: ${movie.rating}`);
});
