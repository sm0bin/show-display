import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const Show = () => {
    const data = useLoaderData();
    const { id } = useParams();

    const show = data.find((show) => show?.show?.id === Number(id));

    const handleBooking = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        const bookingDetails = {
            showId: show?.show?.id,
            ...data
        };
        console.log(bookingDetails);
        localStorage.setItem('booking', JSON.stringify(bookingDetails));
        document.getElementById('my_modal_3').close();
        toast.success('Booking successful!');
    };

    console.log(data);
    return (
        <div className='mx-4 md:mx-5 lg:mx-auto max-w-7xl mt-40'>
            <div dangerouslySetInnerHTML={{ __html: show?.show?.summary }} />


            <button className="btn btn-primary mx-auto my-8 block" onClick={() => document.getElementById('my_modal_3').showModal()}>Book Now</button>

            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>

                    <form onSubmit={handleBooking} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' defaultValue={show?.show?.name} readOnly className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Runtime</span>
                            </label>
                            <input type="text" name='runtime' defaultValue={show?.show?.runtime} readOnly className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Show Date</span>
                            </label>
                            <input type="date" name='date' className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Book</button>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    );
};

export default Show;