"use client";
import React, { useState } from "react";

import Link from "next/link";
import Image from "next/image";

// links
import links from "@/constants";

// assets
import menu from "/public/menu.png";
import close from "/public/close.png";

// components
import { Button } from "@/components";
import { DarkModeToggle } from "@/components";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="h-[100px] flex justify-between items-center">
      <Link href={"/"} className="font-bold text-2xl">
        SimpleBlog
      </Link>

      {/* Desktop Navbar */}
      <div className="xs:hidden md:flex items-center justify-between gap-12 ">
        <DarkModeToggle />
        {links.map((link) => (
          <Link key={link.id} href={link.url}>
            {link.title}
          </Link>
        ))}

        {/* Logout button */}
        <Button url="/logout" text="Logout" />
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden xs:relative text-[#222] z-10">
        <Image
          src={!toggle ? menu : close}
          className="fixed top-6 right-7 object-contain cursor-pointer"
          width={45}
          height={45}
          alt="nav_icon"
          onClick={() => setToggle(!toggle)}
        />
        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } flex-col justify-center gap-1 mt-[21rem] mr-[-1.5rem] py-2 px-4 p  bg-gradient-to-tr from-gray-50 to-gray-200 rounded-sm z-10`}
        >
          <div className="my-2 mx-auto">
            <DarkModeToggle />
          </div>

          {links.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              onClick={() => setToggle(!toggle) && window.scrollTo(0, 0)}
            >
              {link.title}
            </Link>
          ))}

          {/* Logout button */}
          <button
            className=" px-2 py-1 border-none bg-[#53c28b] hover:bg-[#53c26b] rounded-md text-[#121212] mt-3 mb-1"
            onClick={() => console.log("Logged Out")}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
