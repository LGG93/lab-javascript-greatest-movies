// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?




function getAllDirectors(moviesArray) {
    let allDirectors = moviesArray.map((movie)=>{
        return movie.director
    })
    return allDirectors
}

let test= getAllDirectors(movies2);
console.log(test);





// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let moviesBySteven = moviesArray.filter((movie)=> {
        if (movie.director === "Steven Spielberg" && movie.genre.includes("Drama")){
            return movie
        }
    })
    return moviesBySteven.length
}

howManyMovies(movies2);



// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(movies) {
    if (!movies.length) {
      return 0;
    }
  

    let totalAverage = movies.reduce((a, b) => {

      if (b.score) {
        return a + b.score;
      } else {
        return a;
      }
    }, 0);
  
    return Number((totalAverage / movies.length).toFixed(2));
  }
  



// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesScore(movies) {
 
  let dramaMoviesArr = movies.filter(function (eachMovie) {
    return eachMovie.genre.includes("Drama"); 
  });

  return scoresAverage(dramaMoviesArr); 
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(moviesArray) {
  let moviesArr = [...moviesArray]


  moviesArr.sort((a, b) => {
    if (a.year > b.year) {
      return 1;
    } else if (b.year > a.year) {
      return -1;
    } else {
      if (a.title > b.title) {
        return 1;
      } else if (b.title > a.title) {
        return -1;
      }
      return 0;
    }
  });

  return moviesArr; 
}
 
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies){
  newArr = [...movies]
  sorted = newArr
  .sort((a,b) => {
    if (a.title > b.title){
      return 1;
    }else if (a.title < b.title){
      return -1;
    }else{
      return 0;
    }
  })
  .map((eachMovie)=> eachMovie.title)
  .slice(0,20);
  return sorted
  
  }

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
