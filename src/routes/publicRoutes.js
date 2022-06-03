import Home from "../pages/Home";
import SingleRoom from "../pages/SingleRoom";
import DoubleRoom from "../pages/DoubleRoom";
import VipRoom from "../pages/VipRoom";
import Contact from "../pages/Contact";
import MyBookings from "../pages/process/MyBookings";
import AddRoom from "../pages/Admin/AddRoom";
import Signup from "../Auth/Signup";



export const publicRoutes = [
    { path: '/', name: 'home', Component: Home },
    { path: '/single-rooms', name: 'single-rooms', Component: SingleRoom },
    { path: '/double-rooms', name: 'double-rooms', Component: DoubleRoom },
    { path: '/vip-rooms', name: 'vip-rooms', Component: VipRoom },
    { path: '/contact', name: 'contact', Component: Contact },
    { path: '/my-bookings', name: 'my-bookings', Component: MyBookings },
    { path: '/add-room', name: 'add-room', Component: AddRoom },
    { path: '/signup', name: 'signup', Component: Signup },
]