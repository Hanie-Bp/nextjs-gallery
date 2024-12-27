import React from "react";
import images from "../../../../public/photos";
import PhotoCard from "@/components/photoCard";

// console.log(images);

const page = ({ params }) => {
  const photo = images.find((photo) => photo.id === Number(params.id));

  return (
    <div className="grid grid-cols-1 mx-auto bg-slate-400">
      <PhotoCard photo={photo} />
    </div>
  );
};

export default page;
