import React, { MouseEvent } from "react";
import { ProductType } from "@/type";
import { useDispatch } from "react-redux";
import { moveToOutput } from "@/store/reducers/productSlice";
interface ProductCardProps {
  info: ProductType;
  onClick: (e: MouseEvent<HTMLDivElement>) => void;
}

const ProductCard = (props: ProductCardProps) => {
  const { onClick, info } = props;
  const dispatch = useDispatch();
  //   const listData = useSelector((state: RootState) => state.products.lists);

  const handleClick = () => {
    dispatch(moveToOutput(info));
  };
  return (
    <div
      onClick={(e) => onClick(e)}
      className="rounded-xl w-[100%] border-2 border-gray-100 bg-white shadow-md"
    >
      <div className="flex items-start gap-4 sm:p-2 lg:p-2">
        <a href="#" className="block shrink-0">
          <img
            alt=":) image not found"
            src={info.thumbnail_image_path}
            className="size-14 rounded-lg object-cover"
          />
        </a>

        <div className="w-[100%]">
          <div className="flex flex-row justify-between w-[100%]">
            <h3 className="flex justify-between font-medium sm:text-lg text-gray-800">
              {info.part_name_display}
            </h3>
            <h5 className="flex justify-between font-medium sm:text-lg text-gray-800">
              {info.cost_display}
            </h5>
          </div>

          <p className="line-clamp-2 text-sm text-gray-700">
            {info.part_description_display}
          </p>
        </div>
      </div>
      <div className="flex justify-end">
        <strong
          onClick={(e) => {
            e.stopPropagation();
            handleClick();
          }}
          className="cursor-pointer -mb-[2px] -me-[2px] inline-flex items-center gap-1 rounded-ee-xl rounded-ss-xl bg-green-600 px-3 py-1.5 text-white"
        >
          <span className="text-[10px] font-medium sm:text-xs">決定</span>
        </strong>
      </div>
    </div>
  );
};

export default ProductCard;
