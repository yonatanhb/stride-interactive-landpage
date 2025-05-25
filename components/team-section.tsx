import Image from "next/image";

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
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          Meet the Team
        </h2>
        <p className="text-lg text-center mb-12">
          Led by firsthand experience and creative drive
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden mb-4 border-2 border-white">
                <Image
                  src={`/tm${i}.jpg?height=128&width=128`}
                  alt={`Team Member ${i}`}
                  width={128}
                  height={128}
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Team Member {i}</h3>
              <p className="text-sm text-gray-300">Position {i}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg mb-4">
            App created by 15 more developers, technical designers, and artists
            who bring STRIDE innovations to the next level
          </p>
        </div>
      </div>
    </section>
  );
}
