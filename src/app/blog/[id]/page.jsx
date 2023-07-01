import React from "react";
import Image from "next/image";

const BlogPost = () => {
  return (
    <div>
      {/* Top Container */}
      <div className="flex">
        {/* Top Container - Text content */}
        <div className="mb-[5rem]">
          <h1 className="text-4xl font-semibold mb-4">
            Lorem ipsum dolor sit amet.
          </h1>
          <p className="my-6 text-lg w-[80ch]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            magni adipisci odit voluptates dolores, voluptate aperiam alias
            assumenda tempore mollitia quasi natus animi sunt blanditiis
            perferendis temporibus! Aliquid, sequi architecto?
          </p>

          {/* Top Container - User  */}
          <div className="flex items-center gap-4 my-4">
            <Image
              src="https://images.pexels.com/photos/4505269/pexels-photo-4505269.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="user_img"
              width={40}
              height={40}
              className="object-cover rounded-full"
            />
            <p>Jane Doe</p>
          </div>
        </div>

        {/* Top Container - Image Container */}
        <div className="mb-[4rem]">
          <Image
            src="https://images.pexels.com/photos/2335126/pexels-photo-2335126.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="user_img"
            width={400}
            height={400}
            className="object-cover rounded-sm"
          />
        </div>
      </div>

      {/* Bottom Container - Text */}
      <div>
        <p className="max-w-[135ch]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          placeat amet mollitia, fugiat, illo nulla suscipit dolorum commodi
          voluptas quos sed officia numquam corrupti asperiores facere eveniet
          minima reprehenderit temporibus molestias ab et quasi, quis ullam!
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae quia
          amet a. Corrupti itaque perferendis eius? Accusantium aspernatur
          corporis ad.
          <br />
          <br />
          Similique asperiores incidunt voluptatibus delectus nesciunt
          doloremque? Natus, recusandae sed non tenetur excepturi voluptatum cum
          ipsam, repellat, quia aut similique laboriosam! Consectetur, optio
          pariatur?Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Laboriosam debitis minus, ea ratione iusto est?
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
          accusamus?Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Illo, in. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Animi tenetur ducimus expedita at beatae repudiandae! Saepe iste
          delectus voluptatibus beatae.
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
