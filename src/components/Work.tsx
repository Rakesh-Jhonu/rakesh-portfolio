import "./styles/Work.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { FaGithub, FaCode, FaWaveSquare, FaCube, FaFlask } from "react-icons/fa6";

gsap.registerPlugin(useGSAP);

const data = [
  {
    n: "01",
    title: "Limit Order Book",
    type: "C++ / SYSTEMS",
    tools: "C++, STL, data structures",
    description:
      "High-performance matching engine using price-time FIFO priority, cancellation handling, partial fills and 100K+ operation stress testing.",
    icon: FaCode,
    link: "https://github.com/Rakesh-Jhonu",
    linkText: "VIEW ON GITHUB",
  },
  {
    n: "02",
    title: "MFCC Feature Extraction",
    type: "PYTHON / SIGNAL PROCESSING",
    tools: "Python, FFT, Mel filters, DCT",
    description:
      "End-to-end MFCC pipeline with modular stages, numerical-stability handling and testable signal-processing components.",
    icon: FaWaveSquare,
    link: "https://github.com/Rakesh-Jhonu",
    linkText: "VIEW ON GITHUB",
  },
  {
    n: "03",
    title: "Nickel Superalloy Rolling",
    type: "COMSOL / FEM",
    tools: "COMSOL, Solid Mechanics, FEM",
    description:
      "3D rolling simulation analysing stress, strain, displacement, contact pressure and strain rate with plasticity and hot-rolling conditions.",
    icon: FaCube,
    link: "#contact",
    linkText: "DISCUSS PROJECT",
  },
  {
    n: "04",
    title: "Stabilized Zirconia Ceramics",
    type: "CAPSTONE / MATERIALS",
    tools: "2.5MgPSZ, 4YSZ, 10CaSZ",
    description:
      "Fabrication and densification study using powder processing, hydraulic pressing and high-temperature sintering.",
    icon: FaFlask,
    link: "#contact",
    linkText: "DISCUSS CAPSTONE",
  },
];

const Work = () => {
  useGSAP(() => {
    let translateX = 0;
    const box = document.getElementsByClassName("work-box");
    if (!box.length) return;

    const left = document.querySelector(".work-container")!.getBoundingClientRect().left;
    const rect = box[0].getBoundingClientRect();
    const parent = box[0].parentElement!.getBoundingClientRect().width;
    translateX =
      rect.width * box.length -
      (left + parent) +
      parseInt(getComputedStyle(box[0]).padding);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`,
        scrub: true,
        pin: true,
        id: "work",
      },
    });

    tl.to(".work-flex", { x: -translateX, ease: "none" });

    return () => {
      tl.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <div className="work-heading">
          <p>WHAT I HAVE BUILT</p>
          <h2>
            My <span>Work</span>
          </h2>
        </div>

        <div className="work-flex">
          {data.map((p) => {
            const Icon = p.icon;
            return (
              <div className="work-box" key={p.n}>
                <div className="work-info">
                  <div className="work-icon"><Icon /></div>
                  <div className="work-title">
                    <h3>{p.n}</h3>
                    <div>
                      <h4>{p.title}</h4>
                      <p>{p.type}</p>
                    </div>
                  </div>

                  <h4>Tools and features</h4>
                  <p>{p.tools}</p>
                  <p className="work-description">{p.description}</p>

                  <a
                    className="project-link"
                    href={p.link}
                    target={p.link.startsWith("http") ? "_blank" : undefined}
                    rel={p.link.startsWith("http") ? "noreferrer" : undefined}
                  >
                    {p.linkText} <span>↗</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Work;
