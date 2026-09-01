import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description: "Termos de uso do site do Estúdio Vértice.",
};

export default function Termos() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      <Link href="/" className="text-sm font-semibold text-[var(--color-primary)] hover:underline">
        ← Voltar
      </Link>
      <h1 className="mt-6 font-[family-name:var(--font-display)] text-3xl font-extrabold uppercase tracking-tight">
        Termos de Uso
      </h1>
      <p className="mt-2 text-sm">Última atualização: {new Date().toLocaleDateString("pt-BR")}</p>

      <div className="mt-8 space-y-6">
        <section>
          <h2 className="text-lg font-bold uppercase">1. Aceitação</h2>
          <p className="mt-2">
            Ao usar este site, você concorda com estes termos. Se não
            concordar, não utilize o serviço.
          </p>
        </section>
        <section>
          <h2 className="text-lg font-bold uppercase">2. Propriedade intelectual</h2>
          <p className="mt-2">
            Todo o conteúdo (identidade visual, textos, cases) pertence ao
            Estúdio Vértice ou aos respectivos clientes e não pode ser
            reproduzido sem autorização.
          </p>
        </section>
        <section>
          <h2 className="text-lg font-bold uppercase">3. Contato</h2>
          <p className="mt-2">Dúvidas: oi@vertice.studio</p>
        </section>
      </div>
    </main>
  );
}
