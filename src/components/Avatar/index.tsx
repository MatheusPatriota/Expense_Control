import React from "react";

interface AvatarProps {
  name: string;
  imageURL: string;
}
function Avatar({ name, imageURL }: AvatarProps) {
  return (
    <div className="p-12 rounded-md bg-gray-200 h-[200px] w-fit flex justify-center items-center gap-4">
      <div>
        <img
          src={imageURL}
          alt={name}
          className="rounded-full h-[150px] w-[150px] object-cover object-center"
          style={{ objectFit: "cover", objectPosition: "center center" }}        />
      </div>
      <div>
        <span className="font-bold">{name}</span>
      </div>
    </div>
  );
}

export default Avatar;
