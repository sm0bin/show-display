import React from 'react';
import { Link } from 'react-router-dom';

const ShowCard = ({ show }) => {
    const { id, name, image, rating } = show;
    return (
        <div className="card card-compact bg-base-100 shadow-xl hover:shadow-2xl">
            <figure><img className=' w-full object-cover' src={image?.medium} alt={name + ' Image'} /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p><span>Rating: </span>{rating?.average ? rating?.average : 'Not available'}</p>
                <div className="card-actions justify-end">
                    <Link to={`/shows/${id}`} className="btn btn-primary">Watch Now</Link >
                </div>
            </div>
        </div>
    );
};

export default ShowCard;