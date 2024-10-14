import React, { ChangeEvent, useState } from "react";
import { Button, TextInput } from "flowbite-react";
import { HiSearch, HiCalendar, HiUser } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { initSearch } from "@/store/reducers/productSlice";
import { RootState } from "@/store";
import moment from "moment";
import { totalSearchFunction } from "@/utils";

const SearchBar = () => {
  const dispatch = useDispatch();
  const listData = useSelector((state: RootState) => state.products.lists);
  const [budget, setBudget] = useState<number>(
    useSelector((state: RootState) => state.products.budget)
  );
  const startDateFromRedux = useSelector(
    (state: RootState) => state.products.stateDate
  );
  const endDateFromRedux = useSelector(
    (state: RootState) => state.products.stateDate
  );
  const [startDate, setStartDate] = useState<string>(
    moment(startDateFromRedux).format("YYYY-MM-DD")
  );
  const [endDate, setEndDate] = useState<string>(
    moment(endDateFromRedux).format("YYYY-MM-DD")
  );
  const [square, setSquare] = useState<number>(
    useSelector((state: RootState) => state.products.square)
  );

  const handleBudgetChange = (e: ChangeEvent<HTMLInputElement>) => {
    setBudget(Number(e.target.value));
  };

  const handleStartDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStartDate(moment(e.target.value).format("YYYY-MM-DD"));
  };

  const handleEndDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEndDate(moment(e.target.value).format("YYYY-MM-DD"));
  };

  const handleSquareChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSquare(Number(e.target.value));
  };

  const handleClick = () => {
    const searchQuery = {
      budget,
      startDate,
      endDate,
      square,
    };
    const result = totalSearchFunction(listData, searchQuery);
    dispatch(initSearch(result));
  };

  return (
    <div className="flex justify-center w-[100%]">
      <div className="flex">
        <TextInput
          className="!rounded-r-none"
          value={budget}
          onChange={(e) => {
            handleBudgetChange(e);
          }}
          size={10}
          type="number"
          icon={HiSearch}
          placeholder="予算"
          required
        />

        <TextInput
          value={startDate}
          onChange={(e) => {
            handleStartDateChange(e);
          }}
          type="date"
          icon={HiCalendar}
          placeholder="エリア面積"
          required
        />
        <TextInput
          value={endDate}
          onChange={(e) => {
            handleEndDateChange(e);
          }}
          type="date"
          icon={HiCalendar}
          placeholder="エリア面積"
          required
        />
        <TextInput
          value={square}
          onChange={(e) => {
            handleSquareChange(e);
          }}
          type="number"
          icon={HiUser}
          placeholder="エリア面積"
          required
        />
        <Button onClick={() => handleClick()}>検索</Button>
      </div>
    </div>
  );
};

export default SearchBar;
