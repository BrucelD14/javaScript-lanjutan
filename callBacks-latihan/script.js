$.ajax({
    url: 'https://api.themoviedb.org/3/movie/76341?api_key=6c2abd54075d8a09f315ac2769e60c4e',
    success: results => {
        console.log(results);
    },
    error: (e) => {
        // jika error
        console.log(e.responseText);
    }
});