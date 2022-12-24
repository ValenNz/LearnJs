/* Tampilkan 10 data film */
/* Fetch (vanila js) */

/* Button Search */
const searchButton = document.querySelector('.search-button')
searchButton.addEventListener('click', async function(){ // didaalam fn akan ada async
    const inputKeyword = document.querySelector('.input-keyword')
    const movies = await getMovies(inputKeyword.value) // function untuk ambil movie dari input user berupa | await karna fn merupakan async tunggu sampai promes resolved
    updateUI(movies) // funtion untuk looping cards
})

/* Button Details (event binding) */
document.addEventListener('click', async function(e){// simpan evnt handler
    if( e.target.classList.contains('modal-detail-button')){ // jika elemnt yang kita click modal-button
        const imdbid = e.target.dataset.imdbid // ambil detailnya dari data
        const movieDetail = await getMovieDetail(imdbid) // dapatkan detailnya
        updateUIDetail(movieDetail) // masukan data kesini llalu tampilkan ke function updateUIDetail
    }
})

/* Function get detail */
function getMovieDetail(imdbid){
    return fetch('http://www.omdbapi.com/?apikey=b418eed5&i=' + imdbid)
    .then(response => response.json()) // ketika berhasil rubah response ke json supaya berbentuk object
    .then(m => m)
}

/* Function update ui details */
function updateUIDetail(m){
    const movieDetail = showMovieDetails(m)
    const modalBody = document.querySelector('.modal-body')
    modalBody.innerHTML = movieDetail
}

/* Function get movies */
function getMovies(keyword){
    return fetch('http://www.omdbapi.com/?apikey=b418eed5&s=' + keyword) 
    .then(response => response.json()) // ketika berhasil rubah response ke json supaya berbentuk object
    .then(response => response.Search) // mengembalikan object berupa data
              
}

/* Functoin update ui when search */
function updateUI(movies){
    let cards = '' // make var card dengan setiap cards akan ditumpuk
    movies.forEach(m => cards += showCards(m)) // var movie akan di loop dan setiap lopingan akan disamakan dengan var m dengan arrow fnction
    const movieContainer = document.querySelector('.movie-container') // tangkap movie container
    movieContainer.innerHTML = cards // menyimpan kumpulan cards ke dalam class arrow di html

}

/* Function cards */
function showCards(m){
    return `<div class="col-md-4 my-3">
                <div class="card">
                    <img src="${m.Poster}" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">${m.Title}</h5>
                        <p class="card-text">${m.Year}</p>
                        <a href="#" class="btn btn-primary modal-detail-button" data-bs-toggle="modal" data-bs-target="#movieDetailModal" data-imdbid="${m.imdbID}">Show Details</a>
                    </div>
                </div>
            </div>`
}

/* Function Movie Details */
function showMovieDetails(m){
    return ` <div class="container-fluid">
                <div class="row">
                    <div class="col-md-3">
                        <img src="${m.Poster}" class="img-fluid">
                    </div>
                    <div class="col-md">
                        <ul class="list-group">
                            <li class="list-group-item"><h4>${m.Title}${m.Year}</h4></li>
                            <li class="list-group-item"><strong>Director : </strong>${m.Director}</li>
                            <li class="list-group-item"><strong>Actors : </strong>${m.Actors}</li>
                            <li class="list-group-item"><strong>Writer : </strong>${m.Writer}</li>
                            <li class="list-group-item"><strong>Plot : </strong>${m.Plot}</li>
                        </ul>
                    </div>
                </div>
            </div>`
}