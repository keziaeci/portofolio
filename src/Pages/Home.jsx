import { Hero } from '../Components/Hero'
import React from 'react'
import Typed from "typed.js";
import Navigator from '../Components/Navigator';
import { SocialMedia } from '../Components/SocialMedia';
import Toggle from '../Components/Toggle';

export const Home = () => {
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

    return (
    <div className='font-mono max-w-full p-4 lg:p-52 content-center'>
        <div className="text-sm breadcrumbs flex flex-wrap">
            <ul className='flex-1'>
                <li className='underline dark:text-slate-400'>Home</li> 
            </ul>

            <div className=''>
                {/* <label class="relative lg:right-2 inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" class="sr-only peer" /
                    <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label> */}
                <Toggle/>
            </div>
            {/* <input type="checkbox" className="toggle" checked /> */}
        </div>
        <div className='flex flex-wrap lg:flex-nowrap lg:mt-10'>
            <div className='flex-1'>
                <h1 className='font-bold text-7xl hover:line-through dark:hover:text-white hover:text-black hover:italic text-slate-800 dark:text-slate-400'>Kezia Regina</h1>
                <p className="text-black dark:text-white font-normal text-xl">I'm a <span className="text-pink-600 font-semibold" ref={el} /></p>
                <p className='mt-4 text-slate-700 dark:text-slate-400'>An ordinary girl who's willing to know more about <b className='font-bold text-black dark:text-white underline'>technology</b></p>
                
                <div className='flex flex-wrap gap-4 my-4 lg:mt-5'>
                    <SocialMedia link={'https://github.com/keziaeci'} svg={<svg className="w-6 h-6 text-gray-600 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clipRule="evenodd"/>
                    </svg>}/>
                    <SocialMedia link={'https://www.linkedin.com/in/keziaeci/'} svg={<svg className="text-gray-600 dark:text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zM8.951 9.404H6.165V17.5H8.95V9.404zm6.841-.192c-1.324 0-1.993.629-2.385 1.156l-.127.181V9.403h-2.786l.01.484c.006.636.007 1.748.005 2.93l-.015 4.683h2.786v-4.522c0-.242.018-.484.092-.657.202-.483.66-.984 1.43-.984.955 0 1.367.666 1.408 1.662l.003.168V17.5H19v-4.643c0-2.487-1.375-3.645-3.208-3.645zM7.576 5.5C6.623 5.5 6 6.105 6 6.899c0 .73.536 1.325 1.378 1.392l.18.006c.971 0 1.577-.621 1.577-1.398C9.116 6.105 8.53 5.5 7.576 5.5z"/></svg>}/>
                    <SocialMedia link={'https://twitter.com/reginaeci'} svg={<svg className="text-gray-600 dark:text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zm3.193 7c-1.586 0-2.872 1.243-2.872 2.777 0 .217.025.43.074.633a8.251 8.251 0 0 1-5.92-2.902c-.247.41-.389.887-.389 1.397 0 .963.507 1.813 1.278 2.311a2.94 2.94 0 0 1-1.301-.348v.036c0 1.345.99 2.467 2.304 2.723a2.98 2.98 0 0 1-1.298.047c.366 1.103 1.427 1.906 2.683 1.928a5.889 5.889 0 0 1-3.567 1.19c-.231 0-.46-.014-.685-.04A8.332 8.332 0 0 0 9.903 18c5.283 0 8.172-4.231 8.172-7.901 0-.12-.002-.24-.008-.36A5.714 5.714 0 0 0 19.5 8.302a5.869 5.869 0 0 1-1.65.437 2.8 2.8 0 0 0 1.263-1.536 5.87 5.87 0 0 1-1.824.674A2.915 2.915 0 0 0 15.193 7z"/></svg>}/>
                    <SocialMedia link={'https://instagram.com/keziaeci'} svg={<svg className="text-gray-600 dark:text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c6.6274 0 12 5.3726 12 12s-5.3726 12-12 12S0 18.6274 0 12 5.3726 0 12 0zm3.115 4.5h-6.23c-2.5536 0-4.281 1.6524-4.3805 4.1552L4.5 8.8851v6.1996c0 1.3004.4234 2.4193 1.2702 3.2359.7582.73 1.751 1.1212 2.8818 1.1734l.2633.006h6.1694c1.3004 0 2.389-.4234 3.1754-1.1794.762-.734 1.1817-1.7576 1.2343-2.948l.0056-.2577V8.8851c0-1.2702-.4234-2.3589-1.2097-3.1452-.7338-.762-1.7575-1.1817-2.9234-1.2343l-.252-.0056zM8.9152 5.8911h6.2299c.9072 0 1.6633.2722 2.2076.8166.4713.499.7647 1.1758.8103 1.9607l.0063.2167v6.2298c0 .9375-.3327 1.6936-.877 2.2077-.499.4713-1.176.7392-1.984.7806l-.2237.0057H8.9153c-.9072 0-1.6633-.2722-2.2076-.7863-.499-.499-.7693-1.1759-.8109-2.0073l-.0057-.2306V8.885c0-.9073.2722-1.6633.8166-2.2077.4712-.4713 1.1712-.7392 1.9834-.7806l.2242-.0057h6.2299-6.2299zM12 8.0988c-2.117 0-3.871 1.7238-3.871 3.871A3.8591 3.8591 0 0 0 12 15.8408c2.1472 0 3.871-1.7541 3.871-3.871 0-2.117-1.754-3.871-3.871-3.871zm0 1.3911c1.3609 0 2.4798 1.119 2.4798 2.4799 0 1.3608-1.119 2.4798-2.4798 2.4798-1.3609 0-2.4798-1.119-2.4798-2.4798 0-1.361 1.119-2.4799 2.4798-2.4799zm4.0222-2.3589a.877.877 0 1 0 0 1.754.877.877 0 0 0 0-1.754z"/></svg>}/>
                </div>

            </div>
            <div className="lg:flex-none shrink">
                <Navigator path="/about" name="Further About Me"/>
                <Navigator path="/projects" name="Projects"/>
            </div>
        </div>
    </div>
    // <div className='font-mono'>
    //     <div className="hero min-h-screen bg-base-200">
    //         <div className="hero-content items-start flex-wrap">
    //         <div className="text-sm breadcrumbs">
    //         <ul className=''>
    //             <li><a>Home</a></li> 
    //             <li><a>Documents</a></li> 
    //             <li>Add Document</li>
    //         </ul>
    //         </div>
    //             <div className="flex-1 shrink">
    //                 <h1 className='font-bold text-7xl hover:line-through hover:text-white hover:italic'>Kezia Regina</h1>
    //                 <p className="text-white font-normal text-xl">I'm a <span className="text-pink-600" ref={el} /></p>
    //                 <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis eligendi temporibus rerum explicabo! Alias consequuntur sit praesentium eius soluta non perferendis, incidunt iste porro consectetur, corrupti sint ab? Ex blanditiis, nisi ut provident at illum error eaque deserunt facere mollitia. Adipisci at veritatis, hic nesciunt tempora corporis recusandae molestias. At.</p>
    //             </div>
    //             <div className="lg:flex-none shrink">
    //                 <Navigator path="/about" name="Further About Me."/>
    //                 <Navigator path="/projects" name="My Works."/>
    //             </div>
    //         </div>
    //     </div>
    // </div>
    )
}
