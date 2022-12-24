/* Tampilkan 10 data film */
// 13:19

/* jquery search */
$('.search-button').on('click', function() { //cari class ketika diclick jalankan function dibawah
    /* jquery cards */
    $.ajax({ // $ : jquery
        url: 'http://www.omdbapi.com/?apikey=b418eed5&s=' + $('.input-keyword').val(), // property alamat req data
        success : results => { // jika succes menampilkan yang ada para property success
            const movies = results.Search // key searh akan disimpan ke var movies 
            let cards = '' // make var card dengan setiap cards akan ditumpuk
            movies.forEach( m => { // var movie akan di loop dan setiap lopingan akan disamakan dengan var m dengan arrow fnction
                cards += showCards(m)
            })
            $('.movie-container').html(cards) // menyimpan kumpulan cards ke dalam class arrow di html

            /* jquery detail movie */
            $('.modal-detail-button').on('click', function() { // cari eemnt modal detail button ketika tombol onclick jalankan fn dibawah | pada diklkik dia req ajax
                $.ajax({
                    url: 'http://www.omdbapi.com/?apikey=b418eed5&i=' + $(this).data('imdbid'), // ambil detailnya dari data
                    success : m => {
                        const movieDetail = showMovieDetails(m)
                    $('.modal-body').html(movieDetail) // menyimpan kumpulan modals ke dalam class modal-body di html
                    }, error: (e) => { // jika error tampilkan function dibawah
                        console.log(e.responseText)
                    }
                })
            })

        }, error: (e) => { // jika error tampilkan function dibawah
            console.log(e.responseText)
        }
    })
})



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
function showMovieDetails(m){
    return ` <div class="container-fluid">
                <div class="row">
                    <div class="col-md-3">
                        <img src="${m.Poster}" class="img-fluid">
                    </div>
                    <div class="col-md">
                        <ul class="list-group">
                            <li class="list-group-item"><h4>${m.Title}${m.Year}</h4></li>
                            <li class="list-group-item"><strong>${m.Director}</strong></li>
                            <li class="list-group-item"><strong>${m.Actors}</strong></li>
                            <li class="list-group-item"><strong>${m.Writer}</strong></li>
                            <li class="list-group-item"><strong>${m.Plot}</strong></li>
                        </ul>
                    </div>
                </div>
            </div>`
}