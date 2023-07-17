import React from "react";
import Image from "next/image";

// assets
import about_img from "/public/about_img.jpg";

// components
import { Button } from "@/components";

const About = () => {
  return (
    <div>
      {/*Image*/}
      <div className="relative w-full h-[300px]">
        <Image
          src={about_img}
          alt="about_img"
          fill={true}
          className="object-cover grayscale md:rounded-none xs:rounded-sm"
        />

        {/*Image Text*/}
        <div className="absolute bottom-5 left-5 bg-[#53d28b] p-2 text-white rounded-md">
          <h1 className="text-xl md:text-3xl font-bold">
            Digital Storytellers
          </h1>
          <h2 className="text-lg md:text-2xl">
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>

      {/*Text*/}
      <div className="flex md:flex-row xs:flex-col md:gap-28 xs:gap-10 p-2 mt-5 text-[#f3f3f3]">
        <div>
          <h1 className="text-xl md:text-3xl font-bold my-3">Who we are?</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem sunt
            magnam enim, voluptas ut unde consectetur, laborum sed ullam officia
            voluptate. <br /> <br /> <br />
            Officiis facere ad neque distinctio recusandae esse eos omnis
            suscipit quibusdam? Maiores obcaecati incidunt eveniet esse expedita
            necessitatibus laborum recusandae consequuntur quam, veniam atque
            quos culpa quae pariatur? Voluptates.
          </p>
        </div>
        <div>
          <h1 className="text-xl md:text-3xl font-bold my-3">What we do?</h1>
          <p className="mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae, a
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. -
            Creative Illustrations
            <br />
            <br /> - Dynamic Websites
            <br />
            <br /> - Fast and Handy
            <br />
            <br /> - Mobile Apps
          </p>

          {/*Text Button*/}
          <div className="xs:my-5 md:m-0">
            <Button url="/contact" text="Contact" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
