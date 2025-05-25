"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export function OrientationDetector() {
  const [screenState, setScreenState] = useState<
    "desktop" | "rotate" | "mobile"
  >("desktop");

  useEffect(() => {
    const checkScreen = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const isPortrait = h > w;
      const isMobile = w < 1059;
      const canBeWideOnRotate = Math.max(w, h) >= 1059;

      if (w >= 1059) {
        setScreenState("desktop");
      } else if (isMobile && isPortrait && canBeWideOnRotate) {
        setScreenState("rotate");
      } else {
        setScreenState("mobile");
      }
    };

    checkScreen();
    window.addEventListener("orientationchange", checkScreen);
    window.addEventListener("resize", checkScreen);
    return () => {
      window.removeEventListener("orientationchange", checkScreen);
      window.removeEventListener("resize", checkScreen);
    };
  }, []);

  useEffect(() => {
    if (screenState !== "desktop") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [screenState]);

  if (screenState === "desktop") return null;

  return (
    <div className="fixed inset-0 z-50 w-full h-screen flex flex-col items-center justify-center bg-black text-white text-center">
      <Image
        src="/stridelogowhite.png"
        alt="STRIDE Logo"
        width={150}
        height={150}
        className="mb-6 mx-auto"
      />
      <h1 className="text-sm sm:text-base font-bold mb-4">
        Mobile Not Supported
      </h1>
      <p className="text-xs sm:text-sm mb-6 max-w-xs mx-auto">
        Please visit our website on a desktop device for the best experience.
      </p>
      {screenState === "rotate" && (
        <div className="mb-4">
          <div className="text-2xl mb-2">↻</div>
          <p className="text-xs">Try rotating your device to landscape</p>
        </div>
      )}
      <Link
        href="https://dustofwar.net"
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs sm:text-sm text-blue-400 hover:text-blue-300 underline px-4 py-2 transition-colors"
      >
        Visit dustofwar.net
      </Link>
    </div>
  );
}
