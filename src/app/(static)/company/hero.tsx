import Script from "next/script";

export default function Hero() {
  return (
    <>
      <section
        id="header"
        className="relative w-full pb-16 lg:pb-32 xl:pb-36 2xl:pb-[11rem]"
      >
        <div className="h-[10px] w-full"></div>
        <header className="hero-header relative z-10 mx-auto max-w-[1244px] px-5 sm:px-12 md:px-16 lg:px-12 xl:px-4">
          <h2
            id="title-hero"
            className="relative inline text-4xl font-bold tracking-tight text-cyan-dark sm:text-5xl sm:leading-150 md:text-5xl lg:text-[64px]"
          >
            <span id="logo-fg" className="block sm:inline-block mt-3">
              <img
                src="/global/fg.jpg"
                alt="forum gamers"
                loading="lazy"
                className="w-[110px] h-[110px] max-w-[110px] sm:w-[55px] sm:h-[55px] lg:w-[75px] lg:h-[75px]"
              />
            </span>
            <span className="relative mt-2 inline-block sm:mt-0">
              <span className="relative z-[1] header-title sm:tracking-tighter">
                What is Forum Gamers?
              </span>
              <span
                id="title-highlight"
                className="title-highlight w-0 absolute left-0 -bottom-1 z-0 hidden min-[375px]:block sm:bottom-2 md:bottom-1 lg:h-[20px] lg:w-[600px]"
              ></span>
            </span>
          </h2>
        </header>
        <Script
          dangerouslySetInnerHTML={{
            __html: `import {
            animate,
            inView,
          } from "https://cdn.skypack.dev/pin/motion@v10.14.2-LJwQD7W51KHV0ZIF3ZRz/mode=imports,min/optimized/motion.js";
        
          const easing = [0.17, 0.55, 0.55, 1];
        
          inView("#title-hero", () => {
            animate(
              "#title-highlight",
              { opacity: 1, width: "100%" },
              { easing, delay: 0.5 },
            );
        
            animate(
              "#logo-fg",
              { opacity: 1, transform: "translate(0%, 25%)" },
              { easing, delay: 0.5 },
            );
          });`,
          }}
        />
      </section>
      <article
        className="z-20 mx-auto mt-4 px-5 sm:mt-16 sm:px-10 md:max-w-[1244px] md:px-16 lg:mt-8 lg:px-12 xl:mt-12 xl:px-4 2xl:mt-[6rem]"
        id="desc"
      >
        <div className="mt-1 z-20 header-subtitle text-[2.2rem] font-bold lowercase leading-[100%] tracking-tight mob:text-[3.4rem] sm:mt-3 sm:text-[4rem] md:mt-1.5 md:text-[5rem] md:leading-[5rem] md:tracking-[-0.06em] lg:max-w-[850px] xl:max-w-[1200px] xl:text-[5.9rem] xl:leading-[6.25rem]">
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
    </>
  );
}
