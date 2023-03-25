// commands:
// addMovie {movie name}" – add the movie
// "{movie name} directedBy {director}" – check if the movie exists and then add the director
// "{movie name} onDate {date}" – check if the movie exists and then add the date
function movieParser(input) {
    let movies = [];

    for (const line of input) {
        let commandTokens = line.split(" ");
        let movieName = "";

        if (line.includes('addMovie')) {
            movieName = commandTokens.slice(1).join(" ");
            addMovie(movieName);
            

        } else if (line.includes('directedBy')) {
            let indexOfCommand = commandTokens.indexOf('directedBy');
            movieName = commandTokens.slice(0, indexOfCommand).join(" ");
            let director = commandTokens.slice(indexOfCommand + 1).join(" ");

            directedBy(movieName, director);
       
        } else {
            let indexOfCommand = commandTokens.indexOf('onDate');
            movieName = commandTokens.slice(0, indexOfCommand).join(" ");
            let date = commandTokens.slice(indexOfCommand + 1).join(" ");

            addDate(movieName, date);

        }
        
    }

    for (const movie of movies) {
        if(movie.hasOwnProperty('name') && movie.hasOwnProperty("director") && movie.hasOwnProperty("date")) {
            console.log(JSON.stringify(movie));

        }
        
        
    }

    function addMovie(name){
        movies.push({name});
    }

    function directedBy(name, director) {
        let movie = movies.find((m) => m.name === name);
        //returns undefine if movie ,is not fount//which is falsy

        if(movie) {
            movie.director = director;
        }
    }

    function addDate(name, date) {
        let movie = movies.find((m) => m.name === name);
        if(movie) {
            movie.date = date;
        }

    }

}

movieParser([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ]
    )

movieParser([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
    ]
    )    