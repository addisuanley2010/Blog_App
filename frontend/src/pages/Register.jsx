import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../utl/Button";

const Register = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [error, seterror] = useState(false);

  const postData = [
    {
      name,
      email,
      password,
      confirmPassword,
    },
  ];
  const handleSubmit = () => {
    !email || !password || !name || !confirmPassword
      ? seterror(true)
      : seterror(false);

    console.log(postData);
  };

  return (
    <div className="max-md:mt-12 mt-16 pt-2  px-3 flex flex-col items-center ">
      <div className="flex flex-col">
        <span className="text-sky-600 text-2xl my-4">Sign Up</span>
        <span className={`text-red-600 ${error ? "" : "hidden"}`}>
          fill all the filds
        </span>
      </div>

      <div className="flex flex-col">
        <input
          autoFocus
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={(e) => {
            setname(e.target.value);
          }}
          className="border-2 h-10 px-4 m-2 rounded-lg "
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setemail(e.target.value);
          }}
          className="border-2 h-10 px-4 m-2 rounded-lg "
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setpassword(e.target.value);
          }}
          className="border-2 h-10 px-4 m-2 rounded-lg "
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => {
            setconfirmPassword(e.target.value);
          }}
          className="border-2 h-10 px-4 m-2 rounded-lg "
        />
        <Button handleSubmit={handleSubmit} />
      </div>
      <span className="text-sm  mb-4">
        Already have an Account ?{" "}
        <Link to={"/login"} className="text-sky-500 underline px-4">
          sign in
        </Link>
      </span>
    </div>
  );
};

export default Register;
