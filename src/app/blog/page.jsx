import React from "react";
import Image from "next/image";
import Link from "next/link";

// components
import { Button } from "@/components";

const Blog = () => {
  return (
    <div className="flex flex-col justify-evenly">
      {/* Blog */}
      <div className="flex justify-evenly my-[5rem]">
        {/*Blog Item - Image container*/}
        <div className="mr-12 my-auto">
          <Image
            src="https://images.pexels.com/photos/3021382/pexels-photo-3021382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="test_img"
            width={300}
            height={300}
            className="object-contain rounded-md"
          />
        </div>
        {/*Blog Item - Content container*/}
        <Link
          href="/blog/testId"
          className="flex flex-col gap-6 justify-center"
        >
          <h1 className="text-5xl">Test</h1>
          <p className="text-lg  w-[90ch]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
            distinctio voluptatum laudantium nihil accusantium rem quod ut
            dignissimos molestias autem fugiat labore dolor natus commodi, illo
            expedita pariatur explicabo. Tempore ipsa itaque deleniti illum
            magni excepturi voluptatum pariatur, amet aspernatur, laudantium
            magnam ipsam est modi.
          </p>
          <Button text="See more" url="#" />
        </Link>
      </div>
    </div>
  );
};

export default Blog;
