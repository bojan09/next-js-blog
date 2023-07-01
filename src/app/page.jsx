import Image from "next/image";

// assets
import Hero_img from "public/hero.png";

// components
import { Button } from "@/components";

export default function Home() {
  return (
    <div className="md:flex items-center gap-28">
      {/*Homepage - Text*/}
      <div className="flex-1 flex flex-col gap-12">
        <h1 className="md:text-[72px] xs:text-5xl bg-gradient-to-br from-[#194c33] to-[#bbb] bg-clip-text text-transparent font-bold ">
          Better design for your digital products.
        </h1>
        <p className="text-2xl xs:text-xl font-light">
          Turning your Idea into Reality. We bring together the teams from the
          globalt tech industry.
        </p>
        <Button url="/" text="See our works" />
      </div>

      {/*Homepage - Image*/}
      <div>
        <Image
          src={Hero_img}
          alt="hero_img"
          className="w-full md:h-[500px] object-cover xs:my-8 md:m-0 home_animation"
        />
      </div>
    </div>
  );
}
