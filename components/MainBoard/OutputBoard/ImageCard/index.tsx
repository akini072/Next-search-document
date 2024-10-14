import React from "react";
import Image from "next/image";
import { ProductType } from "@/type";
import { useDispatch } from "react-redux";
import { setActiveItem } from "@/store/reducers/productSlice";

interface ImageCardProps {
  info: ProductType;
  tab_info: number;
  // onClick: (e: MouseEvent<HTMLDivElement>) => void
}

const ImageCard = (props: ImageCardProps) => {
  const { info } = props;

  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setActiveItem(info));
  };
  return (
    <div onClick={() => handleClick()} className="inline-block">
      <Image
        src={info.thumbnail_image_path}
        width={80}
        height={80}
        alt=":( image not found"
      />
      {/* <div className="flex flex-col pt-4">
        <h4 className="text-gray-800">{info?.part_name_display}</h4>
        <h4 className="text-gray-800">{info?.cost_display}</h4>
      </div> */}
    </div>
  );
};

export default ImageCard;
