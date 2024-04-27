import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import { useLocation, useNavigate } from "react-router-dom";


const Signup = () => {

    const{isLoggedIn} = useContext(UserContext);
    const navigate = useNavigate();
    console.log(isLoggedIn);
    useEffect(()=>{
        if(isLoggedIn){
            console.log("redirecting to profile");
            navigate('/profile');
        }
    },[])
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error,setError] = useState(false);
    const {profile, setProfile, setIsLoggedIn} = useContext(UserContext);

   
    const generateToken = () =>{
        return Math.random().toString(36).substring(2, 10) + Math.random().toString(36).substring(2, 10);
    }
    console.log(profile);
    const checkDetails = () => {
        if(fullname === "" || email === "" || password === "" || confirmPassword === ""){
            return false;
        }
        if(password!== confirmPassword){
            alert("Password does not match");
            return false;
        }
        return true;
    }
    const submitForm = (e) =>{
        e.preventDefault();

        if(checkDetails()){
            console.log("redirecting to profile");

            const token = generateToken();
            const newProfile = {
                fullname,email,password,token
            }
            localStorage.setItem('user',JSON.stringify(newProfile));
            setProfile(newProfile);
            setIsLoggedIn(true);
            setError(false);
            navigate('/profile');
        }else{
            setIsLoggedIn(false)
            setError(true);
        }
    }
    return (
        !isLoggedIn &&
        <div className="flex justify-center pt-32 h-screen">
            <form    className=" flex flex-col gap-4 w-3/5">
                <input className="p-1 bg-black text-white border-b outline-none w-full text-xl" type="text" placeholder="Full Name" value={fullname} onChange={(e)=>setFullname(e.target.value)} />
                <input className="p-1 bg-black text-white border-b outline-none w-full text-xl" type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <input className="p-1 bg-black text-white border-b outline-none w-full text-xl" type="password" placeholder="Password" value={password} onChange= {(e)=>setPassword(e.target.value)}/>
                <input className="p-1 bg-black text-white border-b outline-none w-full text-xl" type="password" placeholder="Confirm Password" value={confirmPassword} onChange= {(e)=>setConfirmPassword(e.target.value)} />
                {error && <div className="text-red-500">Error: All the fields are mandatory</div>}
                {isLoggedIn && <div className="text-green-500">Successfully Signed Up!</div>}
                <button onClick={submitForm} className="py-2 px-5 w-fit bg-white text-black rounded-md">Signup</button>
            </form>
        </div>
    )
}
export default Signup;