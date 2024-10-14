"use client";

import Header from "@/components/Header";
import MainBoard from "@/components/MainBoard";
import SearchBar from "@/components/SearchBar";
import StateBoard from "@/components/StateBoard";
import { useDispatch } from "react-redux";
import { setInitData } from "@/store/reducers/productSlice";
import React, { Suspense, useEffect } from "react";
import Loading from "./loading";

const DashBoard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setInitData());
  }, []);

  return (
    <Suspense fallback={<Loading />}>
      <section className=" text-white lg:h-screen">
        <Header bg="light"></Header>
        <div className="mx-auto  px-4 py-5 flex  flex-col gap-5">
          <SearchBar></SearchBar>
          <StateBoard></StateBoard>
          <MainBoard></MainBoard>
        </div>
      </section>
    </Suspense>
  );
};

export default DashBoard;
