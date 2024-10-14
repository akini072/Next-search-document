import React, { ChangeEvent } from "react";

interface InputProps {
  label: string;
  value: number | string | undefined;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = (props: InputProps) => {
  const { label, value, onChange } = props;

  return (
    <div className="flex flex-col">
      <div className="max-w-sm">
        <label className="pl-2 block text-sm font-medium text-gray-900 dark:text-white">
          {label}:
        </label>
        <input
          type="text"
          value={value ? value : ""}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)}
          aria-describedby="helper-text-explanation"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="null"
          required
        />
      </div>
    </div>
  );
};

export default Input;
