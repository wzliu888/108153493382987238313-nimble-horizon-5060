import { createFileRoute } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import logo from '../logo.svg'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="text-center">
      <header className="min-h-screen flex flex-col items-center justify-center bg-[#282c34] text-white text-[calc(10px+2vmin)]">
        <img
          src={logo}
          className="h-[40vmin] pointer-events-none animate-[spin_20s_linear_infinite]"
          alt="logo"
        />
        <div className="mt-8">
          <h1 className="text-2xl mb-4 text-[#61dafb]">Current Time</h1>
          <div className="text-4xl font-mono text-white bg-gray-800 px-6 py-4 rounded-lg shadow-lg">
            {time.toLocaleTimeString()}
          </div>
          <div className="text-lg mt-2 text-gray-300">
            {time.toLocaleDateString()}
          </div>
        </div>
      </header>
    </div>
  )
}
