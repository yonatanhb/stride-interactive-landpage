import Image from "next/image";

const teamMembers = [
  {
    name: "Itai Levin",
    title: "Founder & CEO",
    image: "/team/tm1.jpg",
    linkedinUrl: "https://www.linkedin.com/in/itai-levin-793538180/",
  },
  {
    name: "Chanan Berkovitz",
    title: "CTO",
    image: "/team/tm2.png",
    linkedinUrl: "https://www.linkedin.com/in/chanan-berkovits-219419244/",
  },
  {
    name: "Aviv Roseman",
    title: "COO",
    image: "/team/tm3.jpg",
    linkedinUrl: "#aviv-roseman-linkedin",
  },
  {
    name: "Saar Partush",
    title: "CAO",
    image: "/team/tm4.jpg",
    linkedinUrl: "https://www.linkedin.com/in/saar-partush-7bb372271/",
  },
];

export function TeamSection() {
  return (
    <section className="relative w-[1441px] h-[696px] text-white">
      {/* Background Image - pic4 */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/pic4.jpg"
          alt="Topographic pattern"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="container mx-auto px-4 z-10 relative h-full flex flex-col justify-center">
        <div className="mb-10 text-center">
          <div className="relative inline-block">
            <h2 className="text-3xl md:text-4xl font-bold">Meet the Team</h2>
            <div className="absolute left-0 -bottom-2 h-[1px] w-[calc(50%_+_720.5px)] bg-white [clip-path:polygon(0%_0%,_100%_45%,_100%_55%,_0%_100%)]"></div>
          </div>
        </div>

        <p className="text-lg text-center mb-12">
          Led by firsthand experience and creative drive
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="flex flex-col items-center text-center"
            >
              {/* Image Container */}
              <div className="w-28 h-28 md:w-36 md:h-36 rounded-xl overflow-hidden mb-3 relative shadow-lg">
                <Image
                  src={member.image}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>

              {/* Name and Title */}
              <p className="text-base md:text-lg mt-1">
                <span className="font-semibold text-white">{member.name}</span>
                <span className="font-normal text-gray-300">
                  {" "}
                  | {member.title}
                </span>
              </p>

              {/* LinkedIn Icon */}
              <a
                href={member.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${member.name} LinkedIn Profile`}
                className="mt-2 text-gray-300 hover:text-white transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19.615 0H4.385C1.963 0 0 1.963 0 4.385v15.23C0 22.037 1.963 24 4.385 24h15.23C22.037 24 24 22.037 24 19.615V4.385C24 1.963 22.037 0 19.615 0zM8.24 18.904H5.116V8.775H8.24v10.129zM6.678 7.452a1.76 1.76 0 0 1-1.758-1.758A1.76 1.76 0 0 1 6.678 3.936a1.76 1.76 0 0 1 1.758 1.758A1.76 1.76 0 0 1 6.678 7.452zm12.226 11.452h-3.124V13.42c0-.908-.018-2.073-1.263-2.073-1.263 0-1.458.986-1.458 2.007v5.55h-3.124V8.775h2.994v1.37h.042c.416-.788 1.432-1.618 2.956-1.618 3.162 0 3.746 2.08 3.746 4.785v5.592z" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="font-['georama'] text-lg mb-4 tracking-[0.15em]">
            And backed by 12 more passionate, talented developers
            <br />
            and artists who bring Stride Interactive to life every day
          </p>
        </div>
      </div>
    </section>
  );
}
