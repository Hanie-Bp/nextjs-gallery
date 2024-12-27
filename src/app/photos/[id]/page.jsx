import React from "react";
import images from "../../../../public/photos";
import PhotoCard from "@/components/photoCard";

// console.log(images);

const page = ({ params }) => {
  const photo = images.find((photo) => photo.id === Number(params.id));

  return (
    <div className="flex justify-center p-10">
      <div className="grid grid-cols-1 ">
        <h1 className="text-center text-2xl p-5">Id: {params.id}</h1>
        <PhotoCard photo={photo} />
        <button className="bg-black text-white my-4 mx-auto p-2 px-3 rounded-xl hover:bg-white hover:text-black hover:border hover:border-black">
          <a href={photo.src} download={`${photo.title || "download"}.jpg`}>
            Download
          </a>
        </button>
      </div>
    </div>
  );
};

export default page;
