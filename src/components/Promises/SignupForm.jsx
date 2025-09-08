import React, {useState} from "react";

function SignupForm() {
  const [error, setError] = useState(null);
    
  const checkUsername = (username) => {
      return new Promise((resolve, reject) => {
          setTimeout(() => {

        // let username = 'admin';
         
        if (username === 'admin') 
            resolve("Login Sucessfully");
        else {
            reject("not sucessfully")
        }

      }, 500);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = e.target.username.value;

    checkUsername(username)
      .then(() => {
        console.log('Form submitted!');
      })
      .catch((err) => {
        setError(err);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input className="border px-3 py-2 rounded mx-2" name="username" placeholder="Username" />
      <button className="bg-sky-300 px-6 py-2 rounded text-white hover:text-black hover:bg-gray-300" type="submit">Submit</button>
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </form>
  );
}
export default SignupForm;
