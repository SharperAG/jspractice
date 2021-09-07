/* 
let country = "Argentina";

let someStr = "My motherland is Dagestan, i like tis place";

let values = [9, 4,1,3,7,3];

let bigStor = "in this store u can buy whatever u like"; */

/* console.log(bigStor.substr(2,11));
console.log(someStr.slice(3,20));

console.log(country.toLowerCase());
console.log(values.sort()); */


let someval = "19px";

console.log(parseInt(someval));




/* 
let numberOfFilms = prompt ("Сколько фильмов вы уже посмотрели?");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let i =0; 

function askMovie() {
    do{

        let a = prompt("Один из последних просмотренных фильмов?");
        let b = +prompt("На сколько оцените его?");
    
        if( a != "" && a != null && a.length < 50 &&  b != "" && b != "null" ) {
            personalMovieDB.movies[a] = b;
        } else {
            alert("Введите значение правильно");
            i--;
        }
        i++;
        
    } while(i<2) ;
}

function amountMovie(someVal) {
    if ( someVal < 10) {
        console.log ("Просмотрено довольно мало фильмов");
    } else if (someVal >= 10 && someVal <= 30) {
        console.log ("Вы классический зритель");
    } else if ( someVal >= 30) {
        console.log ("Вы киноман");
    } else {
        console.log( "Произошла ошибка");
    }
}

let moviesAmount = personalMovieDB.count;

amountMovie(moviesAmount);

askMovie();

const square = function(a,b) {
    return (a + b) * 2;
};

console.log ( `square equal ${square(5,5)}`);


console.log(personalMovieDB); //main block

const rectDistance = (val1, val2) => (val1*2) + (val2*2);
;

console.log (`длина прямоугольника равна ${rectDistance(10,15)}`);
 */
/* if ( 3 != 0) {
    console.log ("thre not equal zero");
} else {
    console.log( "3 equal 0");
}
 

let city = prompt("Enter name of city");

switch (city) {
    case "London":
        console.log("It's Britain");
        break;
    case "Dubai":
        console.log("It's UAE");
        break;
    case "Moscow":
        console.log("It's Russia");
        break;
    default:
        console.log("Choose another");
}

city == "Deli" ? console.log("India") : console.log("try again"); */

let val = 10;

/* while (val < 15) {
    console.log(` value is ${val}`);

    val++;

    if(val == 15) {
        console.log(`stop, value is ${val} now`);
    }
}

do{
    console.log(` value is ${val}`);
    val++;
} while( val < 18);

for(let i = 1; i < 10; i++) {
    console.log(` i equal ${i}`);
} */

/* for (let i = 1 ; i < 0; i++){
    console.log( `i equal ${i}`);

    if(i === 49382) {
        break;
    }
} */