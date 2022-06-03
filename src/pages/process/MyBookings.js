import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth"
import auth from "../../firebase-init";

const MyBookings = () => {
    const [user] = useAuthState(auth)
    console.log(user);

    const [bookings, setBookings] = useState([]);
    useEffect()
    return (
        <div>
            <h2>My All Bookings</h2>

            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Room</th>
                            <th>Date</th>
                            <th>Stay</th>
                            <th>Email</th>
                            <th>Cost</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                        </tr>

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyBookings;