import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Shows = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div className='mx-4 md:mx-5 lg:mx-auto max-w-7xl'>

            <h1 className='text-4xl font-bold text-center pt-8 mb-8'>Our Shows</h1>



            <div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {
                        data?.map((show, idx) => (
                            <div key={idx} className="card card-compact bg-base-100 shadow-xl hover:shadow-2xl">
                                <figure><img className=' w-full object-cover' src={show?.show?.image?.medium} alt={show?.show?.name + ' Image'} /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{show?.show?.name}</h2>
                                    <p><span>Rating: </span>{show?.show?.rating?.average ? show?.show?.rating?.average : 'Not available'}</p>
                                    <div className="card-actions justify-end">
                                        <Link to={`/shows/${show?.show?.id}`} className="btn btn-primary">Watch Now</Link >
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Shows;