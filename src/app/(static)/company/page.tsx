import Hero from "./hero";
import Service from "./services";
import "./style.css";

export default function Page() {
  return (
    <main id="main-about" className="bg-[#202123]">
      <Hero />
      <section className="mt-20">
        <Service />
      </section>
    </main>
  );
}
