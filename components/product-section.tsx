import Image from "next/image";

export function ProductSection() {
  return (
    <section
      id="about"
      className="relative w-full h-[516px] lg:h-[516px] md:h-[450px] flex items-center"
      style={{
        background:
          "linear-gradient(0deg, rgba(0,0,0,0.52), rgba(0,0,0,0.52)), url('/pic3.jpg') center/cover",
        boxShadow: "0px 13px 25.4px 1px rgba(0, 0, 0, 0.23)",
      }}
    >
      <div className="w-full max-w-[1200px] mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Logo in styled box */}
          <div
            className="flex-shrink-0 w-[300px] h-[163px] lg:w-[385px] lg:h-[209px]"
            style={{
              background:
                "radial-gradient(50% 50% at 50% 50%, rgba(255,255,255,0.83) 0%, #E1D8CC 100%)",
              boxShadow:
                "inset 0px 3.3px 37.4px -4px rgba(9,7,6,0.53), 0px 3.3px 9.3px rgba(0,0,0,0.27)",
              borderRadius: "4px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              src="/dow_logo.png"
              alt="DUST OF WAR Logo"
              width={273}
              height={123}
              className="lg:w-[350.6px] lg:h-[158.18px]"
              style={{ borderRadius: "17px" }}
            />
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center text-center lg:text-left max-w-[600px] lg:max-w-none">
            <p className="font-georama text-white mb-4 text-base lg:text-[19px] leading-[120%] tracking-[0.05em]">
              A groundbreaking fusion of tactical shooting and genre-defying
              gameplay
              <br />
              built for players who crave depth, tension, and real consequence
            </p>

            <a
              href="https://dustofwar.net"
              target="_blank"
              rel="noopener noreferrer"
              className="font-georama font-semibold text-white underline mb-4 text-base lg:text-[19.2px] leading-[150%] tracking-[0.15em] inline-block"
            >
              Visit the Dust of War Website&gt;&gt;
            </a>

            <h3 className="font-alumni text-white font-medium uppercase mb-4 text-xl lg:text-[26px] leading-[110%] tracking-[0.05em]">
              DUST OF WAR REDEFINES WHAT TACTICAL SHOOTERS CAN BE
            </h3>

            <p className="font-georama text-[#EDEDED] text-base lg:text-[18px] leading-[150%] tracking-[0.15em]">
              bringing unmatched realism, depth, and purpose to the FPS genre
              <br />
              backed by real combat experience and genre innovation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
