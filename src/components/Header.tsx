import { Brand } from "./Brand.tsx";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-gray-900/75 backdrop-blur supports-[backdrop-filter]:bg-gray-900/60">
      <div className="mx-auto flex h-14 max-w-6xl items-center gap-4 px-4">
        <a
          href="/"
          className="flex items-center gap-2 text-gray-100 hover:text-white"
          aria-label="GitHub Trends Home"
        >
          <Brand className="size-7" />
        </a>
        <h1 className="sr-only">GitHub Trends Prototype</h1>
      </div>
    </header>
  );
}
