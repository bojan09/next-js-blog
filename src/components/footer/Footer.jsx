import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="h-[50px] flex items-center justify-between">
      {/* Text */}
      <div>©2023 SimpleBlog. All rights reserved.</div>

      {/* Social Images */}
      <div className="flex items-center gap-3">
        <Image
          src="/1.png"
          width={25}
          height={25}
          alt="footer_img"
          className="opacity-60  hover:opacity-90 cursor-pointer"
        />
        <Image
          src="/2.png"
          width={25}
          height={25}
          alt="footer_img"
          className="opacity-60 hover:opacity-90 cursor-pointer"
        />
        <Image
          src="/3.png"
          width={25}
          height={25}
          alt="footer_img"
          className="opacity-60  hover:opacity-90 cursor-pointer"
        />
        <Image
          src="/4.png"
          width={25}
          height={25}
          alt="footer_img"
          className="opacity-60  hover:opacity-90 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Footer;
