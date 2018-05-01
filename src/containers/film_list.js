import React, { Component } from 'react';
import { connect } from 'react-redux';

import FilmListDetail from '../components/film_list-detail';

class FilmList extends Component{

    renderFilms(filmsData){
        
        return filmsData.results.map(function(e){
            const downArrowSvg = '<use class="icon" xlink:href="././assets/sprite/sprite.svg#down-arrow" />';

            return (
                <li className="list__item" id={`A${e.episode_id}`}>
                    
                    <input type="checkbox" id={e.episode_id}/>
                    <label htmlFor={e.episode_id} className="list__link">
                        <span className="list__title">{e.title}</span>
                        <span className="list__icon-arrow icon__arrow-down"><svg className="list__icon" dangerouslySetInnerHTML={{__html: downArrowSvg }} /></span>
                    </label>
                    <ul id="link" className="list__hidden">
                        <li>
                            <FilmListDetail film={e}/>                    
                        </li>
                    </ul>
                </li>
                );
        });
        
    }

    render(){
        if(!this.props.films){
            return (
                <div className="list">   
                    <ul className="list__group">
                        <li>Loading...</li>
                    </ul>
                </div>

            )
        }
        return(
            <div className="list">  
                <ul className="list__group">
                    {this.props.films.map(this.renderFilms)}
                </ul>
            </div>
        )
    }
}

function mapStateToProps({films}){
    return {films}
}

export default connect(mapStateToProps)(FilmList);