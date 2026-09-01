import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">
        Erro 404
      </span>
      <h1 className="mt-4 font-[family-name:var(--font-display)] text-5xl font-extrabold uppercase tracking-tighter sm:text-7xl">
        Essa página <span className="text-[var(--color-primary)]">sumiu.</span>
      </h1>
      <p className="mt-4 max-w-md font-medium">
        O link que você seguiu não existe (ou nunca existiu). Volta pro início.
      </p>
      <Link
        href="/"
        className="brutal-block mt-8 cursor-pointer bg-[var(--color-primary)] px-6 py-3 text-sm font-bold uppercase text-[var(--color-ink)]"
      >
        Voltar pra home
      </Link>
    </div>
  );
}
