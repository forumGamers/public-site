import ServiceCard from "@/components/mollecul/card/servicesCard";

export default function Service() {
  return (
    <div className="bg-[#f2f2f2] mx-auto px-4 sm:px-6 lg:px-8 w-full sm:w-full justify-center items-center h-2/4 rounded-xl rounded-b-lg">
      <header className="header-service">
        <h1 className="text-blue-gray-900 font-bold">Our Services</h1>
      </header>
      <article className="grid grid-cols-3 gap-4">
        {[
          {
            title: "Social Platform",
            desc:
              "ForumGamers social platform is a dedicated space for gamers to connect, collaborate, and build a community.",
            backContent: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime quo, minima
    nostrum aspernatur quod laborum odit cumque praesentium,`,
          },
          {
            title: "Tournaments",
            desc:
              "Take your gaming challenges to the next level. Organize tournaments, participate in thrilling competitions, and showcase your skills to our gaming community",
            backContent: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime quo, minima
    nostrum aspernatur quod laborum odit cumque praesentium,`,
          },
          {
            title: "In game item store",
            desc:
              "Secure transactions and a diverse selection, our marketplace provides a seamless way to enhance your gameplay",
            backContent: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime quo, minima
    nostrum aspernatur quod laborum odit cumque praesentium,`,
          },
        ].map((card) => (
          <ServiceCard
            title={card.title}
            desc={card.desc}
            backContent={card.backContent}
            key={card.title}
          />
        ))}
      </article>
    </div>
  );
}
