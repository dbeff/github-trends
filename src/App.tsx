import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center gap-8 p-6 text-center">
      <div className="flex flex-wrap items-center justify-center gap-4">
        <a href="https://vite.dev" target="_blank" className="transition-transform hover:scale-110">
          <img src={viteLogo} className="size-24 drop-shadow-[0_0_1rem_#646cffaa] hover:drop-shadow-[0_0_1.5rem_#646cff]" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" className="transition-transform hover:scale-110">
          <img src={reactLogo} className="size-24 drop-shadow-[0_0_1rem_#61dafbaa] hover:drop-shadow-[0_0_1.5rem_#61dafb]" alt="React logo" />
        </a>
      </div>
      <h1 className="text-5xl font-bold tracking-tight">Vite + React + Tailwind</h1>
      <div className="rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur">
        <button
          className="rounded-lg bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 px-6 py-3 text-sm font-semibold text-white shadow transition hover:brightness-110 focus:outline-none focus:ring-4 focus:ring-indigo-500/50"
          onClick={() => setCount((c) => c + 1)}
        >
          count is {count}
        </button>
        <p className="mt-4 text-sm text-gray-400">
          Edit <code className="font-mono text-indigo-300">src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="text-sm text-gray-500">
        Click the logos to learn more
      </p>
    </div>
  )
}

export default App
