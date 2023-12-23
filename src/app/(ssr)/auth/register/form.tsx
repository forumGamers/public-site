"use client";

import { Checkbox, Input } from "@/components/atom/form/material-tailwind";
import { Typography } from "@/components/atom/typography/typograph";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import LoadingOverlay from "@/components/loader/overlay";
import { useState } from "react";

export type state = {
  fullname: string;
  username: string;
  email: string;
  password: string;
};

export default function Form() {
  const { pending } = useFormStatus();
  const [data, setData] = useState<state>({
    fullname: "",
    username: "",
    email: "",
    password: "",
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <LoadingOverlay spinner text="...loading" active={pending}>
      <div className="mb-1 flex flex-col gap-6">
        <Typography variant="h6" color="blue-gray" className="-mb-3">
          Your Name
        </Typography>
        <Input
          size="lg"
          onChange={onChange}
          placeholder="name@mail.com"
          value={data.fullname}
          name="fullname"
          className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
          labelProps={{
            className: "before:content-none after:content-none",
          }}
        />
        <Typography variant="h6" color="blue-gray" className="-mb-3">
          Your Username
        </Typography>
        <Input
          size="lg"
          onChange={onChange}
          placeholder="name123"
          value={data.username}
          name="username"
          className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
          labelProps={{
            className: "before:content-none after:content-none",
          }}
        />
        <Typography variant="h6" color="blue-gray" className="-mb-3">
          Your Email
        </Typography>
        <Input
          size="lg"
          onChange={onChange}
          name="email"
          value={data.email}
          placeholder="name@mail.com"
          className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
          labelProps={{
            className: "before:content-none after:content-none",
          }}
        />
        <Typography variant="h6" color="blue-gray" className="-mb-3">
          Password
        </Typography>
        <Input
          value={data.password}
          type="password"
          size="lg"
          name="password"
          onChange={onChange}
          placeholder="********"
          className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
          labelProps={{
            className: "before:content-none after:content-none",
          }}
        />
      </div>
      <Checkbox
        label={
          <Typography
            variant="small"
            color="gray"
            className="flex items-center font-normal"
          >
            I agree the
            <a
              href="#"
              className="font-medium transition-colors hover:text-gray-900"
            >
              &nbsp;Terms and Conditions
            </a>
          </Typography>
        }
        containerProps={{ className: "-ml-2.5" }}
      />
    </LoadingOverlay>
  );
}
