import React, { Component } from 'react';


import SearchBar from '../containers/search_bar';
import FilmList from '../containers/film_list';



export default class App extends Component {

  

  render() {
    return (
      <div>
        <SearchBar />
        <FilmList />
      </div>
    );
  }
}



