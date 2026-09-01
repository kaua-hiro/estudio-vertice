import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "Como o Estúdio Vértice coleta, usa e protege seus dados.",
};

export default function Privacidade() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      <Link href="/" className="text-sm font-semibold text-[var(--color-primary)] hover:underline">
        ← Voltar
      </Link>
      <h1 className="mt-6 font-[family-name:var(--font-display)] text-3xl font-extrabold uppercase tracking-tight">
        Política de Privacidade
      </h1>
      <p className="mt-2 text-sm">Última atualização: {new Date().toLocaleDateString("pt-BR")}</p>

      <div className="mt-8 space-y-6">
        <section>
          <h2 className="text-lg font-bold uppercase">1. Quais dados coletamos</h2>
          <p className="mt-2">
            Coletamos dados de navegação via cookies de analytics e dados de
            contato quando você fala com a gente por e-mail ou WhatsApp.
          </p>
        </section>
        <section>
          <h2 className="text-lg font-bold uppercase">2. Como usamos seus dados</h2>
          <p className="mt-2">
            Usamos esses dados pra melhorar o site e responder contatos
            comerciais. Não vendemos dados pessoais a terceiros.
          </p>
        </section>
        <section>
          <h2 className="text-lg font-bold uppercase">3. Seus direitos (LGPD)</h2>
          <p className="mt-2">
            Você pode pedir acesso, correção ou exclusão dos seus dados a
            qualquer momento: privacidade@vertice.studio.
          </p>
        </section>
      </div>
    </main>
  );
}
