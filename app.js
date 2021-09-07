let numberOfFilms = prompt ("Сколько фильмов вы уже посмотрели?");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for(let i = 0; i < 2; i++) {

    let lastMovie = prompt("Один из последних просмотренных фильмов?");
    let ratingMovie = prompt("На сколько оцените его?");
    
    personalMovieDB.movies[lastMovie] = ratingMovie;
}

console.log(personalMovieDB);