import ServiceCard from "@/components/mollecul/card/servicesCard";

export default function Service() {
  return (
    <div className="bg-[#f2f2f2] mx-auto sm:px-8 lg:px-6 w-full sm:w-full justify-center items-center h-2/4 rounded-xl rounded-b-lg">
      <header className="header-service">
        <h1 className="text-blue-gray-900 font-bold text-4xl">Our Services</h1>
      </header>
      <article className="grid grid-cols-2 gap-5">
        {[
          {
            title: "Social Platform",
            photo: "/global/fg.jpg",
            desc:
              "ForumGamers social platform is a dedicated space for gamers to connect, collaborate, and build a community.",
            backContent: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime quo, minima
    nostrum aspernatur quod laborum odit cumque praesentium,`,
          },
          {
            title: "Tournaments",
            photo: "aklsaknk",
            desc:
              "Take your gaming challenges to the next level. Organize tournaments, participate in thrilling competitions, and showcase your skills to our gaming community",
            backContent: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime quo, minima
    nostrum aspernatur quod laborum odit cumque praesentium,`,
          },
        ].map((card) => (
          <ServiceCard
            title={card.title}
            photo={card.photo}
            desc={card.desc}
            backContent={card.backContent}
            key={card.title}
          />
        ))}
      </article>
    </div>
  );
}
