import React from "react";
import Image from "next/image";

const PhotoCard = ({ photo }) => {
  return (
    <>
    <Image src={photo.src} width={350} height={20}/>
    </>
  );
};

export default PhotoCard;
