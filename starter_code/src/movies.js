// Get the average of all rates with 2 decimals


function ratesAverage (movies) {
  const ratesSum = movies.reduce(function (accumulator,value){
      let rate = value.rate;
      if (!rate) rate = 0;      // In case a movie has no rate
      return accumulator + parseFloat(rate);
  }, 0);

  // If we do not initialize to 0 the accumulator,
  // the first value of the accumulator would be the first
  // object of the array, not a number.

  const average = parseFloat ((ratesSum/movies.length).toFixed(2));
  return average;
};

// Get the average of Drama Movies

function dramaMoviesRate (movies) {

  const dramaMoviesArray = movies.filter (function(film) {
    return (film.genre.includes("Drama"));
  })

  if (dramaMoviesArray.length === 0) return 0
  else {
    const average = ratesAverage(dramaMoviesArray);
    return average;
  }
}

// Order by time duration, ascending

function orderByDuration(moviesArray) {
  
  const sorted = moviesArray.slice().sort(function (a,b){
    if (a.duration === b.duration) {
      return a.title.localeCompare(b.title);
    }
    return a.duration - b.duration;
  })
  
  return sorted;
}

// How many movies did Steven Spielberg direct

function howManyMovies (movies) {
  let spielbergMovies = movies.filter (function(film) {
    return ((film.director === "Steven Spielberg")  && film.genre.includes("Drama"));
  })

  return spielbergMovies.length;
}

// Order by title and print the first 20 titles

function orderAlphabetically (movies) {

  let orderedFilms = movies.map(function(film) {
    return film.title;
  })
  
  return orderedFilms.sort(function (a,b){
    return a.localeCompare(b);
  }).slice(0,20)

}


// Turn duration of the movies from hours to minutes

function getMinutes (string) {
  
  // This function returns the number of minutes from a string
  // in "_h _m" / "_h" or "_m" formats

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

function getMinutes(string) {

}

function turnHoursToMinutes (movies) {
    const newMovies = movies.map(function (film){

      // We must to create a new object with object.assign
      // otherwise we would mutate the object

      const newFilm = Object.assign ({},film);
      newFilm.duration = getMinutes(film.duration);
      return newFilm;

      /*
      The code above is equivalent to

      const newFilm = {
        title:filme.title,
        year:film.year,
        director:film.director,
        genre: film.genre,
        rate: film.rate,
        duration: film.duration
      }

        newFilm.duration = getMitutes(film.duration);

      */

    })
  return newMovies;
}

// Best yearly rate average

function bestYearAvg (movies) {

    //create an array with all singular year values

    const years = movies.reduce(function (accumulator,value) {
      if (!accumulator.includes(value.year)) accumulator.push(value.year);
      return accumulator;
    })

    // sort the array of years with a comparision function that
    // compares the average

    years.sort (function (a,b) {

      const bMovies = movies.filter(function(movie) {
        return movie.year === b;
      })

      const aMovies = movies.filter(function(movie) {
        return movie.year === a;
      })

      const aAverage = ratesAverages(aMovies);
      const bAverage = ratesAverages(bMovies);

      if (aAvearge === bAverage) {
        return Number(a) - Number(b);
      }
      return bAverage - aAverage;
    })

    const bestYear = years[0];

    if (!year) return null;

    const bestYearMovies = movies.filter(function (movie){
      return movie.year === bestYear;
    })

    return `The best yeat was ${bestYear} with an average rate of ${ratesAverage(bestYearMovies)`;

}
}