export const handleMouseMove=(e:MouseEvent,cb:(x:number,y:number)=>void)=>cb((e.clientX/innerWidth-.5)*2,(e.clientY/innerHeight-.5)*2);
export const handleTouchMove=()=>{}; export const handleTouchEnd=(cb:(x:number,y:number,ix:number,iy:number)=>void)=>cb(0,0,.1,.2); export const handleHeadRotation=()=>{};
