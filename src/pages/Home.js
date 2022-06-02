import React, { useEffect, useState } from 'react';
import Booking from './process/Booking';



const Home = () => {
    const [rooms, setRooms] = useState([]);
    const [order, setOrder] = useState({});

    useEffect(() => {
        fetch('room-data.json')
            .then(res => res.json())
            .then(data => setRooms(data))
    }, [])
    const handleBooking = async id => {
        const order = await rooms.find(room => room.id === id);
        setOrder(order);
    }
    return (
        <div className='w-full h-screen px-20 overflow-hidden' style={{
            backgroundColor: '#8BC6EC',
            backgroundImage: 'linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%)'
        }}>
            <h1 className='text-2xl mt=2 text-white text-center'>Quick Select</h1>

            <div className='mt-6'>
                <div>
                    <div>
                        <div className='grid grid-cols-4  gap-4  px-5'>
                            {
                                rooms.map(room => <div class="tooltip  shadow-2xl  rounded-md flex  items-center bg-white" data-tip={room.desc}>
                                    <img width={160} className='rounded-tl-md rounded-bl-md	' src={room.img} alt="Shoes" />
                                    <div class="px-1">
                                        <h2 class="bg-cyan-600 text-center text-white rounded-md" >
                                            {room.room}</h2>
                                        <p>{room.price}</p>
                                        <p>{room.location}</p>
                                        <label onClick={() => handleBooking(room.id)} for="booking-modal" class="btn btn-xs modal-button px-1">Book Now</label>

                                    </div>
                                </div>)
                            }
                        </div>
                    </div>
                </div>

            </div>
            <div className='flex justify-center items-center '>
                <div><p className='text-4xl  text-white'>Find best room? <br />Done thing.</p></div>
                <div>
                    <img width={300} src="https://i.ibb.co/pXmphRX/images-removebg-preview.png" alt="" />
                </div>
            </div>
            {
                order?.id && <Booking order={order} setOrder={setOrder} />
            }

        </div>
    );
};

export default Home;