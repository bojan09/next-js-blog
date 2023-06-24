"use client";
import React from "react";

import Link from "next/link";

// links
import links from "@/constants";

const Navbar = () => {
  return (
    <div className="h-[100px] flex justify-between items-center">
      <Link href={"/"} className="font-bold text-xl">
        SimpleBlog
      </Link>
      <div className="flex items-center gap-5">
        {links.map((link) => (
          <Link key={link.id} href={link.url}>
            {link.title}
          </Link>
        ))}

        {/* Logout button */}
        <button
          className="px-2 py-1 border-none bg-[#53c28b] hover:bg-[#53c15b] rounded-md text-[#121212]"
          onClick={() => console.log("Logged Out")}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
