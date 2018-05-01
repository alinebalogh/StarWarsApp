import { FETCH_FILMS } from '../actions/index';

export default function(state = [], action){
    switch(action.type){
        case FETCH_FILMS:
            return  [action.payload.data];
    }
    return state;
}