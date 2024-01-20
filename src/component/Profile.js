import React, { useEffect } from "react";

function Profile() {
  useEffect(() => {
    
    fetch(`https://dummyjson.com/users/${localStorage.getItem("user").id}`)
      .then((res) => res.json())
      .then((data) => {
        
        localStorage.setItem("user", JSON.stringify(data));
      });
  }, []);

  return (
    <div>
      <h1>Profile</h1>
      <p>
        Name: {localStorage.getItem("user").firstName}{" "}
        {localStorage.getItem("user").lastName}
      </p>
      <p>Email: {localStorage.getItem("user").email}</p>
    
    </div>
  );
}

export default Profile;
