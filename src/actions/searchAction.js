import { SEARCH_UPDATE } from './types';
import { fetchRelatedMovies } from '../actions/relatedVideoAction';
export const searchAction = (searchValue) => (dispatch) => {

    dispatch({
        type: SEARCH_UPDATE,
        movieName: searchValue,
    });
    dispatch(fetchRelatedMovies(searchValue))

}



