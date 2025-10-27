import { Icon } from "@iconify/react";

const socialMedias = [
    { icon: "mdi:linkedin", url: "#" },
    { icon: "mdi:gmail", url: "#" },
    { icon: "mdi:github", url: "#" },
    { icon: "mdi:instagram", url: "#" },
]

export default function HeroSection() {
  return (
    <section className="min-h-[calc(100vh-80px)] flex flex-col md:flex-row items-center justify-center px-6 md:px-16 bg-white">
      <div className="flex-1 flex justify-center items-center text-center md:text-left">
        <div className="space-y-4">
          <span className="text-xl md:text-2xl text-gray-600">Eu sou</span>
          <h1 className="text-6xl md:text-8xl font-bold leading-tight text-gray-900">
            <span className="block">Rychard</span>
            <span className="block text-red-500">Antony</span>
          </h1>
          <p className="text-gray-500 max-w-md mt-4">
            Desenvolvedor full-stack apaixonado por automação e experiências digitais simples e inteligentes.
          </p>
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-center items-center gap-10 mt-10 md:mt-0">
        <div className="bg-gray-100 h-[300px] w-[300px] md:h-[450px] md:w-[400px] rounded-full shadow-inner flex items-center justify-center">
          <span className="text-gray-400 text-xl">Foto aqui</span>
        </div>

        <ul className="flex gap-8">
          {socialMedias.map(({ icon, url }) => (
            <li key={icon}>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-red-500 transition-colors duration-300"
              >
                <Icon icon={icon} width={42} height={42} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
