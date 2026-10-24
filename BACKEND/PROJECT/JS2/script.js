
let movieInput = document.querySelector("#movie-input")
let movieHub = document.querySelector("#movie-hub")

async function getMovies(movieName) {
    movieHub.innerHTML = `<div class="loader"></div> `

    let res = await fetch(`http://www.omdbapi.com/?apikey=bdc32641&s=${movieName}`)
    let data = await res.json()
    // console.log(data);

    if (data.Response === "True") {
        displayMovies(data.Search)
    } else {
        movieHub.innerHTML = `<p>${data.Error}</p>`
        console.log(data.Error);
    }
}

function displayMovies(movies) {
    movieHub.innerHTML = ""
    movies.forEach((movie) => {
        // console.log(movie);
        let movieCard = document.createElement("div")

        movieCard.classList.add("movie-card")
        movieCard.dataset.imdbID = `${movie.imdbID}`

        movieCard.innerHTML =
            `
            <div>
                <img src="${movie.Poster}" alt="${movie.Title} Poster but not found">
            </div>
            <div>
                <p>${movie.Title}</p>
                <p>${movie.Year}</p>
            </div>
            `
        movieHub.append(movieCard)

    })
}

const form = document.querySelector("form")
form.addEventListener("submit", (e) => {
    e.preventDefault()
    let movieTitle = movieInput.value.trim()

    if (!movieTitle) return;

    getMovies(movieTitle)
})

movieHub.addEventListener("click", (e) => {
    e.stopPropagation()

    let movieClick = e.target.closest(".movie-card")
    let imdbID = movieClick.dataset.imdbID
    // console.log(imdbID);

    location.href = `movie-detail.html?id=${imdbID}`
})
