import { Card } from "@/components/atom/card/material-tailwind";
import { Button } from "@/components/atom/button/material-tailwind";
import { Typography } from "@/components/atom/typography/typograph";
import Link from "next/link";
import Form from "./form";
import { registerHandler } from "@/actions/user";

export default function Page() {
  return (
    <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">
        Sign Up
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Nice to meet you! Enter your details to register.
      </Typography>
      <form
        className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        action={registerHandler}
      >
        <Form />
        <Button className="mt-6" fullWidth type="submit">
          sign up
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Already have an account?{" "}
          <Link href="/auth/login" className="font-medium text-gray-900">
            Sign In
          </Link>
        </Typography>
      </form>
    </Card>
  );
}
