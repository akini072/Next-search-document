import { Spinner } from "flowbite-react";

const Loading = () => {
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center">
      <div className="flex flex-row gap-10">
        <Spinner />
        <h3>読み込み中...</h3>
      </div>
    </div>
  );
};

export default Loading;
