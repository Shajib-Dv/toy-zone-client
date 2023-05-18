/** @format */

import React, { useState } from "react";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import ActiveLink from "../ActiveLink";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const user = true;

  //sign in button
  const SignInBtn = () => {
    return <button className="primary-btn">Sign in</button>;
  };

  //sign Out button
  const SignOutBtn = () => {
    return <button className="primary-btn">Sign out</button>;
  };

  //user profile info
  const UserProfile = () => {
    return (
      <div className="avatar">
        <div className="w-16 mask mask-hexagon">
          <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
    );
  };

  return (
    <>
      <nav className="w-full bg-[rgba(234,63,239,0.09)] px-10">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <div>
                <img src="/logo.jpg" className="w-16 rounded-full bg-cover" />
              </div>
              {user && (
                <div className="md:hidden">
                  <UserProfile />
                </div>
              )}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? <RxCross1 /> : <RxHamburgerMenu />}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 text-black font-semibold">
                <li>
                  <ActiveLink to="/">Home</ActiveLink>
                </li>
                <li>
                  <ActiveLink to="/alltoys">All Toys</ActiveLink>
                </li>
                {user && (
                  <>
                    <li>
                      <ActiveLink to="/mytoys">My toys</ActiveLink>
                    </li>
                  </>
                )}
                <li>
                  <ActiveLink to="/blog">Blog</ActiveLink>
                </li>
              </ul>

              <div className="mt-3 space-y-2 md:hidden">
                {user ? <SignOutBtn /> : <SignInBtn />}
              </div>
            </div>
          </div>
          <div className="hidden space-x-2 md:inline-flex items-center">
            {user ? (
              <>
                <UserProfile />
                <SignOutBtn />
              </>
            ) : (
              <SignInBtn />
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
