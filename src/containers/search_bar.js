import React, { Component } from 'react'; 
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchFilms } from '../actions/index';

class SearchBar extends Component{
    
    constructor(props){
        super(props);

        this.state = {
                        movie: '',
                        sugestion:[],
                        click: ''
                    };
        this.onInputChange = this.onInputChange.bind(this);

        this.props.fetchFilms(this.state.movie);
        // this.props.fetchFilms = this.props.fetchFilms.bind(this);

    }

    onInputChange(event){
        this.setState({movie: event.target.value});
        const movies = this.props.films.map((e) => e.results);
        this.setState({sugestion: this.findMatches(event.target.value, movies)})
                
    }
    onListClick(e){
        const itens = document.querySelectorAll('.list__item')
        itens.forEach( e => e.classList.add("list__item-hide"));
        const id = "#A"+e.episode_id;
        const filter = document.querySelector(id);
        filter.classList.remove("list__item-hide");
        this.setState({sugestion: []});
    }

    findMatches(word , [movies]){
        if(!word ){
            const itens = document.querySelectorAll('.list__item')
            itens.forEach( e => e.classList.remove("list__item-hide"));
            return [];
        }
        return movies.filter(film => {
            const regex = new RegExp(word, "gi");
            
            return film.title.match(regex);
        });
        
    }

    displayMatches(sugestion){
        return sugestion.map((e) => {
           return( 
                <li 
                    key={e.episode_id} 
                    onClick={(f) => this.onListClick(e)}
                    className="searchbar__list-item"
                >
                    {e.title}
                </li> )
        } 
        )
    }

    render(){
            
        
        return(
            <div className="searchbar">
                <input 
                className="searchbar__input"
                placeholder="Select a especific movie by title"
                value= {this.state.movie}    
                onChange={this.onInputChange}
                />
                <ul className="searchbar__list-group">    
                    {this.displayMatches(this.state.sugestion)};
                </ul>
            </div>

        )
        
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ fetchFilms }, dispatch);
}
function mapStateToProps({films}){
    return {films}
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);