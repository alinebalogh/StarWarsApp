import { combineReducers } from 'redux';
import FilmReducer from './reducer_films';
import PeopleReducer from './reducer_people';

const rootReducer = combineReducers({
  films: FilmReducer,
  people: PeopleReducer
});

export default rootReducer;
