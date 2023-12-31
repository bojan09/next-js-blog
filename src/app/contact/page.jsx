import React from "react";
import Image from "next/image";

// components
import { Button } from "@/components";

const Contact = () => {
  return (
    <div className="">
      <h1 className="text-xl md:text-6xl font-bold my-[4rem] text-center">
        Let's keep in touch
      </h1>
      <div className="flex md:justify-evenly xs:flex-col md:flex-row md:gap-20 md:my-12">
        <div className="relative md:w-[400px] md:h-[400px] xs:w-[225px] xs:h-[225px] xs:mx-auto xs:mb-4 md:m-0">
          <Image
            src="/contact.png"
            alt="contact_img"
            fill={true}
            sizes="(max-width: 768px) 100vw"
            className="object-cover contact_animation"
          />
        </div>
        <div>
          <form className="flex flex-col gap-6 xs:mx-auto xs:mb-4 md:m-0">
            <input
              type="text"
              placeholder="Your name"
              className="rounded-sm px-3 py-2 bg-[#f4f4f4] text-[#333]"
            />
            <input
              type="email"
              placeholder="Your email"
              className="rounded-sm px-3 py-2 bg-[#f4f4f4]  text-[#333]"
            />
            <textarea
              placeholder="Send us a message"
              cols="30"
              rows="10"
              className="rounded-sm px-3 py-3 bg-[#f4f4f4]  text-[#333]"
            ></textarea>
            <Button url="#" text="Send" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
