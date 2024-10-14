"use client";
import React from "react";
import Header from "@/components/Header";
import InputModal from "@/components/Common/Modal";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { clearProductList } from "@/store/reducers/productSlice";

const HomePage: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(clearProductList());
  }, []);
  return (
    <section className="bg-gray-900 text-white lg:h-screen">
      <Header></Header>
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex  lg:items-center">
        <div className="mx-auto my-auto max-w-5xl text-center">
          <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
            私たちのサイトを見つけることを歓迎します。
          </h1>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <InputModal>メニュー 1</InputModal>
            <InputModal>メニュー 2</InputModal>
            <InputModal>メニュー 3</InputModal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
