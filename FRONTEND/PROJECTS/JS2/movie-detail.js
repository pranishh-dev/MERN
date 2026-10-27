let movieDetail = document.querySelector("#movie-detail")

const params = new URLSearchParams(location.search)
IMDb = params.get("id")?.trim();

if (IMDb) {
    searchMovie(IMDb)
}
else{
    movieDetail.innerHTML= `
    <p>No movie selected..</p>
    <button>
        <a href="index.html">Return to Search Bar</a>
    </button>`
}

async function searchMovie(IMDb) {
    movieDetail.innerHTML = `<div class="loader"></div>`

    const res = await fetch(`http://www.omdbapi.com/?apikey=bdc32641&i=${IMDb}&plot=full`)
    let data = await res.json()
    displayMovie(data)
}

function displayMovie(movie) {
    movieDetail.innerHTML = `
        <div class="wrapper">
            <div class="poster">
                <img src="${movie.Poster}" alt="${movie.Title} poster">
            </div>

            <div class="movie-info">
                <h2>${movie.Title}</h2>
                <h5>${movie.Genre}</h5>

                <ul>
                    <li>${movie.Year}</li>
                    <li>${movie.Rated}</li>
                    <li>${movie.Runtime}</li>
                    <li>IMDb ${movie.imdbRating}/10</li>
                </ul>

                <p>${movie.Plot}</p>
            </div>
        </div>`

}