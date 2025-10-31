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
              <p>Class profile is not affiliated with the SYDE department.</p>

              <h2 className="text-4xl font-light justify-items-center text-[#431960] mt-10">about the program</h2>

              <h2 className="text-4xl font-light justify-items-center text-[#431960] mt-10">preface</h2>

              <h2 className="text-4xl font-light justify-items-center text-[#431960] mt-10">contributors</h2>
              <div className="flex space-x-5 mt-4">
                {(contributors.map((contributors) => (
                  <div className="text-center">
                    <a href={contributors.link} target="_blank"><img className="w-40 hover:scale-110 transition-transform" src={contributors.image} key={contributors.image}/></a>
                    <p className="font-lg font-bold mt-2">{contributors.name}</p>
                    <p>{contributors.role}</p>
                  </div>
                )

              ))}




            </div>


          </div>

            <div className="flex">
            {/* LEFT BUTTON */}
            <div className="flex mt-20 items-center" style={{ fontFamily: "'Lato', sans-serif"}}>
              <a href="..">
                <img className="w-16 hover:scale-110 transition-transform" src="ArrowLeft.svg" alt="" />
              </a>
              <a href="..">
                <div className="ml-4 hover:scale-110 transition-transform">
                  <h1 className="text-4xl font-light">home</h1>
                  <img src="line.svg" className="w-full h-auto"/>
                </div>
              </a>
            </div>

          


              {/* RIGHT BUTTON */}
            <div className="flex mt-20 ml-auto items-center" style={{ fontFamily: "'Lato', sans-serif"}}>
              
              <a href="../demographics">
                <div className="ml-4 hover:scale-110 transition-transform">
                  <h1 className="text-4xl font-light">demographics</h1>
                  {/*<img src="line.svg" className="w-full h-2 w-100 object-fill"/>*/}
                </div>
              </a>
              <a href="../demographics">
                <img className="w-16 hover:scale-110 transition-transform" src="Group 1.svg" alt="" />
              </a>
              
            </div>

          </div>
        </div>

        



      </div>
    </>
  )
}