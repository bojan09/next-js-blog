import React from "react";
import Link from "next/link";

const Button = ({ url, text }) => {
  return (
    <Link href={url}>
      <button className="text-lg  px-3 py-1 border-none bg-[#53c28b] hover:bg-[#53c26b] rounded-md text-[#121212] w-[max-content] ">
        {text}
      </button>
    </Link>
  );
};

export default Button;
