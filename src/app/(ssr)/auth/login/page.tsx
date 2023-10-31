import LoginNavbar from "@/components/mollecul/navbar/loginNav";
import LoginForm from "./form";
import GoogleLoginForm from "./googleLogin";
import { loginHandler } from "@/actions/user";
import { getServerSideSession } from "@/helpers/session";
import { redirect } from "next/navigation";

export default async function Page() {
  if (await getServerSideSession()) redirect("/");
  return (
    <>
      <LoginNavbar />
      <main className="body mb-5 justify-center items-center w-full h-auto min-h[100vh]">
        <section className="w-[100%] h-screen flex justify-center items-center">
          <div className="border border-white p-12 w-[30%] h-[80vh]">
            <h2 className="text-4xl text-blue-700 text-center mb-6 z-10">
              LOGIN
            </h2>
            <form
              className="mb-4 flex justify-center items-center"
              action={loginHandler}
            >
              <LoginForm />
            </form>
            <GoogleLoginForm />
          </div>
        </section>
      </main>
    </>
  );
}
