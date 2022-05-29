'use strcict'


    // return numberOfFilms;

    
let personalMovitDB = {

    count : 0, 
    movies : {},
    actors : {},
    genres : [],
    privat : true,
    start : function () {
        personalMovitDB.count = +prompt('сколько фильмов вы уже посмотрели', '');
        while (personalMovitDB.count == '' || personalMovitDB.count == null || isNaN(personalMovitDB.count)) {
            personalMovitDB.count = +prompt('сколько фильмов вы уже посмотрели', '');
            }
    },

    rememberMyFilms : function() {
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
    },

    detectPersonalLevel : function() {
        if (personalMovitDB.count < 10) {
            console.log('меньше 10 фильмов')
        } else if (personalMovitDB.count < 30) {
            console.log('от 10 до 30 фильмов')
        } else {
            console.log(' не от 0 до 30')
        }
    },

    showMyDB : function(hidden) {
        if (!hidden) {
            console.log(personalMovitDB);
        }
    },

    writeYourGenres : function() {
        for (let i = 1; i < 4; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}?`)
            if (genre === '' || genre === null) {
                prompt(`Ваш любимый жанр под номером ${i}?`)
                i--;
            } else {
                personalMovitDB.genres[i - 1] = genre;
            }
        };
        
        personalMovitDB.genres.forEach((item, i) => {
            console.log(`любимый жанр № ${i} - это ${item}`)
        });
    },

    toogleVisibleMyDB : function() {
        if (personalMovitDB.privat) {
            personalMovitDB.privat = false;
        } else {
            personalMovitDB.privat = true;
        }
    }

    
    
};


personalMovitDB.rememberMyFilms();
personalMovitDB.detectPersonalLevel();
personalMovitDB.showMyDB(personalMovitDB.privat);
personalMovitDB.writeYourGenres();
personalMovitDB.toogleVisibleMyDB()

console.log(personalMovitDB)