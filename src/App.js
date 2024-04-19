import './App.css';
import Topbar from "./components/topbar/Topbar";
import Intro from  "./components/intro/Intro";
import Projects from './components/projects/Projects';
import Email from './components/email/Email';
import {useState,useEffect} from "react";
import About from './components/about/About';
import Footer from './components/footer/Footer';
import { motion, useScroll, useSpring } from "framer-motion";
import Lottie from 'react-lottie';
import coffeeloader  from './coffeeloaderx.json'
import Up from './components/up/Up';
import Menu from './components/menu/Menu';


function App() {

  
  const[menuOpen, setMenuOpen]= useState(false)
  const [backOpen,setBackOpen]= useState(false)
  const [loading,setLoading]=useState(false)
  const [load,setLoad]=useState(false)

  
  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: coffeeloader,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

 // useEffect(() => {
 //   window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
 // }, []);
 useEffect(() => {
  window.onload = () => {
    window.scrollTo(0, 0);
  };
}, []);

  useEffect(()=>{
    
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },5000)
  },[])


  return (
  
    <div className={"App " } >
          <div className={"App " + (loading && 'appSize')} >

      <motion.div  className='progressBar'style={{ scaleX }}/>
   {
     loading ?
     <div  className='coffeeCont'>
      <Lottie onload={ window.scrollTo(0,0)} options={defaultOptions} className='cofload'/>

   
      </div>
     :
 
     <div className={'sections '}>
          


          <div className={"back " + (backOpen && "background") }>
            <div className={"x " + (menuOpen && "blurr") }>
            <Topbar  backOpen={backOpen} setBackOpen={setBackOpen} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <Intro  menuOpen={menuOpen} setMenuOpen={setMenuOpen} backOpen={backOpen} setBackOpen={setBackOpen}/>
          </div>
          </div>
        <Email menuOpen={menuOpen} setMenuOpen={setMenuOpen} load={load} setLoad={setLoad}/>
        <div className={"x " + (menuOpen && "blurr") }>
        <Projects/>
        <Menu/>
        <About/>
        <Footer/>
        <Up/>
        </div>
      </div>
        }
    </div>
    </div>
  );
}

export default App;
