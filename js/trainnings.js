'use strcict'
let numberOfFilms;
console.log(numberOfFilms);

function start() {
    numberOfFilms = +prompt('сколько фильмов вы уже посмотрели', '');
    
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('сколько фильмов вы уже посмотрели', '');
    }
}

start();
    
let personalMovitDB = {
    count : numberOfFilms, 
    movies : {},
    actors : {},
    genres : [],
    privat : true
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let a = prompt('название фильма', ''),
            b = prompt('на сколько балов их оцениваете', '');
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovitDB.movies[a] = b;
        } else {
            i--;
            console.log('error empty');
        }; 
    };
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovitDB.count < 10) {
        console.log('меньше 10 фильмов')
    } else if (personalMovitDB.count < 30) {
        console.log('от 10 до 30 фильмов')
    } else {
        console.log(' не от 0 до 30')
    }
}

detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovitDB);
    }
}

showMyDB(personalMovitDB.privat);

function writeYourGenres() {
    for (let i = 1; i < 4; i++) {
        personalMovitDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}?`)
    };
}

writeYourGenres();