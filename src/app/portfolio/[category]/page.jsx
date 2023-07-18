import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
// components
import { Button } from "@/components";

// data
import { items } from "./data";

const getData = (category) => {
  const data = items[category];

  if (data) {
    return data;
  }
  return notFound;
};

const Category = ({ params }) => {
  const data = getData(params.category);

  return (
    <div>
      <h1 className="text-3xl font-semibold text-[#53c26b] capitalize">
        {params.category}
      </h1>

      {/*Category Item*/}
      {data.map((item) => (
        <div className="category_item">
          {/*Category Item - Content*/}
          <div className="md:flex-1 flex flex-col gap-6 justify-center">
            <h1 className="text-3xl md:text-5xl">{item.title}</h1>

            {/*Category Item - Image container*/}
            <div className="relative xs:inline-block md:hidden">
              <Image
                src="https://images.pexels.com/photos/3021382/pexels-photo-3021382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="test_img"
                width={500}
                height={600}
                className="object-contain rounded-md"
              />
            </div>

            <p className="text-lg md:text-xl">{item.desc}</p>
            <div className="my-4">
              <Button text="See more" url="#" />
            </div>
          </div>

          {/*Category Item - Image container*/}
          <div className="relative xs:hidden md:inline-block">
            <Image
              src={item.image}
              alt="test_img"
              width={500}
              height={600}
              className="object-contain rounded-md"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
