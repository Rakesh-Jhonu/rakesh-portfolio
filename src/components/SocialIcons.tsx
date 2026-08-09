import {FaGithub,FaLinkedinIn} from "react-icons/fa6";
import {SiCodeforces} from "react-icons/si";
import {TbNotes} from "react-icons/tb";
import "./styles/SocialIcons.css";
import HoverLinks from "./HoverLinks";
const SocialIcons=()=> <div className="icons-section" style={{pointerEvents:"auto"}}><div className="social-icons" data-cursor="icons" id="social"><span><a href="https://github.com/Rakesh-Jhonu" target="_blank" rel="noreferrer"><FaGithub/></a></span><span><a href="https://www.linkedin.com/in/rakesh-kumar-6509b4289/" target="_blank" rel="noreferrer"><FaLinkedinIn/></a></span><span><a href="https://codeforces.com/profile/Jhonu_coder" target="_blank" rel="noreferrer"><SiCodeforces/></a></span></div><a className="resume-button" href="/Rakesh-Kumar-Resume.pdf" target="_blank" rel="noreferrer"><HoverLinks text="RESUME"/><span><TbNotes/></span></a></div>;
export default SocialIcons;
