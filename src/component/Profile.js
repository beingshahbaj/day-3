import React, { useEffect } from "react";

function Profile() {
  useEffect(() => {
    // Fetch the user details from the API
    fetch(`https://dummyjson.com/users/${localStorage.getItem("user").id}`)
      .then((res) => res.json())
      .then((data) => {
        // Save the user object with all the details in local storage
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
      {/* Display other user information */}
    </div>
  );
}

export default Profile;
