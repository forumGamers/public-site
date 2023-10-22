"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Button } from "@/components/atom/button/material-tailwind";
import ErrorAlert from "@/components/mollecul/dialog/errorPopup";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import LoadingOverlay from "@/components/loader/overlay";

export type state = {
  email: string;
  password: string;
  recaptchaValid: boolean;
  tokenCaptcha: string;
};

export default function LoginForm({ message }: { message: string }) {
  const { pending } = useFormStatus();
  const [mount, setMount] = useState<boolean>(false);
  const [data, setData] = useState<state>({
    email: "",
    password: "",
    recaptchaValid: false,
    tokenCaptcha: "",
  });
  const [visiblePass, setVisiblePass] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    setMount(true);
  }, []);

  useEffect(() => {
    if (message) {
      setOpen(true);
      window.history.replaceState({}, "", window.location.pathname);
    }
  }, [message]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prev: state) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <LoadingOverlay spinner text="...loading" active={pending}>
        <div className="w-full m-auto">
          <label htmlFor="email" className="label">
            <span className="text-sm font-semibold text-blue-700">Email</span>
          </label>
          <input
            className="rounded-xl w-full bg-white text-blue-700 h-14 text-start p-2 focus:border focus:border-blue-500"
            type="text"
            name="email"
            value={data.email}
            onChange={handleChange}
            required
            placeholder="Please fill your email"
          />
          <label htmlFor="email" className="label">
            <span className="text-sm font-semibold text-blue-700">
              Password
            </span>
          </label>
          <input
            className="rounded-xl w-full bg-white h-14 text-start p-2 focus:border focus:border-blue-500 text-blue-700 "
            type={visiblePass ? "text" : "password"}
            name="password"
            value={data.password}
            onChange={handleChange}
            required
            placeholder="Please fill your password"
          />
          <label className="cursor-pointer label text-sm font-semibold text-blue-700 active:text-blue-800">
            <span
              className="font-sans"
              onClick={() => {
                setVisiblePass((prev) => !prev);
              }}
            >
              See Password
            </span>
          </label>
          {mount && (
            <ReCAPTCHA
              sitekey="6LfV1KomAAAAACDWJoD_5v_IWsITa665j6NGMmXl"
              onChange={(token: string | null) => {
                if (token)
                  setData((prev: state) => ({
                    ...prev,
                    recaptchaValid: true,
                    tokenCaptcha: token,
                  }));
              }}
              theme="dark"
            />
          )}
          <Link
            href="/auth/forget-password"
            className="flex justify-between d-flex flex-row-reverse cursor-pointer"
            rel="prefetch"
          >
            <span className="text-blue-700 font-semibold font-sans text-sm mb-2">
              Forget Password ?
            </span>
          </Link>
          <Button
            type="submit"
            className=" w-full text-white bg-blue-700 mb-2 cursor-pointer disabled:bg-blue-gray-800"
            disabled={
              data.recaptchaValid && data.email && data.password ? false : true
            }
          >
            Log In
          </Button>
        </div>
      </LoadingOverlay>
      <ErrorAlert
        name="Error"
        message={message}
        handler={setOpen}
        open={open}
      />
    </>
  );
}
