import "./styles/style.css";
const skills=["C++","Python","DSA","COMSOL Multiphysics","FEM","MATLAB","XRD","FTIR","Raman","Git","VS Code","LaTeX"];
const TechStack=()=> <div className="techstack" style={{padding:"8vh 5vw",minHeight:"60vh"}}><h2>My Techstack</h2><div style={{display:"flex",flexWrap:"wrap",gap:"18px",marginTop:"35px"}}>{skills.map(s=><span key={s} style={{border:"1px solid rgba(255,255,255,.3)",padding:"14px 18px",fontSize:"14px"}}>{s}</span>)}</div></div>;
export default TechStack;
