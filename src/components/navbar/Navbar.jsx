"use client";
import React from "react";

import Link from "next/link";

// links
import links from "@/constants";

const Navbar = () => {
  return (
    <div>
      <Link href={"/"}>SimpleBlog</Link>
      <div>
        {links.map((link) => (
          <Link key={link.id} href={link.url}>
            {link.title}
          </Link>
        ))}

        {/* Logout button */}
        <button onClick={() => console.log("Logged Out")}>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
