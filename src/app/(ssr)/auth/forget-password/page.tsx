import { forgetPassword } from "@/actions/user";
import Form from "./form";
import { Button } from "@/components/atom/button/material-tailwind";

export default function Page() {
  return (
    <section className="container mb-5 justify-center items-center w-full h-auto min-h[100vh]">
      <div className="w-[100%] h-screen justify-center items-center">
        <form action={forgetPassword}>
          <div className="w-full border border-white">
            <label htmlFor="email" className="label">
              <span className="label-text text-sm font-semibold text-blue-700">
                Email
              </span>
            </label>
            <Form />
          </div>
          <Button
            type="submit"
            className="btn w-full text-white bg-blue-700 mb-2"
          >
            Submit
          </Button>
        </form>
      </div>
    </section>
  );
}
