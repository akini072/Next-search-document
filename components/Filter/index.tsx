import { Checkbox, Label, Select } from "flowbite-react";
import React from "react";
import { RootState } from "@/store";
import { useSelector } from "react-redux";
import { PopoverButton } from "../Common/Popover";

const Filter = () => {
  const filteredData = useSelector(
    (state: RootState) => state.products.filteredData
  );
  return (
    <div className="flex gap-10 justify-center py-2 w-[90%] items-center border rounded-md">
      <div className="flex flex-row items-center">
        <Label className="pr-2" value="並べ替え:" />
        <Select
          disabled={filteredData.length == 0 ? true : false}
          required
        >
          <option>料金</option>
          <option>第二段階</option>
          <option>第三段階</option>
          <option>第四段階</option>
          <option>第五段階</option>
        </Select>
      </div>
      <div className="flex flex-row items-center">
        <Label className="pr-2" value="条件絞込み" />
        <PopoverButton
          disabled={filteredData.length == 0 ? true : false}
        ></PopoverButton>
      </div>
      <div>
        <Checkbox
          className="cursor-no-drop"
          color="cyan"
          disabled
          //   disabled={filteredData.length == 0 ? true : false}
        />
        &nbsp;&nbsp;
        <Label  value="AI検索" />
      </div>
    </div>
  );
};

export default Filter;
