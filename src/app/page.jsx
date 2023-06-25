import Image from "next/image";

// assets
import Hero_img from "public/hero.png";

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
        <button className="text-lg  px-3 py-2 border-none bg-[#53c28b] hover:bg-[#53c26b] rounded-md text-[#121212] w-[max-content]">
          See our works
        </button>
      </div>

      {/*Homepage - Image*/}
      <div>
        <Image
          src={Hero_img}
          alt="hero_img"
          className="w-full md:h-[500px] object-cover "
        />
      </div>
    </div>
  );
}
