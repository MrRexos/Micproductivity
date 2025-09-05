import { useState, useEffect, useCallback } from "react";

const STORAGE_KEY = "cookie-consent"; // "accepted" | "rejected"

export default function CookieConsent() {
  // Evita flicker y es seguro para SSR
  const [visible, setVisible] = useState(() => {
    if (typeof window === "undefined") return false;
    return !window.localStorage.getItem(STORAGE_KEY);
  });

  const handleDecision = useCallback((decision) => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, decision);
    }
    setVisible(false);
  }, []);

  // Sincroniza la decisión entre pestañas/ventanas
  useEffect(() => {
    const onStorage = (e) => {
      if (e.key === STORAGE_KEY && e.newValue) setVisible(false);
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  if (!visible) return null;

  return (
    <div
      role="region"
      aria-label="Aviso de cookies"
      aria-live="polite"
      className="sticky top-0 inset-x-0 left-0 right-0 z-50 bg-white border-t border-gray-300 p-4 text-sm"
    >
      <div className="max-w-lg mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="text-center sm:text-left">
          Utilizamos cookies para mejorar tu experiencia.{" "}
        </p>
        <div className="flex gap-2">
          <button
            onClick={() => handleDecision("rejected")}
            className="px-3 py-1 rounded bg-gray-200"
          >
            Rechazar
          </button>
          <button
            onClick={() => handleDecision("accepted")}
            className="px-3 py-1 rounded bg-gray-900 text-white"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
}