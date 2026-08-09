import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap-trial/ScrollSmoother";
import "./styles/Navbar.css";
gsap.registerPlugin(ScrollSmoother,ScrollTrigger);
export let smoother: ScrollSmoother;
const Navbar=()=>{
 useEffect(()=>{smoother=ScrollSmoother.create({wrapper:"#smooth-wrapper",content:"#smooth-content",smooth:1.7,speed:1.7,effects:true,autoResize:true,ignoreMobileResize:true});smoother.scrollTop(0);smoother.paused(false);return()=>{try{smoother.kill()}catch{}}},[]);
 return <><div className="header"><a href="/#" className="navbar-title" data-cursor="disable">RK<span>•</span></a><a href="mailto:rakeshghotar38@gmail.com" className="navbar-connect" data-cursor="disable">rakeshghotar38@gmail.com</a><ul><li><a data-href="#about" href="#about"><HoverLinks text="ABOUT"/></a></li><li><a data-href="#work" href="#work"><HoverLinks text="WORK"/></a></li><li><a data-href="#contact" href="#contact"><HoverLinks text="CONTACT"/></a></li></ul></div><div className="landing-circle1"></div><div className="landing-circle2"></div><div className="nav-fade"></div></>;
};
export default Navbar;
