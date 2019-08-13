import { FETCH_MOVIE, FETCH_RELATED_MOVIES, SEARCH_UPDATE } from '../actions/types';


const initialState = {
    movieName: "",
    item: {},
    relatedItems: []
}
export default function (state = initialState, action) {


    switch (action.type) {
        case FETCH_MOVIE:
            return ({
                ...state,
                item: action.payload
            });
        case FETCH_RELATED_MOVIES:
            return ({
                ...state,
                relatedItems: action.payload
            });
        case SEARCH_UPDATE:
            return ({
                ...state,
                movieName: action.movieName,


            })


        default:
            return state;

    }
}