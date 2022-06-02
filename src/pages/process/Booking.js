import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
const Booking = ({ order, setOrder }) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const { room, price } = order;
    const [finalPrice, setFinalPrice] = useState({ day: '', totalPrice: '' })
    const [date, setDate] = useState(new Date());


    const formattedDate = format(date, 'PP')
    const dayUser = parseInt(watch("day", 1));
    useEffect(() => {
        setFinalPrice({ day: dayUser, totalPrice: dayUser * price })
    }, [dayUser, price])


    const handleDateSelect = select => {
        setDate(select)
        console.log(select);
    }
    const onSubmit = data => {
        const formInfo = { ...data, date: date } // added clender value
        const { name, email, phone, day, date: arrivalDate } = formInfo;
        const bookingInfo = {
            room,
            name,
            email,
            phone,
            day,
            arrivalDate: formattedDate,
            price,
            finalPrice: finalPrice.totalPrice
        }
        console.log(bookingInfo)
        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingInfo)
        })
            .then(res => res.json())
            .then(data => {
                setOrder({ id: null })
                if (data.success) {
                    toast.success(`your ${room} is added book list`)
                }
                else {
                    toast.error(`${room} is already booked`)
                }

            })




    };

    return (
        <div>
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box">

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <p class="text-center">Room category: <span className='font-bold capitalize'>{room}</span></p>
                        <div className='grid grid-cols-2 items-start gap-5'>
                            <div className='mt-6'>
                                <input type="text" {...register("name", { required: true })} placeholder="type full name" class="input input-bordered w-full max-w-xs " />
                                {
                                    errors.name && <span className="text-red-500">name is required</span>
                                }
                                <input type="email" {...register("email")} placeholder="type your email" class="input input-bordered  w-full max-w-xs my-2" />
                                <input type="tel" {...register("phone")} placeholder="type your phone" class="input input-bordered  w-full max-w-xs " />
                            </div>
                            <div>
                                <p class="">select day's: per day <span className='font-bold capitalize'>{price}</span></p>
                                <select type="text" {...register("day")} placeholder="type full name" class="input input-bordered w-full max-w-xs ">

                                    {
                                        Array.from({ length: 30 }).map((f, i) => <option value={i + 1}>{i + 1}</option>)
                                    }

                                </select>
                                <div className=" my-2" >
                                    <DatePicker className="input input-bordered" selected={date} onSelect={handleDateSelect}


                                    />
                                    {/* <input {...register("date")} type="text" /> */}
                                </div>
                                <p>Total stay cost <span className="text-cyan-500">${finalPrice.totalPrice}</span> of <span className="text-cyan-500">{finalPrice.day} </span>{finalPrice.day === 1 ? 'day' : 'days'} </p>


                            </div>
                        </div>
                        <div class="modal-action justify-center">
                            <button for="booking-modal" class="btn">Payment</button>
                            <button type="submit" for="booking-modal" class="btn">added boking list</button>
                            <label for="booking-modal" class="btn">cancel</label>
                        </div>
                    </form>


                </div>
            </div>
        </div>
    );
};

export default Booking;