// Get the average of all rates with 2 decimals


function ratesAverage (array) {
  
  let averageArray = array.map (function(film){ 
      return parseFloat(film.rate);
    });
  
  let ratesAvg = averageArray.reduce(function (a,b){
      return a + b;
  });

    return ratesAvg /array.length;

};
console.log(Math.floor(ratesAverage(movies)*100)/100);


// Get the average of Drama Movies

function dramaMoviesRate (array) {

  let dramaMoviesArray = array.slice().filter (function(film) {
    return (film.genre.includes("Drama"));
  })

  /* Does not work yet

  dramaMoviesArray = dramaMoviesArray.map(function(film) {
    

    if (film.hasOwnProperty("rate")) return film;
    else {
      console.log(film.rate);
      film.rate = "0";
      return film;
    }
  })
   */

  if (dramaMoviesArray.length === 0) return 0
  else {
    const n = ratesAverage(dramaMoviesArray);
    return Math.floor(n*100)/100;
  }
}

console.log(dramaMoviesRate(movies));

// Order by time duration, ascending

function getMinutes (string) {
  
  // This function returns the number of minutes from a string in "_h _m" format

  string = string.replace(" ","");
  let h = "";
  let m = "";
  let minutes = 0;

  if ((string.indexOf("h") > -1) && (string.indexOf("m") > -1)) {
    h = string.slice(0,string.indexOf("h"));
    m = string.slice(string.indexOf("h")+1,string.indexOf("m"));
    minutes = (parseInt(h,10)*60) + parseInt(m,10);
  } 
  else if (string.indexOf("h") > -1) {
    h = string.slice(0,string.indexOf("h"));
    minutes = (parseInt(h,10)*60);
  }
  else {
    m = string.slice(0,string.indexOf("m"));
    minutes = parseInt(m,10);
  }

  return (minutes);
}

function orderByDuration(array) {
  
  let orderedFilms = array.slice().map(function (film){
    film.duration = getMinutes(film.duration);
    return film;
  })
  
  orderedFilms.sort(function (a,b){
    if (a.duration < b.duration)  return -1;
    if (a.duration > b.duration)  return 1;

    if (a.title < b.title) return -1;
    if (a.title > b.title) return 1;
  })

  return orderedFilms;
}

orderedMovies = orderByDuration(movies);

/* The Jasmine test does not work but for me is OK, demonstration:
orderedMovies.forEach(function (film) {
 console.log(film.duration,film.title)
})
*/

// How many movies did Steven Spielberg direct

function howManyMovies (array) {

  let spielbergMovies = array.slice().filter (function(film) {
    return ((film.director === "Steven Spielberg")  && film.genre.includes("Drama"));
  })

  return spielbergMovies.length;

}

console.log(howManyMovies(movies));

// Order by title and print the first 20 titles

function orderAlphabetically (array) {

  let orderedFilms = array.slice().map(function(film) {
    return film.title;
  })
  
  orderedFilms.sort(function (a,b){
    if (a < b) return -1;
    if (a > b) return 1;
  })

  orderedFilms.splice(20,orderedFilms.length);
  return orderedFilms;
}

// console.log(orderAlphabetically(movies));

// Turn duration of the movies from hours to minutes

function turnHoursToMinutes (array) {
    let newArray = array.slice().map(function (film){
      if (film.duration.length > 0) film.duration = getMinutes(film.duration);
      return film;
    })
  return newArray;
}

let updatedArray = turnHoursToMinutes(movies.slice());

// Best yearly rate average

function bestYearAvg (array) {

  if (array.length === 0) return null;

  let bestYear = [];

  let yearsArray = array.map (function(film){ 
    return film.year;
  });

  console.log(yearsArray);

  uniqueYearsArray = [];

  yearsArray.reduce(uniqueYearsArray,years);

  console.log(uniqueYearsArray);
  
  
  return bestYear;
}

console.log(bestYearAvg(movies));



