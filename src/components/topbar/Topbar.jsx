import React,{useRef} from 'react'
import './topbar.scss'
import {motion} from 'framer-motion';
import Lottie from 'react-lottie';
import coffeeLove  from '../../coffee-love.json'

export default function Topbar({backOpen,setBackOpen,menuOpen,setMenuOpen}) {
   
  const lottieRef = useRef(null);

  const handleClick = () => {
    if (lottieRef.current) {
      lottieRef.current.play();
    }
  }


  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: coffeeLove,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  

    const navAnimation = {
        show: { 
          transition:{
            staggerChildren:.4,
            delayChildren:0.8,
            ease:"easeInOut"
          }}}
         
  return (
      
    <div className={"topbar " + (backOpen && "active")} id='topbar' >
        <motion.div className="wrapper" variants={navAnimation}
             initial="hidden"
             animate='show'
                       >
            <div className="left">
                <div className="leftComp" onClick={handleClick}>
                <Lottie ref={lottieRef}  options={defaultOptions}/>
                </div>
            </div>

           

        </motion.div>

    </div>
   
   
  )
}
