import React from 'react';

const FilmListDetail = ({film}) => {
    const d = new Date(film.release_date);

    return(
            <div className="detail">
                <div className="detail__title-wrap">
                    <h2 className="detail__title">{film.title}</h2>
                    <p className="detail__subtext"> Director: {film.director} / Producer: {film.producer}  </p>
                    <p className="detail__subtext"> Episode: {film.episode_id}</p>
                </div>
                
                <h2 className="detail__subtitle">Description:</h2>
                <p className="detail__text">{film.opening_crawl}</p>
                <p className="detail__subtext" >Release date: {d.toLocaleDateString({year: 'numeric', month: 'long', day: 'numeric' })}</p>
            </div>
        
    );

    
};

export default FilmListDetail;