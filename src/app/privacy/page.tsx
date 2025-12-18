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
            <h2 className="text-2xl font-bold mb-4">1. Introdução</h2>
            <p>
              A sua privacidade é importante para nós. É política do portfólio de Rychard Antony respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site.
            </p>
            <p>
              Esta política tem como objetivo informar como coletamos, usamos e protegemos seus dados pessoais, em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. Coleta de Dados</h2>
            <p>
              Coletamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço ou funcionalidade. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento.
            </p>
            <p>
              Os dados coletados através do formulário de comentários incluem:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Nome:</strong> Para identificação do autor do comentário.</li>
              <li><strong>E-mail:</strong> Para contato caso necessário e validação de autenticidade (não será exibido publicamente).</li>
              <li><strong>Conteúdo do Comentário:</strong> A opinião ou mensagem deixada por você.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">3. Finalidade do Tratamento</h2>
            <p>
              Utilizamos seus dados pessoais para as seguintes finalidades:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Exibição de Comentários:</strong> Permitir que seu comentário seja visível nos projetos do portfólio.</li>
              <li><strong>Segurança e Prevenção de Spam:</strong> Monitorar e evitar o envio de mensagens automáticas, ofensivas ou maliciosas.</li>
              <li><strong>Melhoria da Experiência:</strong> Entender o engajamento dos usuários com os projetos apresentados.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">4. Armazenamento e Operadores de Dados</h2>
            <p>
              Para garantir a segurança e disponibilidade do serviço, utilizamos parceiros tecnológicos confiáveis para o processamento e armazenamento de dados:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Supabase:</strong> Atua como nosso banco de dados na nuvem. É onde as informações dos comentários são armazenadas de forma segura.</li>
              <li><strong>Vercel:</strong> Plataforma de hospedagem onde o código do site (frontend) é executado e distribuído.</li>
            </ul>
            <p>
              Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">5. Compartilhamento de Dados</h2>
            <p>
              Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">6. Seus Direitos (Titular dos Dados)</h2>
            <p>
              De acordo com a LGPD, você tem direito a:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Confirmar a existência de tratamento de dados.</li>
              <li>Acessar seus dados.</li>
              <li>Corrigir dados incompletos, inexatos ou desatualizados.</li>
              <li>Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários ou excessivos.</li>
              <li>Revogar seu consentimento a qualquer momento.</li>
            </ul>
            <p>
              Para exercer seus direitos, entre em contato através dos canais disponíveis na seção de contato deste site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">7. Consentimento</h2>
            <p>
              Ao deixar um comentário em nosso site, você concorda com o processamento de seus dados conforme descrito nesta Política de Privacidade.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
