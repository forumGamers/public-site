"use client";

import { useState } from "react";

export default function Form() {
  const [email, setEmail] = useState<string>("");
  return (
    <>
      <input
        className="input input-bordered rounded-xl w-full bg-white"
        type="text"
        name="email"
        value={email}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          const { value } = e.target;
          setEmail(value);
        }}
        required
        placeholder="Please Input Your Email"
      />
    </>
  );
}
