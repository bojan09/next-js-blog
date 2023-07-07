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
        <div className="md:flex-1 flex flex-col gap-6 justify-center">
          <h1 className="text-3xl md:text-5xl">Lorem ipsum dolor sit amet.</h1>

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

          <p className="text-lg md:text-xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure modi
            quam ducimus, velit dolor asperiores ipsa quas beatae nisi fugiat
            iusto, aliquid ipsam dignissimos porro molestias optio et
            voluptatibus. Impedit corporis nam unde molestias aspernatur tenetur
            maiores dolorem deleniti, quis, ducimus vitae eum voluptatibus iusto
            excepturi velit sunt fugiat itaque.
          </p>
          <div className="my-4">
            <Button text="See more" url="#" />
          </div>
        </div>

        {/*Category Item - Image container*/}
        <div className="relative xs:hidden md:inline-block">
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
