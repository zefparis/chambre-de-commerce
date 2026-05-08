export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-4">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-[#003DA5] border-t-transparent" />
        <p className="text-sm text-gray-500 font-medium">Chargement…</p>
      </div>
    </div>
  );
}
