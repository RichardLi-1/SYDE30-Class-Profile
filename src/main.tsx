import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">SYDE 2030 Class Profile</h1>
      <p className="text-gray-700 mt-2">Welcome to the SYDE 2030 Class Profile application!</p>
    </div>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
