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
  const [active, setActive] = useState("");
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
      <div className="md:hidden xs:relative text-[#222]">
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
          } flex-col justify-center gap-1 mt-[17rem] mr-[-2.6rem] py-2 px-4 p  bg-white`}
        >
          {links.map((link) => (
            <Link key={link.id} href={link.url}>
              {link.title}
            </Link>
          ))}

          {/* Logout button */}
          <button
            className="px-2 py-1 border-none bg-[#53c28b] hover:bg-[#53c26b] rounded-md text-[#121212] mt-2 mb-1"
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
