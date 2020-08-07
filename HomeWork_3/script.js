"use Strict";

let numberOfFilms;

function start () {
    numberOfFilms = +prompt('Скільки фільмів ви уже побачили?','');

        while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Скільки фільмів ви уже побачили?','');
        }
}

start();

const  personalMovieDB = {
   count : numberOfFilms,
    movies : {},
     actors : {},
      genres : [],
      privat : false
   };

function rememberMyFilm() {
for (let i = 1; i < 2; i++){


    const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', '');

      if (a != null && b != null && a != '' && b != '' && a.length < 50 ) {
        personalMovieDB.movies[a] = b;
        console.log('done');
      } else {
          console.log ('ERror');
          i--;
    }
 }
}
rememberMyFilm();

function detectPersonalLevel() {


if (personalMovieDB.count < 10) {
    console.log('Переглянута дуже мала кількість фільмів!');
} else if (personalMovieDB.count < 10 && personalMovieDB.count > 30 ) {
    console.log('Ви Любитель кіно!:)');
} else if (personalMovieDB.count >= 30 ) {
    console.log('Ви кіноман!');
} else {
    console.log('Виникла помилка!');
}
console.log(personalMovieDB);
}

detectPersonalLevel();


function showMyDb (hidden) {
    if (!hidden){
        console.log(personalMovieDB);
    }
}

showMyDb(personalMovieDB.privat);

function writeYourGenres () {
    for(let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
} 

writeYourGenres();