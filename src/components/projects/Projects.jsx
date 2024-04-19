import React, { useEffect} from "react";
import { useAnimation, motion } from "framer-motion";
import {useInView} from "react-intersection-observer";
import Slider from './Slider';
import './projects.scss'


//import Fade from 'react-reveal/Fade'

  //  const [ref, inView] = useInView({
   //     threshold: 1,
    //    triggerOnce: false
    //  });
    
    //  const variants = {
    //    visible: { opacity: 1, scale: 1 },
     //   hidden: { opacity: 0, scale: 0.65 }
     // };
     const Projects = () => {
      
      
        function FadeInWhenVisible({ children }) {
          const controls = useAnimation();
          const [ref, inView] = useInView();
          
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 1 }}
      variants={{
        visible: { opacity: 1,x:0, scale: 1 },
        hidden: { opacity: 0,x:0, scale: 1 }
      }}
    >
      {children}
    </motion.div>
  );
}

function FadeInWhenVisible2({ children }) {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  
useEffect(() => {
if (inView) {
controls.start("visible");
}
}, [controls, inView]);

return (
<motion.div
ref={ref}
animate={controls}
initial="hidden"
transition={{ duration: 1.5 }}
variants={{
visible: { opacity: 1,x:0, scale: 1 },
hidden: { opacity: 0,x:-100, scale: 1 }
}}
>
{children}
</motion.div>
);
}
        
function FadeInWhenVisible3({ children }) {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  
useEffect(() => {
if (inView) {
controls.start("visible");
}
}, [controls, inView]);

return (
<motion.div
ref={ref}
animate={controls}
initial="hidden"
transition={{ duration: 1.5 }}
variants={{
visible: { opacity: 1,x:0, scale: 1 },
hidden: { opacity: 0,x:100, scale: 1 }
}}
>
{children}
</motion.div>
);
}


function Box2() {
  return (
    <div className="contDiv">
            <FadeInWhenVisible3>       

      <div className="left">
        <div className="imgCont">      <img src="assests/coffeeIntro13.jpg"alt="" ></img></div>

      </div>
      </FadeInWhenVisible3>       

      <FadeInWhenVisible2>       
      <div className="right">
      <div className="words">
      Coffee originated in Ethiopia in the 10th century, where it was consumed as a brewed beverage. It later spread to the Middle East and Europe, where it became popular in the 16th century.
       Coffeehouses began to emerge in major cities, becoming hubs for social and intellectual activity.     </div>
      </div>
      </FadeInWhenVisible2>

    </div>

  );
}

function Box3() {
  return (
    <div className="contDiv3">
            <FadeInWhenVisible3>       

      <div className="left">
        <div className="imgCont">      <img src="assests/coffeeIntro11.jpg"alt="" ></img></div>

      </div>
      </FadeInWhenVisible3>       

      <FadeInWhenVisible2>       
      <div className="right">
      <div className="words">
      In the 18th century, coffee production spread to the Americas, particularly Brazil, which is now the largest coffee-producing country in the world. The rise of 
      coffee plantations and trade contributed to the growth of colonial powers and the global economy.      </div>
      </div>
      </FadeInWhenVisible2>

    </div>

  );
}

function Box4() {
  return (
    <div className="contDiv">
            <FadeInWhenVisible3>       

      <div className="left">
        <div className="imgCont">      <img src="assests/coffeeIntro12.jpg"alt="" ></img></div>

      </div>
      </FadeInWhenVisible3>       

      <FadeInWhenVisible2>       
      <div className="right">
      <div className="words">
      In the 20th century, instant coffee was invented, making coffee more accessible and convenient 
      for consumers. The rise of coffee chains like Starbucks and Dunkin' Donuts in 
      the late 20th and early 21st centuries has also contributed to the popularity and 
      globalization of coffee culture.

      </div>
      </div>
      </FadeInWhenVisible2>

    </div>

  );
}


    // animate={inView ? "visible" : "hidden"}
           //         variants={variants}  exit="hidden" transition={{ duration: 2 }}   ref={ref} 
  return (
    <div className='projects' id="projects">
        <div className="wrapper" >
            
                
            <Slider/>


            <div  className="images">

                   

               
                  
                   

                    <FadeInWhenVisible>
                    <Box2 />
                    </FadeInWhenVisible>

                    <FadeInWhenVisible>
                    <Box3 />
                    </FadeInWhenVisible>

                    <FadeInWhenVisible>
                    <Box4 />
                    </FadeInWhenVisible>


            </div>
        </div>
    </div>
  );
};
export default Projects;
