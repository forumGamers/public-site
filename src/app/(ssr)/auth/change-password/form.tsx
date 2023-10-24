"use client";

import { useState } from "react";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import LoadingOverlay from "@/components/loader/overlay";

export type state = {
  password: string;
  confirmPassword: string;
};

export default function Form() {
  const [visiblePass, setVisiblePass] = useState<boolean>(false);
  const [visibleConfirm, setVisibleConfirm] = useState<boolean>(false);
  const { pending } = useFormStatus();

  const [pass, setPass] = useState<state>({
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPass((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <LoadingOverlay spinner text="...loading" active={pending}>
      <label htmlFor="password" className="label">
        <span className="label-text text-sm font-semibold  text-blue-700">
          Password
        </span>
      </label>
      <input
        className="input input-bordered rounded-xl w-full bg-white text-blue-700"
        type={visiblePass ? "text" : "password"}
        name="password"
        value={pass.password}
        onChange={handleChange}
        required
        placeholder="Input Your Password"
      />
      <label className="label">
        <span className="label-text text-sm font-semibold  text-blue-700">
          See Password
        </span>
      </label>
      <input
        type="checkbox"
        checked={visiblePass}
        onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
          setVisiblePass(e.target.checked);
        }}
      />

      <label htmlFor="confirmPassword" className="label">
        <span className="label-text text-sm font-semibold  text-blue-700">
          Confirm Password
        </span>
      </label>
      <input
        className="input input-bordered rounded-xl w-full bg-white  text-blue-700"
        type={visiblePass ? "text" : "password"}
        name="confirmPassword"
        value={pass.confirmPassword}
        onChange={handleChange}
        required
        placeholder="Input Confirm Password"
      />
      <label className="label">
        <span className="label-text text-sm font-semibold  text-blue-700">
          See Confirm Password
        </span>
      </label>
      <input
        type="checkbox"
        checked={visibleConfirm}
        onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
          setVisibleConfirm(e.target.checked);
        }}
      />
    </LoadingOverlay>
  );
}
