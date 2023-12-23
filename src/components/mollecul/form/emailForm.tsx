"use client";

import type { ChangeEvent } from "react";

export interface EmailFormProps {
  name: string;
  id: string;
  value: string;
  className?: string;
  required?: boolean;
  placeholder?: string;
  onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function EmailForm({
  name,
  id,
  value,
  className,
  required = false,
  placeholder,
  onChangeHandler,
}: EmailFormProps) {
  return (
    <>
      <label htmlFor="email" className="label">
        <span className="text-sm font-semibold text-blue-700">Email</span>
      </label>
      <input
        className={`rounded-xl w-full bg-white text-blue-700 h-14 text-start p-2 focus:border focus:border-blue-500 ${className}`}
        type="text"
        name={name}
        value={value}
        onChange={onChangeHandler}
        required={required}
        placeholder={placeholder || "Please fill your email"}
        id={id}
      />
    </>
  );
}
