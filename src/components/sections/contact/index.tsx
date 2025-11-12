"use client"

import type React from "react"

import { useState } from "react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      const form = new FormData()
      form.append("entry.675301023", formData.name)
      form.append("entry.225627443", formData.email)
      form.append("entry.1224766782", formData.message)

      await fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLSctC9YTO5Yod-3JOm9AsTLGWgVa2sSBHJ-13gbfJ_uRs250Xg/formResponse",
        {
          method: "POST",
          body: form,
          mode: "no-cors",
        },
      )

      setSubmitted(true)
      setFormData({ name: "", email: "", message: "" })
      setTimeout(() => {
        setSubmitted(false)
      }, 3000)
    } catch (err) {
      setError("Erro ao enviar mensagem. Tente novamente.")
      console.error("Erro ao enviar para Google Forms:", err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="w-full py-20 px-4 md:px-6 bg-linear-to-b from-background via-card to-background">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Vamos Conversar?</h2>
          <p className="text-muted-foreground text-lg">Tenho interesse em oportunidades e conversas sobre tecnologia</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6 animate-slideInFromLeft">
            <div className="p-6 rounded-xl bg-card border border-border">
              <h3 className="text-lg font-semibold mb-2 text-foreground">Email</h3>
              <a
                href="mailto:rychard.professional@gmail.com"
                className="text-primary hover:text-primary/80 transition-colors"
              >
                rychard.professional@gmail.com
              </a>
            </div>

            <div className="p-6 rounded-xl bg-card border border-border">
              <h3 className="text-lg font-semibold mb-2 text-foreground">GitHub</h3>
              <a
                href="https://github.com/RychardProfissional"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2"
              >
                github.com/RychardProfissional
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>

            <div className="p-6 rounded-xl bg-card border border-border">
              <h3 className="text-lg font-semibold mb-2 text-foreground">LinkedIn</h3>
              <a
                href="https://www.linkedin.com/in/rychardprofissional/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2"
              >
                Rychard Antony
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.731-2.004 1.439-.103.25-.129.599-.129.948v5.418h-3.554s.05-8.736 0-9.646h3.554v1.364c.43-.664 1.199-1.608 2.928-1.608 2.136 0 3.745 1.398 3.745 4.401v5.489zM5.337 9.433c-1.144 0-1.915-.759-1.915-1.71 0-.955.77-1.71 1.958-1.71 1.187 0 1.914.755 1.938 1.71 0 .951-.751 1.71-1.981 1.71zm1.582 11.019H3.656V9.806h3.263v10.646zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4 animate-fadeInUp">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Seu Nome"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={loading}
                className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors disabled:opacity-50"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Seu Email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={loading}
                className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors disabled:opacity-50"
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Sua Mensagem"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                disabled={loading}
                className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none disabled:opacity-50"
              />
            </div>
            {error && <p className="text-red-400 text-sm">{error}</p>}
            <button
              type="submit"
              disabled={loading}
              className={`w-full px-6 py-3 rounded-lg font-semibold transition-all ${
                submitted
                  ? "bg-green-500/20 text-green-400 border border-green-500/50"
                  : "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/50 disabled:opacity-50"
              }`}
            >
              {loading ? "Enviando..." : submitted ? "✓ Mensagem Enviada!" : "Enviar Mensagem"}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}