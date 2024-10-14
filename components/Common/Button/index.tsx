import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const Button = (props: ButtonProps) => {
  const { children, onClick } = props;
  return (
    <a
      onClick={(e) => onClick(e)}
      className="group flex items-center justify-between gap-4 rounded-lg border border-indigo-600 bg-indigo-600 px-5 py-3 transition-colors hover:bg-transparent focus:outline-none focus:ring"
      href="#"
    >
      <span className="font-medium text-white transition-colors group-hover:text-indigo-600 group-active:text-indigo-500">
        {children}
      </span>

      <span className="shrink-0 rounded-full border border-current p-2 text-indigo-600 group-active:text-indigo-500">
        <svg
          className="size-5 rtl:rotate-180"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
        </svg>
      </span>
    </a>
  );
};

export default Button;
