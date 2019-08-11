import { FETCH_MOVIE } from './types';


export const fetchMovie = (movieID) => (dispatch) => {
    console.log("MN", movieID)
    fetch('https://api.themoviedb.org/3/movie/' + movieID+'?api_key=eb91b5abfbcc7efa7f6051420b8c41e2')
        .then(res => res.json())
        .then(movie => dispatch({
            type: FETCH_MOVIE,
            payload: movie,
        }
        ))

}
