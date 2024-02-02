import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ShowCard from '../../components/ShowCard';

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
                            <ShowCard key={idx} show={show.show} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Shows;