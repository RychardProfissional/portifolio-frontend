"use client"

export default function AboutSection() {
  return (
    <section id="about" className="w-full py-20 px-4 md:px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slideInFromLeft">
            <h2 className="text-4xl md:text-5xl md:text-left text-center font-bold mb-6">Sobre Mim</h2>

            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                Meu nome é <span className="text-foreground font-semibold">Rychard Antony</span>, tenho 21 anos e sou
                desenvolvedor full-stack apaixonado por tecnologia. Sou{" "}
                <span className="text-foreground font-semibold">pai</span> e acredito que isso me deu mais maturidade e
                responsabilidade no que faço.
              </p>

              <p>
                Atualmente estou cursando{" "}
                <span className="text-foreground font-semibold">Engenharia de Computação</span> na{" "}
                <span className="text-foreground font-semibold">Universidade Federal de Rondonópolis</span>, onde tenho
                a oportunidade de aprender ao lado de pessoas incríveis, incluindo minha esposa. Trabalho na{" "}
                <span className="text-foreground font-semibold">Fundação MT</span>, onde coloco em prática os
                conhecimentos adquiridos.
              </p>

              <p>
                Sou relativamente <span className="text-foreground font-semibold">introvertido</span>, mas tenho grande
                facilidade para trabalhar em equipe. Acredito que a comunicação clara e o respeito mútuo são pilares
                para qualquer projeto bem-sucedido. Valorizo muito{" "}
                <span className="text-foreground font-semibold">aprender continuamente</span> e explorar novas
                tecnologias.
              </p>

              <p>
                Nos tempos livres, gosto de <span className="text-foreground font-semibold">jogar</span> e descobrir
                novas tecnologias. Mantenho um blog sobre desenvolvimento e contribuo em projetos open source sempre que
                possível.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <div className="px-6 py-3 rounded-lg bg-card border border-primary/30">
                <div className="text-2xl font-bold text-primary">21</div>
                <div className="text-sm text-muted-foreground">Anos</div>
              </div>
              <div className="px-6 py-3 rounded-lg bg-card border border-accent/30">
                <div className="text-2xl font-bold text-accent">10+</div>
                <div className="text-sm text-muted-foreground">Tecnologias</div>
              </div>
              <div className="px-6 py-3 rounded-lg bg-card border border-primary/30">
                <div className="text-2xl font-bold text-primary">∞</div>
                <div className="text-sm text-muted-foreground">Curiosidade</div>
              </div>
            </div>
          </div>

          <div className="animate-fadeInUp">
            <div className="relative">
              <div className="absolute inset-0 bg-linear-to-r from-primary/30 to-accent/30 rounded-2xl blur-3xl" />
              <div className="relative bg-card border border-border rounded-2xl p-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center shrink-0 text-xl">
                      🎓
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Educação</h4>
                      <p className="text-muted-foreground text-sm">Engenharia de Computação - UFRO</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center shrink-0 text-xl">
                      💼
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Experiência</h4>
                      <p className="text-muted-foreground text-sm">Fundação MT</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center shrink-0 text-xl">
                      🏠
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Família</h4>
                      <p className="text-muted-foreground text-sm">Pai e esposo</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center shrink-0 text-xl">
                      🎮
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Hobbies</h4>
                      <p className="text-muted-foreground text-sm">Games e novas tecnologias</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}