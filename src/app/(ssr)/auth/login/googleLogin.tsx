"use client";

import GoogleProvider from "@/providers/googleLoginProvider";
import { useState, useEffect } from "react";
import { GoogleLogin } from "@react-oauth/google";
import LoadingOverlay from "@/components/loader/overlay";
import { googleLogin } from "@/actions/user";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import ErrorAlert from "@/components/mollecul/dialog/errorPopup";

export default function GoogleLoginForm() {
  const { pending } = useFormStatus();
  const [mount, setMount] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    setMount(true);
  });

  return (
    <GoogleProvider>
      {mount && (
        <LoadingOverlay spinner text="...loading" active={pending}>
          <GoogleLogin
            useOneTap
            onSuccess={googleLogin}
            onError={() => {
              setOpen(true);
            }}
            text="signin_with"
            shape="circle"
            size="medium"
            cancel_on_tap_outside
          />
        </LoadingOverlay>
      )}
      <ErrorAlert
        message="failed to login with google"
        open={open}
        handler={setOpen}
        name="Error"
      />
    </GoogleProvider>
  );
}
