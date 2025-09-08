import React, { useEffect, useState } from "react";

function UserProfile() {
  const [loginMessage, setLoginMessage] = useState("");

  useEffect(() => {
    const loginUser = new Promise((resolve, reject) => {
      const user = "sandeep";
      const password = 123;

      if (user === "sandeep" && password === 123) {
        resolve("User Login Successfully");
      } else {
        reject("User not able to login");
      }
    });

    loginUser
      .then((message) => {
        setLoginMessage(message);
      })
      .catch((error) => {
        setLoginMessage(error);
      });
  }, []);

  return (
    <>
      <h1>Hello Sandeep</h1>
      <p>{loginMessage}</p>
    </>
  );
}

export default UserProfile;
