import A1 from "../images/A1.jpg";
import A2 from "../images/A2.jpg";
import A3 from "../images/A3.jpg";
import A4 from "../images/A4.jpg";
import B1 from "../images/B1.jpg";
import B2 from "../images/B2.jpg";
import B3 from "../images/B3.jpg";
import B4 from "../images/B4.jpg";
import B5 from "../images/B5.jpg";
import C1 from "../images/C1.jpg";
import C2 from "../images/C2.jpg";
import C3 from "../images/C3.jpg";
import C4 from "../images/C4.jpg";
import C5 from "../images/C5.jpg";
import C6 from "../images/C6.jpg";
import D1 from "../images/D1.jpg";
import D2 from "../images/D2.jpg";
import D3 from "../images/D3.jpg";
import D4 from "../images/D4.jpg";
import D5 from "../images/D5.jpg";
import E1 from "../images/E1.jpg";
import E2 from "../images/E2.jpg";
import E3 from "../images/E3.jpg";
import F1 from "../images/F1.jpg";
import F2 from "../images/F2.jpg";
import F3 from "../images/F3.jpg";
import F4 from "../images/F4.jpg";
import F5 from "../images/F5.jpg";
import G1 from "../images/G1.jpg";
import G2 from "../images/G2.jpg";
import G3 from "../images/G3.jpg";
import G4 from "../images/G4.jpg";
import H1 from "../images/H1.jpg";
import H2 from "../images/H2.jpg";
import I1 from "../images/I1.jpg";
import I2 from "../images/I2.jpg";
import I3 from "../images/I3.jpg";
import J1 from "../images/J1.jpg";
import J2 from "../images/J2.jpg";
import J3 from "../images/J3.jpg";
import J4 from "../images/J4.jpg";
import J5 from "../images/J5.jpg";
import J6 from "../images/J6.jpg";
import K1 from "../images/K1.jpg";
import K2 from "../images/K2.jpg";
import K3 from "../images/K3.jpg";
import K4 from "../images/K4.jpg";

import { useRef,useEffect } from "react";

const Photos = () => {
  const photosRef = useRef(null);
  const colorMap = {
    a: "#C8AD55",
    b: "#000000",
    c: "#748E54",
    d: "#000000",
    e: "#AEECEF",
    f: "#AB3428",
    g: "#93C6D6",
    h: "#668586",
    i: "#000000",
    j: "#000000",
    k: "#444444"
  };

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          photosRef.current.style.backgroundColor = colorMap[entry.target.id];
        }
      });
    });
    const photosGroups = document.querySelectorAll('.photos__group');
    photosGroups.forEach(group => {
      observer.observe(group);
    });
  }, []);

  return (
    <div className="photos" ref={photosRef} style={{backgroundColor: colorMap.a}}>
      <div className="photos__group a" id="a">
        <p>A</p>
        <img alt="hugophoto" src={A1} />
        <img alt="hugophoto" src={A2} />
        <img alt="hugophoto" src={A3} />
        <img alt="hugophoto" src={A4} />
      </div>
      <div className="photos__group b" id="b">
        <p>B</p>
        <img alt="hugophoto" src={B1} />
        <img alt="hugophoto" src={B2} />
        <img alt="hugophoto" src={B3} />
        <img alt="hugophoto" src={B4} />
        <img alt="hugophoto" src={B5} />
      </div>
      <div className="photos__group c" id="c">
        <p>C</p>
        <img alt="hugophoto" src={C1} />
        <img alt="hugophoto" src={C2} />
        <img alt="hugophoto" src={C3} />
        <img alt="hugophoto" src={C4} />
        <img alt="hugophoto" src={C5} />
        <img alt="hugophoto" src={C6} />
      </div>
      <div className="photos__group d" id="d">
        <p>D</p>
        <img alt="hugophoto" src={D1} />
        <img alt="hugophoto" src={D2} />
        <img alt="hugophoto" src={D3} />
        <img alt="hugophoto" src={D4} />
        <img alt="hugophoto" src={D5} />
      </div>
      <div className="photos__group e" id="e">
        <p>E</p>
        <img alt="hugophoto" src={E1} />
        <img alt="hugophoto" src={E2} />
        <img alt="hugophoto" src={E3} />
      </div>
      <div className="photos__group f" id="f">
        <p>F</p>
        <img alt="hugophoto" src={F1} />
        <img alt="hugophoto" src={F2} />
        <img alt="hugophoto" src={F3} />
        <img alt="hugophoto" src={F4} />
        <img alt="hugophoto" src={F5} />
      </div>
      <div className="photos__group g" id="g">
        <p>G</p>
        <img alt="hugophoto" src={G1} />
        <img alt="hugophoto" src={G2} />
        <img alt="hugophoto" src={G3} />
        <img alt="hugophoto" src={G4} />
      </div>
      <div className="photos__group h" id="h">
        <p>H</p>
        <img alt="hugophoto" src={H1} />
        <img alt="hugophoto" src={H2} />
      </div>
      <div className="photos__group i" id="i">
        <p>I</p>
        <img alt="hugophoto" src={I1} />
        <img alt="hugophoto" src={I2} />
        <img alt="hugophoto" src={I3} />
      </div>
      <div className="photos__group j" id="j">
        <p>J</p>
        <img alt="hugophoto" src={J1} />
        <img alt="hugophoto" src={J2} />
        <img alt="hugophoto" src={J3} />
        <img alt="hugophoto" src={J4} />
        <img alt="hugophoto" src={J5} />
        <img alt="hugophoto" src={J6} />
      </div>
      <div className="photos__group k" id="k">
        <p>K</p>
        <img alt="hugophoto" src={K1} />
        <img alt="hugophoto" src={K2} />
        <img alt="hugophoto" src={K3} />
        <img alt="hugophoto" src={K4} />
      </div>
    </div>
  );
};

export default Photos;
