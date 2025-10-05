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
        <div>
          <h1 className="text-2xl font-light">class profile</h1>

          <a href="/about"><p>About</p></a>

          <a href="/about"><p className="hover:">High School</p></a>
          <img src="arrowRight.png" alt="" />
        </div>
      </div>
    </div>
  );
}