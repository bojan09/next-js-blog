import React from "react";
import Image from "next/image";
import Link from "next/link";

// components
import { Button } from "@/components";

async function getData() {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Blog = async () => {
  const data = await getData();

  return (
    <div className="">
      {data.map((item) => (
        <Link
          href={`/blog/${item._id}`}
          className="md:flex justify-evenly my-[5rem]"
          key={item.id}
        >
          <div className="md:mr-12 my-auto xs:mx-auto">
            <Image
              src={item.img}
              alt=""
              width={400}
              height={250}
              className="rounded-md"
            />
          </div>
          <div className="">
            <h1 className="text-5xl">{item.title}</h1>
            <p className="text-lg  md:w-[90ch] xs:w-[30ch] xs:mb-4 md:m-0">
              {item.desc}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
