const movieInput = document.querySelector("#movie-input");
const movieHub = document.querySelector("#movie-hub");
const trendingMovieHub = document.querySelector("#trending-movie-hub");
const form = document.querySelector("form");
const trendingSection = document.querySelector("#trending-movies");
const shuffleBtn = document.querySelector("#shuffle-movies");

// Search movies
async function getMovies(movieName) {
  movieHub.innerHTML = `<div class="loader"></div>`;

  try {
    const res = await fetch(
      `https://www.omdbapi.com/?apikey=bdc32641&s=${encodeURIComponent(movieName)}`,
    );

    const data = await res.json();

    if (data.Response === "True") {
      trendingSection.innerHTML = ` `;

      displayMovies(data.Search, movieHub);
    } else {
      trendingSection.innerHTML = `<p>${data.Error}</p>`;
    }
  } catch (error) {
    trendingSection.innerHTML = `<p>Something went wrong. Please try again.</p>`;
    console.error(error);
  }
}

// Display movie cards
function displayMovies(movies, container) {
  container.innerHTML = "";

  movies.forEach((movie) => {
    const movieCard = document.createElement("div");
    movieCard.classList.add("movie-card");
    movieCard.dataset.imdbID = movie.imdbID;

    const poster =
      movie.Poster && movie.Poster !== "N/A"
        ? movie.Poster
        : "https://placehold.co/300x450/151515/cccccc?text=No+Poster";

    movieCard.innerHTML = `
            <div>
                <img src="${poster}" alt="${movie.Title} poster" loading="lazy">
            </div>
            <div>
                <p>${movie.Title}</p>
                <p>${movie.Year}</p>
            </div>
        `;

    container.append(movieCard);
  });
}

// Movie titles for random recommendations
const trendingMovies = [
  // Action and superhero
  "The Dark Knight",
  "The Dark Knight Rises",
  "Batman Begins",
  "Inception",
  "The Matrix",
  "The Matrix Reloaded",
  "Avengers: Endgame",
  "Avengers: Infinity War",
  "Spider-Man: Into the Spider-Verse",
  "Spider-Man: Across the Spider-Verse",

  // Sci-fi
  "Interstellar",
  "Dune",
  "Dune: Part Two",
  "Arrival",
  "Blade Runner 2049",
  "The Martian",
  "Ex Machina",
  "Everything Everywhere All at Once",

  // Drama and classics
  "The Shawshank Redemption",
  "Fight Club",
  "The Godfather",
  "The Godfather Part II",
  "Forrest Gump",
  "The Green Mile",
  "Good Will Hunting",
  "Dead Poets Society",
  "12 Angry Men",
  "Schindler's List",

  // Thriller and mystery
  "Parasite",
  "The Prestige",
  "Se7en",
  "Shutter Island",
  "Gone Girl",
  "Prisoners",
  "Zodiac",
  "The Silence of the Lambs",

  // Crime
  "Pulp Fiction",
  "Goodfellas",
  "The Departed",
  "The Wolf of Wall Street",
  "Joker",

  // Animation
  "The Lion King",
  "Spirited Away",
  "Your Name",
  "Coco",
  "WALL-E",
  "Up",
  "Toy Story",
  "How to Train Your Dragon",

  // Other popular films
  "Whiplash",
  "The Lord of the Rings: The Fellowship of the Ring",
];

// Select random movies without changing the original array
function getRandomMovies(movies, count) {
  const shuffled = [...movies];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled.slice(0, count);
}

// Load random movie recommendations
async function showTrendingMovies() {
  trendingMovieHub.innerHTML = `<div class="loader"></div>`;

  const randomMovies = getRandomMovies(trendingMovies, 20);

  try {
    const moviePromises = randomMovies.map(async (movieName) => {
      const res = await fetch(
        `https://www.omdbapi.com/?apikey=bdc32641&t=${encodeURIComponent(movieName)}`,
      );

      const data = await res.json();

      return data.Response === "True" ? data : null;
    });

    const movies = await Promise.all(moviePromises);

    displayMovies(movies.filter(Boolean), trendingMovieHub);
  } catch (error) {
    trendingMovieHub.innerHTML = `<p>Couldn't load recommendations. Please try again.</p>`;
    console.error(error);
  }
}

// Search form submission
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const movieTitle = movieInput.value.trim();

  if (!movieTitle) return;

  getMovies(movieTitle);
});

// Smooth scroll when Explore Movies is clicked
const exploreBtn = document.querySelector('a[href="#trending-movies"]');

if (exploreBtn && trendingSection) {
  exploreBtn.addEventListener("click", (e) => {
    e.preventDefault();

    trendingSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}

// Shuffle recommendations
if (shuffleBtn) {
  shuffleBtn.addEventListener("click", showTrendingMovies);
}

// Open movie details when a card is clicked
document.addEventListener("click", (e) => {
  const movieClick = e.target.closest(".movie-card");

  if (!movieClick || !movieClick.dataset.imdbID) return;

  location.href = `movie-detail.html?id=${movieClick.dataset.imdbID}`;
});

// Load recommendations when the page opens
if (trendingMovieHub) {
  showTrendingMovies();
}
