import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'
import Header from './header.tsx'
function App() {
  //const [count, setCount] = useState(0)
  
  return (
    <>
      <div className = "bg-[#F7EDEA]">
        <Header />
        <div style={{ fontFamily: "'Lato', sans-serif" }} className="p-6 height-40vh flex bg-[#F7EDEA]">
            <h1 className="text-6xl font-extrabold justify-items-center text-[#431960]">about</h1>
            <h1 className="text-4xl mt-2 justify-items-center text-[#5E2D91]">engineering!</h1>

          <div>
            <h1 className="text-2xl font-light justify-items-center">class profile</h1> <img></img>
          </div>
        </div>
      </div>
    </>
  )
}


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
