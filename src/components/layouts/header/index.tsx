"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { NavItemProps } from "./types";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Header fixo */}
      <header
        className={`fixed top-0 left-0 shadow-[1px_6px_5px_rgba(0,0,0,0.2)] w-full bg-[#3B506B] z-50 transition-all rounded-b-2xl duration-300 ${
          isScrolled
            ? "opacity-90 hover:opacity-100 backdrop-blur-md shadow-md py-4"
            : "py-6"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
          <h1
            className={`font-montserrat text-white transition-all duration-300 ${
              isScrolled ? "text-xl" : "text-2xl"
            }`}
          >
            Web Developer
          </h1>

          <nav>
            <ul className="flex space-x-3 text-white font-medium">
              <li>
                <NavItem
                  href="#sobre"
                  label="Sobre"
                />
              </li>
              <li>
                <NavItem
                  href="#contato"
                  label="Contato"
                />
              </li>
              <li>
                <NavItem
                  href="#projetos"
                  label="Projetos"
                />
              </li>
              <li>
                <NavItem
                  href="#"
                  label="Home"
                />
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <div className={`transition-all duration-300 h-24`} />
    </>
  );
}

function NavItem({ href, label, icon, onClick }: NavItemProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2 rounded-md font-medium transition-colors
        hover:bg-white/10 hover:text-white
        ${isActive ? "text-white bg-white/20" : "text-gray-300"}`}
    >
      {icon && <span className="text-lg">{icon}</span>}
      <span>{label}</span>
    </Link>
  );
}
