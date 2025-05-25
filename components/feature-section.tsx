import Image from "next/image";

export function FeatureSection() {
  return (
    <section id="features" className="relative w-[1440px] h-[514px] text-white">
      {/* Background Image - pic2 */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/pic2.png"
          alt="Tactical soldier close-up"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="container mx-auto px-4 z-10 relative h-full flex items-center">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Visual Combat Simulator
          </h2>
          <p className="text-lg mb-8">
            Advanced simulation tools with unparalleled realism and precision.
            Our proprietary engine delivers combat scenarios that reflect the
            fog of war, strategic challenges, and the complex decision-making
            required in modern warfare.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-black/50 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Realistic Physics</h3>
              <p>
                Authentic ballistics, weather effects, and environmental
                interactions that mirror real-world conditions.
              </p>
            </div>
            <div className="bg-black/50 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Tactical AI</h3>
              <p>
                Enemy and friendly forces that adapt to your strategies and
                create dynamic, unpredictable scenarios.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
