import Hero from "./hero";
import Service from "./services";
import "./style.css";

export default function Page() {
  return (
    <main id="main-about">
      <Hero />
      <section className="bg-[#f2f2f2] rounded-b-xl mt-12">
        <Service />
      </section>
    </main>
  );
}
