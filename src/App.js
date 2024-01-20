import React from 'react'
import Login from './component/Login'
import Profile from './component/Profile'
import { useState, useEffect  } from 'react';
function App() {
   const [user, setUser] = useState(null);

  
  useEffect(() => {
    // Check if the user object is in local storage
    const user = localStorage.getItem("user");
    if (user) {
      setUser(JSON.parse(user));
    }
  }, []);
  return (
    <div className="frame">
      <svg
        className="first"
        xmlns="http://www.w3.org/2000/svg"
        width="1228"
        height="465"
        viewBox="0 0 1228 465"
        fill="none"
      >
        <path d="M0 0L1227.22 335.567V465H0V0Z" fill="#5BF7DB" />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1280"
        height="485"
        viewBox="0 0 1280 485"
        fill="#5BF7DB"
      >
        <path d="M0 0L1280 350V485H0V0Z" fill="white" />
      </svg>
      {!user ? <Login /> : <Profile />}
    </div>
  );
}

export default App