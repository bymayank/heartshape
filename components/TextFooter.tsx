import { Playfair_Display } from "next/font/google";
import Link from "next/link";

const playfairDisplay = Playfair_Display({
  display: "swap",
  subsets: ["latin"],
});

export default function TextFooter() {
  return (
    <>
      {/* Left Text */}
      <h1
        className={`absolute left-10 top-1/2 transform -translate-y-1/2 text-[#cfaa96] text-4xl lg:text-5xl font-bold leading-tight ${playfairDisplay.className}`}
      >
        Match<br /> the photo pairs
      </h1>

      {/* Right Text */}
      <h1
        className={`absolute right-10 top-1/2 transform -translate-y-1/2 text-[#cfaa96] text-4xl lg:text-5xl font-bold leading-tight text-right ${playfairDisplay.className}`}
      >
        to reveal <br /> the surprise
      </h1>

      {/* Copyright */}
    </>
  );
}
