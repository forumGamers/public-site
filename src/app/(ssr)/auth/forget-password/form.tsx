"use client";

import { useState } from "react";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import LoadingOverlay from "@/components/loader/overlay";

export default function Form() {
  const { pending } = useFormStatus();
  const [email, setEmail] = useState<string>("");
  return (
    <LoadingOverlay spinner text="...loading" active={pending}>
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
    </LoadingOverlay>
  );
}
