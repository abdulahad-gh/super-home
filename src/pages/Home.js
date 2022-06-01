import React, { useEffect, useState } from 'react';

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
                        <div className='grid grid-cols-4  gap-3  px-5'>
                            {
                                rooms.map(room => <div class=" shadow-2xl  rounded-md flex  items-center bg-white">
                                    <img width={160} className='rounded-tl-md rounded-bl-md	' src={room.img} alt="Shoes" />
                                    <div class="px-1">
                                        <h2 class="bg-cyan-600 text-center text-white rounded-md" >
                                            {room.room}</h2>
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
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">your room</h3>
                    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div class="modal-action justify-center">
                        <label for="booking-modal" class="btn">Yay!</label>
                        <label for="booking-modal" class="btn">Yay!</label>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;