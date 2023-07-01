import React from "react";
import Image from "next/image";

// components
import { Button } from "@/components";

const Category = ({ params }) => {
  return (
    <div>
      <h1 className="text-3xl font-semibold text-[#53c26b] capitalize">
        {params.category}
      </h1>

      {/*Category Item*/}
      <div className="category_item">
        {/*Category Item - Content*/}
        <div className="flex-1 flex flex-col gap-6 justify-center items-center category_item">
          <h1 className="text-5xl">Test</h1>
          <p className="text-xl">Desc</p>
          <Button text="See more" url="#" />
        </div>

        {/*Category Item - Image container*/}
        <div className="relative">
          <Image
            src="https://images.pexels.com/photos/3021382/pexels-photo-3021382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="test_img"
            width={500}
            height={600}
            className="object-contain rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Category;
