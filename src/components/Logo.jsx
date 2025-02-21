import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href={"/"} className="font-geist-sans font-bold text-2xl">
      Photo Gallery
    </Link>
  );
};

export default Logo;
