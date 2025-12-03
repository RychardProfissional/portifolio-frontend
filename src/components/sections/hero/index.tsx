"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowDown, Linkedin, Mail, Github, Instagram } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";
import ParticleBackground from "@/components/ui/particle-background";

const socialMedias = [
  {
    icon: Linkedin,
    url: "https://www.linkedin.com/in/rychardprofissional",
    label: "LinkedIn",
  },
  { icon: Mail, url: "mailto:rychard.professional@gmail.com", label: "Email" },
  {
    icon: Github,
    url: "https://github.com/RychardProfissional",
    label: "GitHub",
  },
  {
    icon: Instagram,
    url: "https://www.instagram.com/rzd355",
    label: "Instagram",
  },
];

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth - 0.5);
      mouseY.set(e.clientY / window.innerHeight - 0.5);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const springConfig = { damping: 25, stiffness: 150 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  // Parallax effects
  const moveBg1X = useTransform(springX, [-0.5, 0.5], [-50, 50]);
  const moveBg1Y = useTransform(springY, [-0.5, 0.5], [-50, 50]);

  const moveBg2X = useTransform(springX, [-0.5, 0.5], [50, -50]);
  const moveBg2Y = useTransform(springY, [-0.5, 0.5], [50, -50]);

  const moveImgX = useTransform(springX, [-0.5, 0.5], [-20, 20]);
  const moveImgY = useTransform(springY, [-0.5, 0.5], [-20, 20]);

  const moveBadgeX = useTransform(springX, [-0.5, 0.5], [-40, 40]);
  const moveBadgeY = useTransform(springY, [-0.5, 0.5], [-40, 40]);

  const handleScrollDown = () => {
    const workSection = document.getElementById("experience");
    if (workSection) {
      workSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen w-full flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <ParticleBackground />
        <motion.div
          style={{ x: moveBg1X, y: moveBg1Y }}
          className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-primary/5 rounded-full blur-[100px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          style={{ x: moveBg2X, y: moveBg2Y }}
          className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-accent/5 rounded-full blur-[100px]"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]" />
      </div>

      <div className="max-w-7xl mx-auto w-full px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-0">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-center lg:text-left z-10"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-4 px-3 py-1 rounded-full bg-secondary/50 border border-border/50 backdrop-blur-sm"
            >
              <span className="text-sm font-medium text-muted-foreground tracking-wide">
                👋 Olá, eu sou
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9] mb-6">
              <span className="block text-foreground">Rychard</span>
              <span className="block text-transparent bg-clip-text bg-linear-to-r from-primary to-accent">
                Antony
              </span>
            </h1>

            <motion.p
              className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Desenvolvedor Full Stack transformando ideias complexas em
              experiências digitais
              <span className="text-foreground font-medium"> simples</span>,
              <span className="text-foreground font-medium"> elegantes</span> e
              <span className="text-foreground font-medium">
                {" "}
                performáticas
              </span>
              .
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.a
                href="#work"
                className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all hover:-translate-y-1"
                whileTap={{ scale: 0.95 }}
              >
                Ver Projetos
              </motion.a>
              <motion.a
                href="#contact"
                className="px-8 py-4 bg-background border border-border text-foreground rounded-full font-semibold hover:bg-secondary/50 transition-all hover:-translate-y-1"
                whileTap={{ scale: 0.95 }}
              >
                Vamos Conversar
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex items-center justify-center lg:justify-start gap-6"
            >
              {socialMedias.map(({ icon: Icon, url, label }, index) => (
                <motion.a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={label}
                >
                  <Icon size={24} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ x: moveImgX, y: moveImgY }}
            className="flex-1 relative flex justify-center lg:justify-end"
          >
            <div className="relative w-[280px] h-[280px] md:w-[450px] md:h-[450px]">
              {/* Rotating Rings */}
              <motion.div
                className="absolute inset-0 rounded-full border border-dashed border-primary/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-4 rounded-full border border-dashed border-accent/20"
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              />

              {/* Image Container */}
              <div className="absolute inset-8 rounded-full overflow-hidden border-4 border-background shadow-2xl bg-secondary">
                <Image
                  src="/imgs/profile.jpg"
                  alt="Rychard Antony"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-700"
                  priority
                />
              </div>

              {/* Floating Badge */}
              <motion.div
                style={{ x: moveBadgeX, y: moveBadgeY }}
                className="absolute bottom-10 -left-4 bg-card/80 backdrop-blur-md border border-border p-4 rounded-2xl shadow-xl hidden md:block"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-sm font-medium">
                    Disponível para projetos
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer hidden md:flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
          onClick={handleScrollDown}
        >
          <span className="text-xs text-muted-foreground uppercase tracking-widest">
            Scroll
          </span>
          <ArrowDown className="text-primary" size={20} />
        </motion.div>
      </div>
    </section>
  );
}
