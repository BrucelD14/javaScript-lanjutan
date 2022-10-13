$.ajax({
    url: 'https://api.themoviedb.org/3/discover/movie?&api_key=e921a43f9bd163a2324b7f2e04e61e72',
    success: getMovies => {
        const movies = getMovies.results;
        let cards = '';
        movies.forEach(m => {
            cards += `<div class="col-md-4 my-3">
                        <div class="card">
                            <img src="https://image.tmdb.org/t/p/w500/${m.poster_path}" class="card-img-top">
                            <div class="card-body">
                                <h5 class="card-title">${m.title}</h5>
                                <h6 class="card-subtitle mb-2 text-muted">${m.release_date}</h6>
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