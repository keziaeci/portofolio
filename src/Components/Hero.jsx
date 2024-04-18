import React from "react";
import Typed from "typed.js";
import { Navigator } from "./Navigator";
import { useNavigate } from "react-router-dom";
export function Hero({}) {

  // const navigate = useNavigate()

   // Create reference to store the DOM element containing the animation
    const el = React.useRef(null);

    React.useEffect(() => {
      const typed = new Typed(el.current, {
        strings: ["Student", "Learner","Web Developer"],
        startDelay: 100,
        typeSpeed: 30,
        backSpeed: 100,
        loop: true
      });
  
      return () => {
        // Destroy Typed instance during cleanup to stop animation
        typed.destroy();
      };
    }, []);

  return <div className="hero min-h-screen bg-base-200">
            <div className="hero-content items-start flex-wrap">
                {/* <div className="grid grid-cols-2"> */}
                  <div className="flex-1 shrink">
                    <h1 className='font-bold text-7xl hover:line-through hover:text-white hover:italic'>KEZIA REGINA</h1>
                    <p className="text-cyan-500 font-semibold text-xl">I'm a <span className="text-pink-600" ref={el} /></p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis eligendi temporibus rerum explicabo! Alias consequuntur sit praesentium eius soluta non perferendis, incidunt iste porro consectetur, corrupti sint ab? Ex blanditiis, nisi ut provident at illum error eaque deserunt facere mollitia. Adipisci at veritatis, hic nesciunt tempora corporis recusandae molestias. At.</p>
                  </div>
                  <div className="lg:flex-none shrink">
                  <Navigator path="/about" name="Further About Me."/>
                  <Navigator path="/projects" name="My Works."/>
                    {/* <button className="link-hover" onClick={() => navigate('/')}>See more</button> */}
                    {/* <button className="link-hover" onClick={() => navigate('/')}>My Projects</button> */}

                    {/* <a href="" className="btn btn-circle">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </a> */}
                  </div>
                {/* </div> */}
            </div>
        </div>;
}
  