"use client";
import HomePage from "./home/page";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { clearProductList } from "@/store/reducers/productSlice";

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(clearProductList());
  }, []);
  return (
    <>
      <HomePage></HomePage>
    </>
  );
}
