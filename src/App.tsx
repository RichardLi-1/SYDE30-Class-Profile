// App.tsx

import Header from './header';
import './main.css';

export default function App() {
  return (
    <div className="bg-[#F7EDEA] font-lato min-h-screen">
      <Header />

      <div className="bg-[#D9D9D9] justify-center items-center width-full">
        <img src="class.JPEG"></img>
      </div>
      <div className="p-6 h-[40vh] flex flex-col justify-center">
        <h1 className="text-6xl font-extrabold text-[#431960]">systems design</h1>
        <h1 className="text-5xl mt-2 text-[#5E2D91]">engineering</h1>
        <div className="flex mt-6 align-items-center space-x-4">
          <h1 className="text-4xl font-light">class of '30 profile</h1> <a href="demographics"><img className="w-24 hover:scale-110 transition-transform" src="Group 1.svg" alt="" /></a>

        </div>
      </div>
    </div>
  );
}