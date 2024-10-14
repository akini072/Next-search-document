import { Button, Popover } from "flowbite-react";
import React, { useState } from "react";
import { RootState } from "@/store";
import { useDispatch, useSelector } from "react-redux";
import { detailSearchFunction } from "@/utils";
import { setDetailedSearchData } from "@/store/reducers/productSlice";

interface PopoverButtonProps {
  disabled?: boolean;
}

export function PopoverButton(props: PopoverButtonProps) {
  const [mass, setMass] = useState<string>("");
  const [length, setLength] = useState<string>("");
  const [speed, setSpeed] = useState<string>("");
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  // const [filteredData, setFilteredData] = useState<ProductType[]>(
  //   useSelector((state: RootState) => state.products.filteredData)
  // );
  // const [open, setOpen] = useState<boolean>(false);
  const { disabled } = props;
  const filteredData = useSelector(
    (state: RootState) => state.products.filteredData
  );
  const activeTab = useSelector((state: RootState) => state.products.activeTab);

  const searchQuery = {
    mass: Number(mass),
    length: Number(length),
    speed: Number(speed),
  };

  const handleClick = () => {
    const result = detailSearchFunction(filteredData, searchQuery, activeTab);
    dispatch(setDetailedSearchData(result));
    setOpen(false);
  };

  return (
    <Popover
      open={open}
      aria-labelledby="default-popover"
      content={
        <div className="w-100 text-sm text-gray-500 dark:text-gray-400 shadow-lg">
          <div className="border-b border-gray-200 bg-gray-100 px-3 py-2 dark:border-gray-600 dark:bg-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white">
              詳細設定
            </h3>
          </div>
          <div className="px-3 py-2 flex flex-row gap-2">
            <div className="flex flex-col">
              <div className="max-w-sm">
                <label className="pl-2 block text-sm font-medium text-gray-900 dark:text-white">
                  重量[kg] :
                </label>
                <input
                  value={mass}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setMass(e.target.value);
                  }}
                  type="text"
                  aria-describedby="helper-text-explanation"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="max-w-sm">
                <label className="pl-2 block text-sm font-medium text-gray-900 dark:text-white">
                  距離[mm] :
                </label>
                <input
                  value={length}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setLength(e.target.value)
                  }
                  type="text"
                  aria-describedby="helper-text-explanation"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="max-w-sm">
                <label className="pl-2 block text-sm font-medium text-gray-900 dark:text-white">
                  速度[mm/sec] :
                </label>
                <input
                  value={speed}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setSpeed(e.target.value)
                  }
                  type="text"
                  aria-describedby="helper-text-explanation"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                />
              </div>
            </div>
          </div>
          <div className="flex w-[100%] flex-row justify-end px-3 py-2">
            <Button onClick={() => handleClick()}>確認</Button>
          </div>
        </div>
      }
    >
      <Button
        onClick={() => {
          setOpen(true);
        }}
        disabled={disabled ? true : false}
      >
        選択
      </Button>
    </Popover>
  );
}
