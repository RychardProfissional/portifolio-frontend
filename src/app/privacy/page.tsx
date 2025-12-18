import Header from "@/components/layouts/header";
import Footer from "@/components/layouts/footer";

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-32 pb-16 px-4 md:px-6">
        <div className="max-w-4xl mx-auto prose dark:prose-invert">
          <h1 className="text-4xl font-bold mb-8">Política de Privacidade</h1>
          <p className="text-muted-foreground mb-8">
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">1. Introdução e Bases Legais</h2>
            <p>
              A sua privacidade é importante para nós. Esta política descreve como coletamos, usamos e protegemos seus dados pessoais, em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).
            </p>
            <p>
              O tratamento dos seus dados pessoais neste portfólio baseia-se em:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>
                <strong>Legítimo Interesse (Art. 7º, IX da LGPD):</strong> Para o processamento e exibição dos comentários públicos nos projetos, visando a interação e feedback profissional.
              </li>
              <li>
                <strong>Consentimento (Art. 7º, I da LGPD):</strong> Exclusivamente para o envio opcional de e-mails notificando sobre alterações nesta Política de Privacidade.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. Coleta de Dados</h2>
            <p>
              Coletamos informações pessoais apenas quando necessário para as finalidades descritas. Os dados coletados incluem:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Dados de Identificação:</strong> Nome (para exibição pública) e E-mail (para validação e contato administrativo, não exibido publicamente).</li>
              <li><strong>Conteúdo:</strong> O texto do seu comentário e avaliação.</li>
              <li><strong>Dados Técnicos:</strong> Endereço IP e informações do navegador (User-Agent) são coletados automaticamente para fins de segurança, prevenção de spam e abusos.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">3. Finalidade do Tratamento</h2>
            <p>
              Utilizamos seus dados para:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Exibição de Comentários:</strong> Publicar seu feedback nos projetos do portfólio.</li>
              <li><strong>Segurança:</strong> Monitorar e prevenir atividades maliciosas ou spam.</li>
              <li><strong>Comunicação (Opcional):</strong> Enviar notificações por e-mail estritamente sobre atualizações desta Política de Privacidade, caso você tenha optado por recebê-las.</li>
            </ul>
            <p>
              <strong>Atenção:</strong> Não utilizamos seus dados para fins de marketing, publicidade ou envio de newsletters não solicitadas.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">4. Armazenamento e Operadores</h2>
            <p>
              Utilizamos parceiros confiáveis para o processamento e armazenamento de dados:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Supabase:</strong> Banco de dados em nuvem onde as informações são armazenadas com segurança.</li>
              <li><strong>Vercel:</strong> Plataforma de hospedagem e execução do código do site.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">5. Seus Direitos</h2>
            <p>
              Você possui os seguintes direitos sobre seus dados:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Acesso, correção e exclusão dos seus dados.</li>
              <li>Confirmação da existência de tratamento.</li>
              <li><strong>Revogação do Consentimento:</strong> Você pode optar por deixar de receber os e-mails sobre alterações na política a qualquer momento.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">6. Consentimento e Comentários</h2>
            <p>
              O envio de comentários <strong>não requer consentimento prévio</strong> (checkbox), pois baseia-se no legítimo interesse de promover interação no portfólio. Ao comentar, você declara estar ciente desta Política de Privacidade.
            </p>
            <p>
              A opção de receber e-mails sobre atualizações da política é <strong>totalmente voluntária</strong> e não impede o envio do seu comentário.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">7. Contato</h2>
            <p>
              Para exercer seus direitos ou tirar dúvidas sobre esta política, entre em contato através dos canais disponíveis no site.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
