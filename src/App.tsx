// App.tsx
import Header from './header';
import './main.css';

export default function App() {
  return (
    <div className="bg-[#F7EDEA] font-lato min-h-screen">
      <Header />
      <div className="p-6 h-[40vh] flex flex-col justify-center">
        <h1 className="text-6xl font-extrabold text-[#431960]">systems design</h1>
        <h1 className="text-4xl mt-2 text-[#5E2D91]">engineering!</h1>
        <div>
          <h1 className="text-2xl font-light">class profile</h1>
          <img src="arrowRight.png" alt="" />
        </div>
      </div>
    </div>
  );
}