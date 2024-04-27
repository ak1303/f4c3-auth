import { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const { profile, isLoggedIn, setProfile, setIsLoggedIn } = useContext(UserContext);
    const navigate = useNavigate();
    
    useEffect(() => {
        // Redirect to homepage if user is not logged in
        if (!isLoggedIn) {
            navigate('/');
        }
    }, [isLoggedIn, navigate]);

    const logoutUser = () => {
        // Clear user data and log out
        localStorage.removeItem('user');
        setProfile(null);
        setIsLoggedIn(false);
        navigate('/');
    };

    return (
        isLoggedIn ? (
            <div className="text-3xl p-12 ">
                <div className="p-3 text-5xl mb-5">Profile</div>
                <div className="p-3">Full Name: {profile.fullname}</div>
                <div className="p-3">Email: {profile.email}</div>
                <div className="p-3">Password: {profile.password}</div>
                <button onClick={logoutUser} className="text-xl px-3 py-2 mt-2 ms-3 bg-white text-black rounded-lg">Logout</button>
            </div>
        ) : null
    );
};

export default Profile;
