const tmdbKey = '410cd8ed686e74f7848ed5a30daf3446';
const tmdbBaseUrl = 'https://api.themoviedb.org/3/movie/550?api_key=410cd8ed686e74f7848ed5a30daf3446';
const playBtn = document.getElementById('playBtn');

const getGenres = async () => {
  const genreRequestEndPoint = '/genre/movie/list';
  const requestParams = `?api_key=${tmdbKey}`;
  const urlToFetch = `${tmdbBaseUrl}${genreRequestEndpoint}${requestParams}`;

  try {
    const response = await fetch(urlToFetch);
    if (response.ok){
      const jsonResponse = await response.json();
      const genres = jsonResponse.genres;
      return genres;
    }
  } catch (error){
    console.log(error);
  };
};

const getMovies = () => {
  const selectedGenre = getSelectedGenre();
};

const getMovieInfo = () => {};

// Gets a list of movies and ultimately displays the info of a random movie from the list
const showRandomMovie = () => {
  const movieInfo = document.getElementById("movieInfo");
  if (movieInfo.childNodes.length > 0) {
    clearCurrentMovie();
  }
};

getGenres().then(populateGenreDropdown);
playBtn.onclick = showRandomMovie;
