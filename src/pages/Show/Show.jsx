import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Show = () => {
    const data = useLoaderData();
    const { id } = useParams();

    const show = data.find((show) => show?.show?.id === Number(id));

    console.log(data);
    return (
        <div className='mx-4 md:mx-5 lg:mx-auto max-w-7xl mt-40'>
            {/* {show?.show?.summary} */}
            <div dangerouslySetInnerHTML={{ __html: show?.show?.summary }} />
        </div>
    );
};

export default Show;