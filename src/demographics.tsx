// App.tsx
import Header from './header';
import './main.css';

export default function Demographics() {
  return (
    <div className="bg-[#F7EDEA] font-lato min-h-screen">
      <Header />
      <div className="p-6 h-[40vh] flex flex-col justify-center">
        <h1 className="text-6xl font-extrabold text-[#431960]">demographics</h1>
            <p className="text-lg font-light font-lato">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        

          <div className="flex">
            {/* LEFT BUTTON */}
            <div className="flex mt-20 items-center" style={{ fontFamily: "'Lato', sans-serif"}}>
              <a href="../demographics">
                <img className="w-16 hover:scale-110 transition-transform" src="ArrowLeft.svg" alt="" />
              </a>
              <a href="../demographics">
                <div className="ml-4 hover:scale-110 transition-transform">
                  <h1 className="text-4xl font-light">demographics</h1>
                  <img src="line.svg" className="w-full h-auto"/>
                </div>
              </a>
            </div>

          


              {/* RIGHT BUTTON */}
            <div className="flex mt-20 ml-auto items-center" style={{ fontFamily: "'Lato', sans-serif"}}>
              
              <a href="../demographics">
                <div className="ml-4 hover:scale-110 transition-transform">
                  <h1 className="text-4xl font-light">high school</h1>
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
  );
}