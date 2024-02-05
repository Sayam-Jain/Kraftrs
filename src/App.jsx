import React, { useState, useEffect } from 'react';
import shoes from "./assets/shoes.webp";
import insta from "./assets/insta.png";
import linkedin from "./assets/linkedin.png";

function App() {
  const [text, setText] = useState('');

  useEffect(() => {
    fetch('https://loripsum.net/api/plaintext/1')
      .then(response => response.text())
      .then(data => setText(data))
      .catch(error => console.error('Error fetching text:', error));
  }, []);

  return (
    <div className="bg-orange-100 h-screen flex flex-col ">
      <header>
        <nav className="rounded-b-lg items-end  shadow-md border-b-2 border-black">
          <ul className="flex">
            <li className="list-none inline-block px-5 py-12 ml-16 font-semibold text-2xl">About Us </li>
            <li className="list-none inline-block px-5 py-6 font-extrabold text-5xl ml-80">
              Kraftrs.
            </li>
            <li className="list-none inline-block px-5 py-12 font-semibold text-2xl ml-80">
              Product
            </li>
          </ul>
        </nav>
      </header>
      <main className='relative mt-10'>
        <div className="bg-orange-200 p-24 mt-12 z-0" ></div>
        <img src={shoes} className=" -mt-60 ml-8 h-[300px] rounded-[35px] z-10 " alt="Shoes" />
        <p className="px-24 py-24 z-10 text-black">{text}</p>
        <div className="flex absolute items-center ml-[1100px] -mt-40 ">
          <a href="https://www.linkedin.com">
            <img src={linkedin} alt="LinkedIn" className="w-8 h-8 mr-4" />
          </a>
          <a href="https://www.instagram.com">
            <img src={insta} alt="Instagram" className="w-8 h-8" />
          </a>
        </div>
       
        <p className='text-black -mt-[420px] ml-72 w-[750px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium quas quae error earum quam ab nemo dolores et doloribus! Commodi aperiam repellendus suscipit voluptates consectetur aspernatur eligendi enim est dolore?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam blanditiis ipsa sit mollitia doloremque dolor rem, error consectetur quisquam tenetur, sint aspernatur atque odio repudiandae iusto nam ex reprehenderit. Labore.</p>
      </main>
      
    </div>
  );
}

export default App;
