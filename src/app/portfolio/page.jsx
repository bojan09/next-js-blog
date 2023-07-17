import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// assets
import illustration_img from "../../../public/illustration.png";
import websites_img from "../../../public/websites.jpg";
import application_img from "../../../public/apps.jpg";

const Portfolio = ({ params }) => {
  return (
    <div className="flex md:flex-row xs:flex-col justify-center items-center gap-10 my-5">
      {/* Illustrations */}
      <div className="relative border-gray-400 border-2 rounded-md w-[260px] h-[400px] hover:text-[#53c26b] transition-all 1s ease-in-out">
        <Link href="/portfolio/illustrations">
          <Image
            src={illustration_img}
            fill={true}
            sizes="(max-width: 768px) 100vw"
            alt="illustration_img"
            className="grayscale hover:grayscale-0 transition-all 1s ease-in-out"
          />
          <span className="absolute right-3 bottom-4 text-3xl font-semibold">
            Illustrations
          </span>
        </Link>
      </div>

      {/* Websites */}
      <div className="relative border-gray-400 border-2 rounded-md w-[260px] h-[400px] hover:text-[#53c26b] transition-all 1s ease-in-out">
        <Link href="/portfolio/websites">
          <Image
            src={websites_img}
            fill={true}
            sizes="(max-width: 768px) 100vw"
            alt="illustration_img"
            className="grayscale hover:grayscale-0 transition-all 1s ease-in-out object-cover"
          />
          <span className="absolute right-3 bottom-3 text-3xl font-semibold">
            Websites
          </span>
        </Link>
      </div>

      {/* Application */}
      <div className="relative border-gray-400 border-2 rounded-md w-[260px] h-[400px] hover:text-[#53c26b] transition-all 1s ease-in-out">
        <Link href="/portfolio/application">
          <Image
            src={application_img}
            fill={true}
            sizes="(max-width: 768px) 100vw"
            alt="illustration_img"
            className="grayscale hover:grayscale-0 transition-all 1s ease-in-out object-cover"
          />
          <span className="absolute right-3 bottom-3 text-3xl font-semibold">
            Application
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
