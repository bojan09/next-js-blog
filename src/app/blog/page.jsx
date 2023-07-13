import React from "react";
import Image from "next/image";
import Link from "next/link";

// components
import { Button } from "@/components";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
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
    <div className="flex flex-col justify-evenly">
      {data.map((item) => (
        <div className="md:flex justify-evenly my-[5rem]" key={item.id}>
          {/*Blog Item - Image container*/}
          <div className="md:mr-12 my-auto xs:mx-auto">
            <Image
              src="https://images.pexels.com/photos/3021382/pexels-photo-3021382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="test_img"
              width={600}
              height={600}
              className="object-cover rounded-md"
            />
          </div>
          {/*Blog Item - Content container*/}
          <Link
            href="/blog/testId"
            className="flex flex-col gap-6 justify-center md:my-0 xs:my-7"
          >
            <h1 className="text-5xl">{item.title}</h1>
            <p className="text-lg  md:w-[90ch] xs:w-[30ch] xs:mb-4 md:m-0">
              {item.body}
            </p>
            <Button text="See more" url="#" />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Blog;
