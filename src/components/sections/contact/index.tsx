"use client";

import type React from "react";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, Loader2, Mail, MapPin, Phone } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Falha ao enviar mensagem");
      }

      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (err) {
      setError("Erro ao enviar mensagem. Tente novamente.");
      console.error("Erro ao enviar formulário:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="w-full py-16 md:py-24 px-4 md:px-6 bg-linear-to-b from-background via-muted/20 to-background relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary tracking-widest uppercase mb-4 block">
            Contato
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Vamos construir algo incrível?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Estou sempre aberto a novos desafios e parcerias. Se você tem uma
            ideia ou projeto em mente, entre em contato e vamos conversar!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div className="p-8 rounded-3xl bg-card border border-border shadow-lg space-y-8">
              <h3 className="text-2xl font-bold mb-6">
                Informações de Contato
              </h3>

              <div className="space-y-6">
                <a
                  href="mailto:rychard.professional@gmail.com"
                  className="flex items-start gap-4 group hover:bg-secondary/50 p-4 rounded-xl transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Email
                    </h4>
                    <p className="text-muted-foreground group-hover:text-primary transition-colors truncate max-w-40 sm:max-w-full">
                      rychard.professional@gmail.com
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 rounded-xl">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Localização
                    </h4>
                    <p className="text-muted-foreground">
                      Rondonópolis, Mato Grosso - Brasil
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl">
                  <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Disponibilidade
                    </h4>
                    <p className="text-muted-foreground">
                      Segunda a Sexta, 08h às 18h
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <form
              onSubmit={handleSubmit}
              className="space-y-6 p-6 md:p-8 rounded-3xl bg-card border border-border shadow-lg relative overflow-hidden"
            >
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="absolute inset-0 z-10 bg-card flex flex-col items-center justify-center text-center p-8"
                  >
                    <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 mb-6">
                      <CheckCircle2 size={40} />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">
                      Mensagem Enviada!
                    </h3>
                    <p className="text-muted-foreground">
                      Obrigado pelo contato. Retornarei o mais breve possível.
                    </p>
                  </motion.div>
                ) : (
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium ml-1"
                      >
                        Nome
                      </label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        placeholder="Seu nome completo"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        disabled={loading}
                        className="w-full px-4 py-3 rounded-xl bg-secondary/30 border border-border focus:border-primary focus:bg-background focus:ring-2 focus:ring-primary/20 transition-all outline-none disabled:opacity-50"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium ml-1"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="seu.email@exemplo.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        disabled={loading}
                        className="w-full px-4 py-3 rounded-xl bg-secondary/30 border border-border focus:border-primary focus:bg-background focus:ring-2 focus:ring-primary/20 transition-all outline-none disabled:opacity-50"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="text-sm font-medium ml-1"
                      >
                        Mensagem
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        placeholder="Como posso ajudar?"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        disabled={loading}
                        className="w-full px-4 py-3 rounded-xl bg-secondary/30 border border-border focus:border-primary focus:bg-background focus:ring-2 focus:ring-primary/20 transition-all outline-none resize-none disabled:opacity-50"
                      />
                    </div>

                    {error && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-500 text-sm bg-red-500/10 p-3 rounded-lg"
                      >
                        {error}
                      </motion.p>
                    )}

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full px-6 py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-70 disabled:hover:scale-100 flex items-center justify-center gap-2"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="animate-spin" size={20} />
                          Enviando...
                        </>
                      ) : (
                        <>
                          Enviar Mensagem
                          <Send size={18} />
                        </>
                      )}
                    </button>
                  </div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
