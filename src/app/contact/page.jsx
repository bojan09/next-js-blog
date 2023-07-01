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
      <div className="flex justify-evenly gap-20 my-12">
        <div className="relative w-[400px] h-[400px]">
          <Image
            src="/contact.png"
            alt="contact_img"
            fill={true}
            className="object-cover contact_animation"
          />
        </div>
        <div>
          <form className="flex flex-col gap-6">
            <input
              type="text"
              placeholder="Your name"
              className="rounded-sm px-3 py-2 bg-[#f4f4f4]"
            />
            <input
              type="email"
              placeholder="Your email"
              className="rounded-sm px-3 py-2 bg-[#f4f4f4]"
            />
            <textarea
              placeholder="Send us a message"
              cols="30"
              rows="10"
              className="rounded-sm px-3 py-3 bg-[#f4f4f4]"
            ></textarea>
            <Button url="#" text="Send" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
