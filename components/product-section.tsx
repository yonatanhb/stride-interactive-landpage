import Image from "next/image";

export function ProductSection() {
  return (
    <section
      id="about"
      className="relative w-[1440px] h-[516px] flex items-center"
      style={{
        background:
          "linear-gradient(0deg, rgba(0,0,0,0.52), rgba(0,0,0,0.52)), url('/pic3.jpg') center/cover",
        boxShadow: "0px 13px 25.4px 1px rgba(0, 0, 0, 0.23)",
      }}
    >
      {/* Logo in styled box */}
      <div
        className="flex-shrink-0"
        style={{
          position: "relative",
          width: "385px",
          height: "209px",
          marginLeft: "146px",
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
          width={350.6}
          height={158.18}
          style={{ borderRadius: "17px" }}
        />
      </div>

      {/* Texts to the right of the logo */}
      <div
        className="flex flex-col justify-center ml-12"
        style={{ flex: 2, minWidth: 700, maxWidth: 950, textAlign: "left" }}
      >
        <p
          className="font-georama text-white mb-2"
          style={{
            fontSize: "19px",
            lineHeight: "120%",
            letterSpacing: "0.05em",
            maxWidth: 746,
          }}
        >
          A groundbreaking fusion of tactical shooting and genre-defying
          gameplay
          <br />
          built for players who crave depth, tension, and real consequence
          <br />
        </p>
        <a
          href="https://dustofwar.net"
          target="_blank"
          rel="noopener noreferrer"
          className="font-georama font-semibold text-white underline mb-4"
          style={{
            fontSize: "19.2px",
            lineHeight: "150%",
            letterSpacing: "0.15em",
            width: 358,
            textAlign: "center",
            whiteSpace: "nowrap",
          }}
        >
          Visit the Dust of War Website&gt;&gt;
        </a>
        <h3
          className="font-alumni text-white font-medium uppercase mb-2"
          style={{
            fontSize: "26px",
            lineHeight: "110%",
            letterSpacing: "0.05em",
            maxWidth: 900,
            wordBreak: "break-word",
          }}
        >
          DUST OF WAR REDEFINES WHAT TACTICAL SHOOTERS CAN BE
        </h3>
        <p
          className="font-georama text-[#EDEDED]"
          style={{
            fontSize: "18px",
            lineHeight: "150%",
            letterSpacing: "0.15em",
            maxWidth: 732,
          }}
        >
          bringing unmatched realism, depth, and purpose to the FPS genre
          <br />
          backed by real combat experience and genre innovation
        </p>
      </div>
    </section>
  );
}
