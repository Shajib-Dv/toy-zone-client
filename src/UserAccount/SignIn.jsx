/** @format */

import React, { useState } from "react";

const SignIn = () => {
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(
      `First Name: ${name}, Last Name: ${photo}, Email: ${email}, Password: ${password}`
    );
  };
  return (
    <>
      <h1 className="text-5xl font-bold text-purple-700 py-10 text-center">
        Sign in now!
      </h1>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="md:w-1/2">
            <img src="/signIn.jpg" alt="signin" />
          </div>
          <div className="card flex-shrink-0 w-full  max-w-sm shadow-2xl md:w-1/2">
            <form onSubmit={handleSubmit}>
              <div className="card-body shadow-2xl shadow-purple-600 rounded-md bg-purple-400">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="your name"
                    className="p-4 border rounded-md outline-none"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo url</span>
                  </label>
                  <input
                    type="url"
                    value={photo}
                    onChange={(e) => setPhoto(e.target.value)}
                    placeholder="photo url"
                    className="p-4 border rounded-md outline-none"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="email"
                    className="p-4 border rounded-md outline-none"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="text"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="password"
                    className="p-4 border rounded-md outline-none"
                  />
                  <label className="label">
                    <p className="label-text-alt link link-hover">
                      Forgot password?
                    </p>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Sign in</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
