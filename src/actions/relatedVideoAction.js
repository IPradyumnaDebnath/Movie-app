import { FETCH_RELATED_MOVIES } from './types';

export const fetchRelatedMovies = (movieName) => (dispatch) => {
    
if(movieName===""){
   
    fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=eb91b5abfbcc7efa7f6051420b8c41e2&language=en-US&page=1')
        .then(res => res.json())
        .then(relatedMovie => dispatch({
            type: FETCH_RELATED_MOVIES,
            payload: relatedMovie

        }
        ))
   
}else{
    fetch('https://api.themoviedb.org/3/search/movie?api_key=eb91b5abfbcc7efa7f6051420b8c41e2&query='+movieName)
        .then(res => res.json())
        .then(relatedMovie => dispatch({
            type: FETCH_RELATED_MOVIES,
            payload: relatedMovie

        }
        ))
    }

}