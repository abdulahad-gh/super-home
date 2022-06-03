import React from 'react';
import { useForm } from 'react-hook-form';

const AddRoom = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
    }

    return (
        <div>
            <h2>Added Room</h2>

            <div>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <label className='label'>Select Room category</label>

                    <select type="text" {...register("room", { required: true })} placeholder="type full name" class="input input-bordered w-full max-w-xs " >
                        <option value="single">single</option>
                        <option value="double">double</option>
                        <option value="vip">vip</option>

                    </select>
                    <div>
                        <label className='label' >Room Price</label>
                        <input type="number" {...register("price", { required: true })} className="input input-bordered  w-full max-w-xs" />
                        {
                            errors.price && <span className="text-red-500 block">price is required</span>
                        }
                    </div>
                    <div>
                        <label className='label' >Location</label>
                        <input type="number" {...register("location", { required: true })} className="input input-bordered  w-full max-w-xs" />
                        {
                            errors.location && <span className='text-red-500 block'>location is required</span>
                        }
                    </div>
                    {/* {
                        errors.name && <span className="text-red-500">name is required</span>
                    }
                    <input type="email" {...register("email")} placeholder="type your email" class="input input-bordered  w-full max-w-xs my-2" /> */}
                    <button type='submit' className='btn btn-xs'>Add</button>

                </form>

            </div>

        </div>
    );
};

export default AddRoom;