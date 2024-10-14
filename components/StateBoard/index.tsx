import { Label, Select } from "flowbite-react";
import React, { useState } from "react";
import { RootState } from "@/store";
import { useSelector } from "react-redux";

const StateBoard = () => {
  const initWallet = useSelector((state: RootState) => state.products.wallet);

  // const [initWallet, setInitWallet] = useState<number>(
  //   useSelector((state: RootState) => state.products.wallet)
  // );

  const [cycleTime, setCycleTime] = useState<number>();

  const handleChangeInitWallet = (value: number) => {
    console.log(value);
  };

  const handleChangeCycleTime = (value: number) => {
    setCycleTime(value);
  };

  const handleSelectChange = (value: number) => {
    setCycleTime(value)
  }

  return (
    <div className="flex flex-col px-5">
      <div className="flex flex-row justify-end pr-11">
        <div className="max-w-md flex flex-row items-center">
          <label
            className="pr-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            残予算額 :
          </label>
          <div className="flex flex-row justify-center align-middle">
            <input
              type="number"
              value={initWallet}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleChangeInitWallet(Number(e.target.value))
              }
              aria-describedby="helper-text-explanation"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="90210"
              required
            />
            <div className="flex flew-col justify-center font-medium text-gray-900 dark:text-white text-center items-center">
              <h4 className="pl-2">万円</h4>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-start gap-5">
        <div className="flex flex-col">
          <Label className="pl-2"value="工程" />
          <Select onChange={(e) =>handleSelectChange(Number(e.target.value))}  required>
            <option value={0}>選択</option>
            <option value={1.0}>加工機のボタンを押す</option>
            <option value={2.0}>加工機の扉を開ける</option>
            <option value={2.0}>エアーノズル取り出し</option>
            <option value={5.0}>エアーをワークへ噴射</option>
            <option value={2.0}>エアーノズルを戻す</option>
            <option value={2.0}>ワーク取り出しボタンを押す</option>
            <option value={6.0}>ワーク取り出し</option>
            <option value={1.0}>エアーノズル取り出し</option>
            <option value={17.0}>エアー噴射</option>
            <option value={1.5}>エアーノズル戻す</option>
            <option value={4.0}>完成品ワークを箱へ入れる</option>
            <option value={3.5}>新規ワークを取り出す</option>
            <option value={3.5}>ホコリ、異物チェックをする</option>
            <option value={2.0}>エアーノズル取り出し</option>
            <option value={11.0}>エアー噴射</option>
            <option value={1.5}>エアーノズル戻す</option>
            <option value={9.0}>ワーク固定部位の設定</option>
            <option value={13.0}>ワークを固定</option>
            <option value={3.0}>加工機の扉を閉める</option>
            <option value={5.0}>PC設定、ボタンを押す</option>

            <option></option>



          </Select>
        </div>
        <div className="flex flex-col">
          <div className="max-w-sm">
            <label
              className="pl-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              サイクルタイム :
            </label>
            <input
              type="number"
              value={cycleTime}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleChangeCycleTime(Number(e.target.value))
              }
              aria-describedby="helper-text-explanation"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              required
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StateBoard;
