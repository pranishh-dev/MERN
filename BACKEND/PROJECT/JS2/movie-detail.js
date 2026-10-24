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
        <div>
        <img src="${movie.Poster}" alt="">
        </div>

        <div>
            <h2>${movie.Title}</h2>
            <h5>Genre: ${movie.Genre}</h5>
            <section>
                <span>${movie.Year}</span>
                <span>${movie.Rated}</span>
                <span>${movie.Runtime}</span>
                <span>IMDb Rating: ${movie.imdbRating} / 10</span>
            </section>

            <div>
                <p>${movie.Plot}</p>
            </div>
        </div>`
}