import { useState } from "react";
import { UserContext } from "./context/UserContext"
import { BrowserRouter, Outlet, Route, Routes} from 'react-router-dom'
import NotFound from './component/NotFound.jsx';
import Profile from "./component/Profile.jsx";
import Header from "./component/Header.jsx";
import Signup from "./component/Signup.jsx";
function App() {
  
  const[profile, setProfile] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(() => Boolean(localStorage.getItem("token")));

  // const userDetails = JSON.parse(localStorage.getItem("user"));
  // console.log(userDetails);
  // if(userDetails){
  //   const {fullname, email, password} = userDetails;
  //   setProfile({fullname, email, password});
  //   setIsLoggedIn(true);
  // }
  
  return (
    <BrowserRouter>
      <UserContext.Provider value={{profile, setProfile, isLoggedIn, setIsLoggedIn}}>
        <Header/>
              <Routes>
              <Route path="" element={<Signup/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="*" element={<NotFound/>}/>
              </Routes>
      </UserContext.Provider>
    </BrowserRouter>
    
  )
}

export default App
