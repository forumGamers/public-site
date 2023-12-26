import Script from "next/script";

export default function Hero() {
  return (
    <>
    <section>
    <div className="w-full">
        <header className="hero-header relative z-10 w-full px-5 sm:px-12 md:px-12 lg:px-12 xl:px-8">
          <span id="logo-fg" className="block sm:inline-block mt-3">
              <img
                src="./global/fg.jpg"
                alt="forum gamers"
                loading="lazy"
                className="w-[110px] h-[110px] max-w-[110px] sm:w-[55px] sm:h-[55px] lg:w-[75px] lg:h-[75px]"
              />
          </span>
          <h2
            className="title-hero z-30 relative inline font-bold tracking-tight mt-10 sm:text-4xl sm:leading-150 md:text-4xl lg:text-[64px] px-5"
          >What is Forum Gamers?
          </h2>
        </header>
        </div>
      <article
        className="sub-title z-20 px-3 sm:mt-8 sm:px-10 md:max-w-[1244px] md:px-10 lg:mt-8 lg:px-12 xl:mt-8 xl:mb-16 xl:px-4 2xl:mt-8"
        id="desc"
      >
        <div className="mt-1 z-20 header-subtitle text-3xl font-bold lowercase leading-[100%] tracking-tight mob:text-[3.4rem] sm:text-5xl sm:leading-150 md:text-5xl lg:text-[64px] lg:max-w-[1200px]s">
          <p className="md:min-w-none block max-md:block max-md:max-w-[420px] max-md:text-[90px] max-md:leading-[85%] max-md:tracking-[-0.06em] max-sm:max-w-[360px] max-sm:text-[35px] max-mob:max-w-[310px] max-mob:text-[28px]">
            <span id="social-platform">Social platform</span>
          </p>
          <p className="md:min-w-none max-md:block max-md:max-w-[420px] max-md:text-[90px] max-md:leading-[85%] max-md:tracking-[-0.06em] max-sm:max-w-[360px] max-sm:text-[35px] max-mob:max-w-[310px] max-mob:text-[28px]">
            <span id="tournament">Tournaments,</span>
          </p>
          <p className="md:min-w-none max-md:block max-md:max-w-[420px] max-md:text-[90px] max-md:leading-[85%] max-md:tracking-[-0.06em] max-sm:max-w-[360px] max-sm:text-[35px] max-mob:max-w-[310px] max-mob:text-[28px]">
            <span id="in-game-store">In-game item store,</span>
          </p>
          <p className="md:min-w-none max-md:block max-md:max-w-[420px] max-md:text-[90px] max-md:leading-[85%] max-md:tracking-[-0.06em] max-sm:max-w-[360px] max-sm:text-[35px] max-mob:max-w-[310px] max-mob:text-[28px]">
            <span id="greets">All for gamers!</span>
          </p>
          <br />
        </div>
        <Script
          dangerouslySetInnerHTML={{
            __html: `import {
            animate,
            inView,
          } from "https://cdn.skypack.dev/pin/motion@v10.14.2-LJwQD7W51KHV0ZIF3ZRz/mode=imports,min/optimized/motion.js";
        
          const transform = "translateX(0)";
          inView("#desc", () => {
            ["#social-platform", "#tournament", "#in-game-store", "#greets"].forEach(
              (el, i) => {
                animate(
                  el,
                  { opacity: 1, transform },
                  { easing: "ease-in-out", delay: 0.3 * (i + 1) },
                );
              },
            );
          });`,
          }}
        />
      </article>
    </section>
    </>
  );
}
