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

console.log(ratesAverage(movies));

/*
let averageArray = movies.map (function(film){ 
  return parseFloat(film.rate);
});

let ratesAverage = averageArray.reduce(function (a,b){
  return a + b;
})

ratesAverage = ratesAverage / movies.length;


console.log(ratesAverage.toFixed(2));

*/




// Get the average of Drama Movies

// Order by time duration, ascending

// How many movies did Steven Spielberg direct

// Order by title and print the first 20 titles

// Best yearly rate average

// Turn duration of the movies from hours to minutes
