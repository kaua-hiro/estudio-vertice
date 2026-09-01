"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "cookie-consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    try {
      localStorage.setItem(STORAGE_KEY, "accepted");
    } catch {}
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t-3 border-[var(--color-ink)] bg-[var(--color-card)] px-6 py-4" style={{ borderTopWidth: 3 }}>
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="text-sm font-medium">
          Usamos cookies pra medir o desempenho do site. Ao continuar, você
          concorda com nossa{" "}
          <Link href="/privacidade" className="underline underline-offset-2">
            Política de Privacidade
          </Link>
          .
        </p>
        <button
          onClick={accept}
          className="brutal-block shrink-0 cursor-pointer bg-[var(--color-primary)] px-5 py-2 text-sm font-bold uppercase text-[var(--color-ink)]"
        >
          Entendi
        </button>
      </div>
    </div>
  );
}
