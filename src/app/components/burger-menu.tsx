"use client";

import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { X } from "lucide-react";
import Link from "next/link";
import React, { ReactNode, useState, useEffect } from "react";

interface BurgerMenuProps {
  children: ReactNode;
}

export default function BurgerMenu({ children }: BurgerMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // Cleanup function to ensure the class is removed when the component unmounts
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);
  return (
    <>
      <button className="md:hidden block" onClick={() => setIsOpen(!isOpen)}>
        <HamburgerMenuIcon className="w-6 h-6" />
      </button>
      {isOpen && (
        <button
          className="z-[51] block fixed right-8 top-8"
          onClick={() => setIsOpen(!isOpen)}
        >
          <X className="w-6 h-6" />
        </button>
      )}
      <ul
        className={`nav-menus flex-col items-center w-full h-screen fixed top-0 left-0 bg-black ${
          isOpen ? "flex" : "hidden md:flex"
        } justify-center md:relative md:bg-transparent md:w-auto md:h-auto md:top-auto md:left-auto md:flex-row gap-[30px] z-50`}
      >
        <li>
          <Link href="" className="font-medium">
            Flash Sale
          </Link>
        </li>
        <li>
          <Link href="" className="font-medium">
            Discover
          </Link>
        </li>
        <li>
          <Link href="" className="font-medium">
            Packages
          </Link>
        </li>
        <li>
          <Link href="" className="font-medium">
            Stories
          </Link>
        </li>
        <li>
          <Link href="" className="font-medium">
            About
          </Link>
        </li>
        {children}
      </ul>
    </>
  );
}
