// App.tsx
import Header from './header';
import './main.css';
import { contributors } from './contributors.ts';

export default function About() {
  //const [count, setCount] = useState(0)
  
  return (
    <>
      <div className = "bg-[#F7EDEA]">
        <Header />
        <div className="p-6 h-[40vh] justify-center">
          <div style={{ fontFamily: "'Lato', sans-serif" }} className="p-6 height-40vh bg-[#F7EDEA]">
              <h1 className="text-6xl font-extrabold justify-items-center text-[#431960]">about</h1>

              

              <h2 className="text-5xl font-light justify-items-center text-[#431960] mt-10">contributors</h2>
              <div className="flex space-x-5 mt-4">
                {(contributors.map((contributors) => (
                  <div className="text-center">
                    <a href={contributors.link} target="_blank"><img className="w-40 hover:scale-110 transition-transform" src={contributors.image} key={contributors.image}/></a>
                    <p className="font-lg">{contributors.name}</p>
                    <p>{contributors.role}</p>
                  </div>
                )

              ))}
            </div>


          </div>
        </div>

        <div className="flex">
        <a href=".."><img className="w-26 hover:scale-110 transition-transform" src="ArrowLeft.svg" alt="" /><h1 className="text-lg">home</h1></a>
              </div>
      </div>
    </>
  )
}