"use client";

import type { ChangeEvent, MouseEvent } from "react";

export interface PasswordFormProps {
  className?: string;
  visiblePass: boolean;
  name: string;
  id: string;
  value: string;
  required?: boolean;
  placeholder?: string;
  setVisible: (e: MouseEvent<HTMLSpanElement>) => void;
  onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function PasswordForm({
  value,
  visiblePass,
  setVisible,
  id,
  name,
  className,
  required,
  onChangeHandler,
}: PasswordFormProps) {
  return (
    <>
      <label htmlFor="password" className="label">
        <span className="text-sm font-semibold text-blue-700">Password</span>
      </label>
      <input
        className={`rounded-xl w-full bg-white h-14 text-start p-2 focus:border focus:border-blue-500 text-blue-700 ${className}`}
        type={visiblePass ? "text" : "password"}
        name={name}
        id={id}
        value={value}
        onChange={onChangeHandler}
        required={required}
        placeholder="Please fill your password"
      />
      <label className="cursor-pointer label text-sm font-semibold text-blue-700 active:text-blue-800">
        <span className="font-sans" onClick={setVisible}>
          See Password
        </span>
      </label>
    </>
  );
}
