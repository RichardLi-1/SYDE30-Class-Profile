import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'
import Header from './header.tsx'
function App() {
  //const [count, setCount] = useState(0)

  return (
    <div className="p-6 height-40vh flex">
      <Header />
      <h1 className="text-2xl font-bold justify-items-center">SYDE 2030 Class Profile</h1>
      <p className="text-gray-700 mt-2 justify-items-center">Welcome to the SYDE 2030 Class Profile!</p>
    </div>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
