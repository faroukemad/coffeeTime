import React ,{useRef} from "react";
import './intro.scss'
import {MdOutlineKeyboardDoubleArrowRight} from "react-icons/md";
import Lottie from 'react-lottie';
import scroll  from '../../scroll.json'

export default function Intro({menuOpen,setMenuOpen,backOpen,setBackOpen}) {


  const lottieRef = useRef(null);

  const handleClick = () => {
    if (lottieRef.current) {
      lottieRef.current.play();
    }
  }

  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: scroll,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };


  return (

    <div className={"intro"} id="intro">
        
        <div className="wrapper"  >
          <div className="wrap">
          <div className="left">
            <div className="leftImage">

          <img src="assests/coffeeIntro7.png"alt="" ></img>

          </div>
          </div>


          <div className="right">
            <div className="coffeetime">
              <h1 className='wlecome'>Welcome to Coffee <span>Time</span></h1>
              <p>We're a family-owned coffee shop that's been serving up delicious drinks for over 20 years.
               Come visit us and enjoy a cozy atmosphere and friendly service.</p>
            </div>
                <div className='btnClass'>
                    <div className='btn'  onClick={()=>setMenuOpen(!menuOpen)} > Get Started <MdOutlineKeyboardDoubleArrowRight style={{ fill: 'black' }} className='arrow'/> </div>
                </div>
                </div>
          </div>
         
                <div className="scrollDiv" onClick={handleClick}>
                  <div className="scroll"> <a href='#projects'><Lottie ref={lottieRef}  options={defaultOptions}/></a></div>
                </div>
        </div>
    </div>
  )
}
