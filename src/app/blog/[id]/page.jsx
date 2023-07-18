import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";

async function getData(id) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    notFound();
  }
  return res.json();
}

export async function generateMetadata({ params }) {
  const post = await getData(params.id);
  return {
    title: post.title,
    description: post.desc,
  };
}

const BlogPost = async ({ params }) => {
  const data = await getData(params.id);
  return (
    <div>
      {/* Top Container */}
      <div className="flex justify-evenly">
        {/* Top Container - Text content */}
        <div className="w-[70%] mb-[5rem]">
          <h1 className="text-xl md:text-4xl font-semibold mb-4">
            {data.title}
          </h1>
          <p className="my-6 md:text-lg md:max-w-[80ch] md:mr-2">{data.desc}</p>

          {/* Top Container - User  */}
          <div className="w-[50rem] flex items-center gap-4 my-4">
            <Image
              src="https://images.pexels.com/photos/4505269/pexels-photo-4505269.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="user_img"
              width={40}
              height={40}
              className="object-contain rounded-full"
            />
            <p>{data.username}</p>
          </div>
        </div>

        {/* Top Container - Image Container */}
        <div className="mb-[4rem]">
          <Image
            src={data.img}
            alt="user_img"
            width={500}
            height={500}
            className="object-contain rounded-sm"
          />
        </div>
      </div>

      {/* Bottom Container - Text */}
      <div>
        <p className="md:max-w-[135ch]">{data.content}</p>
      </div>
    </div>
  );
};

export default BlogPost;
