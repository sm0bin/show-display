import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Shows = () => {
    const shows = useLoaderData();
    console.log(shows);
    return (
        <div>

        </div>
    );
};

export default Shows;