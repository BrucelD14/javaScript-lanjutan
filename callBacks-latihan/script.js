$.ajax({
    url: 'https://api.themoviedb.org/3/movie/76341?api_key=6c2abd54075d8a09f315ac2769e60c4e',
    success: results => {
        const movies = results.genres;
        console.log(movies);
        let cards = '';
        movies.forEach(m => {
            cards += `<div class="col-md-4 my-3">
                        <div class="card">
                            <img src="" class="card-img-top">
                            <div class="card-body">
                                <h5 class="card-title">${m.name}</h5>
                                <h6 class="card-subtitle mb-2 text-muted">${m.id}</h6>
                                <a href="#" class="btn btn-primary" data-toggle="modal" data-target="#movieDetailModal">Show Details</a>
                            </div>
                        </div>
                    </div>`;
        });
        $('.movie-container').html(cards);
    },
    error: (e) => {
        // jika error
        console.log(e.responseText);
    }
});