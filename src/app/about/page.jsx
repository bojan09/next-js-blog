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
      <div>
        <Image src={about_img} alt="about_img" fill={true} className="w-24" />

        {/*Image Text*/}
        <div>
          <h1>Digital Storytellers</h1>
          <h2>Handcrafting award winning digital experiences</h2>
        </div>
      </div>

      {/*Text*/}
      <div>
        <div>
          <h1>Who we are?</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem sunt
            magnam enim, voluptas ut unde consectetur, laborum sed ullam officia
            voluptate. <br />
            Officiis facere ad neque distinctio recusandae esse eos omnis
            suscipit quibusdam? Maiores obcaecati incidunt eveniet esse expedita
            necessitatibus laborum recusandae consequuntur quam, veniam atque
            quos culpa quae pariatur? Voluptates.
          </p>
        </div>
        <div>
          <h1>What we do?</h1>
          <p>
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
          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
