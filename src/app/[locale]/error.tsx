"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-6 text-center max-w-md px-4">
        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-red-50">
          <span className="text-2xl">⚠</span>
        </div>
        <h2 className="font-display text-2xl font-bold text-foreground">
          Une erreur est survenue
        </h2>
        <p className="text-gray-600 text-sm">
          {error.message || "Quelque chose s'est mal passé. Veuillez réessayer."}
        </p>
        <button
          onClick={reset}
          className="rounded-full bg-[#003DA5] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[#002d7a] transition-colors"
        >
          Réessayer
        </button>
      </div>
    </div>
  );
}
