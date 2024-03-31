import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../utl/Button";
const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [error, seterror] = useState(false);
  const userData = [
    {
      email,
      password,
    },
  ];
  const handleSubmit = () => {
    !email || !password ? seterror(true) : seterror(false);
    console.log(userData);
  };
  return (
    <div className="max-md:mt-12 mt-16 pt-2  px-3 flex flex-col items-center">
      <div className="flex flex-col">
        <span className="text-sky-600 text-2xl my-2">Sign in</span>
        <span className={`text-red-600 ${error ? "" : "hidden"}`}>
          Error Message Displayed here
        </span>
      </div>

      <div className="flex flex-col">
        <input
        autoFocus
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

        <Button handleSubmit={handleSubmit} />
      </div>
      <span className="text-sm  mb-4">
        Don't' have an Account ?{" "}
        <Link to={"/register"} className="text-sky-500 underline px-4">
          sign up
        </Link>
      </span>
    </div>
  );
};

export default Login;
