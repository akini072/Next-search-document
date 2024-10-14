import Output from "@/components/Output";
import { Button } from "flowbite-react";
import React from "react";
import { RootState } from "@/store";
import { useSelector } from "react-redux";

const OutputBoard = () => {
  const outputData = useSelector(
    (state: RootState) => state.products.outputData
  );
  const price = useSelector((state: RootState) => state.products.price);
  // const [price, setPrice] = useState<number>(
  //   useSelector((state: RootState) => state.products.price)
  // );

  const handleChangePrice = (value: number) => {
   console.log('')
  };

  return (
    <div className="w-[50%] py-5">
      <div className="flex flex-row justify-between border-b pb-3 px-5">
        <div className="flex flex-row gap-5 items-center">
          <h3 className="text-gray-800">選択一覧</h3>
          <Button
            disabled={outputData && outputData.length == 0 ? true : false}
          >
            出力
          </Button>
        </div>
        <div className="max-w-md flex flex-row items-center">
          <label
            className="px-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            工程内予算　合計 :
          </label>
          <div className="flex flex-row justify-center align-middle">
            <input
              type="number"
              value={price}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleChangePrice(Number(e.target.value))
              }
              aria-describedby="helper-text-explanation"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="0"
              required
            />
            <div className="flex flew-col justify-center font-medium text-gray-900 dark:text-white text-center items-center">
              <h4 className="pl-2">万円</h4>
            </div>
          </div>
        </div>
      </div>
      <Output></Output>
    </div>
  );
};

export default OutputBoard;
