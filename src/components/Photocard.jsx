import React from "react";
import Image from "next/image";

const PhotoCard = ({ photo }) => {
  return (
    <>
      <Image
        src={photo.src}
        className="col-span-1 rounded-2xl aspect-square w-full object-cover"
        width={350}
        height={20}
      />
    </>
  );
};

export default PhotoCard;
