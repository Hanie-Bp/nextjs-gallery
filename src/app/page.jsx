import React from "react";
import Image from "next/image";
import images from "../../public/photos";
import Link from "next/link";
const page = () => {
  return (
    <>
      <div className="container mx-auto p-5">
        <h1 className="text-center text-5xl font-bold">Images</h1>
        <div className="flex justify-center">
          <ul className="mt-10 grid auto-rows-max grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 p-10">
            {images.map((image) => (
              <Link href={`/photos/${image.id}`} key={image.id}>
                <li className="cursor-pointer">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    height={500}
                    width={500}
                    className='aspect-square w-full rounded-xl object-cover'
                  ></Image>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default page;
