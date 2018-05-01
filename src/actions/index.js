import axios from 'axios';

const ROOT_URL = 'https://swapi.co/api/';

export const FETCH_FILMS = 'FETCH_FILMS';
export const FETCH_PEOPLE = 'FETCH_PEOPLE';

export function fetchFilms(term){


    const url = `${ROOT_URL}${!term?term='films': `films/?search=${term}`}/`;

    const request = axios.get(url);

    return{
        type: FETCH_FILMS,
        payload: request
    };
}

export function fetchPeople(url){
    const request = axios.get(url);

    return{
        type: FETCH_PEOPLE,
        payload: request
    };
}