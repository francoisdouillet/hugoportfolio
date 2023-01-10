import A1 from "../../images/A1.jpg";
import A2 from "../../images/A2.jpg";
import A3 from "../../images/A3.jpg";
import A4 from "../../images/A4.jpg";
import B1 from "../../images/B1.jpg";
import B2 from "../../images/B2.jpg";
import B3 from "../../images/B3.jpg";
import B4 from "../../images/B4.jpg";
import B5 from "../../images/B5.jpg";
import C1 from "../../images/C1.jpg";
import C2 from "../../images/C2.jpg";
import C3 from "../../images/C3.jpg";
import C4 from "../../images/C4.jpg";
import C5 from "../../images/C5.jpg";
import C6 from "../../images/C6.jpg";
import D1 from "../../images/D1.jpg";
import D2 from "../../images/D2.jpg";
import D3 from "../../images/D3.jpg";
import D4 from "../../images/D4.jpg";
import D5 from "../../images/D5.jpg";
import E1 from "../../images/E1.jpg";
import E2 from "../../images/E2.jpg";
import E3 from "../../images/E3.jpg";
import F1 from "../../images/F1.jpg";
import F2 from "../../images/F2.jpg";
import F3 from "../../images/F3.jpg";
import F4 from "../../images/F4.jpg";
import F5 from "../../images/F5.jpg";
import G1 from "../../images/G1.jpg";
import G2 from "../../images/G2.jpg";
import G3 from "../../images/G3.jpg";
import G4 from "../../images/G4.jpg";
import H1 from "../../images/H1.jpg";
import H2 from "../../images/H2.jpg";
import I1 from "../../images/I1.jpg";
import I2 from "../../images/I2.jpg";
import I3 from "../../images/I3.jpg";
import J1 from "../../images/J1.jpg";
import J2 from "../../images/J2.jpg";
import J3 from "../../images/J3.jpg";
import J4 from "../../images/J4.jpg";
import J5 from "../../images/J5.jpg";
import J6 from "../../images/J6.jpg";
import K1 from "../../images/K1.jpg";
import K2 from "../../images/K2.jpg";
import K3 from "../../images/K3.jpg";
import K4 from "../../images/K4.jpg";

import { useRef,useLayoutEffect, useEffect } from "react";
import PhotoGroup from "./PhotoGroup";
import 'photoswipe/style.css';
import PhotoSwipeLightBox from "photoswipe/lightbox";



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

  const groups = [
    {
      group: 'a',
      id: 'a',
      images: [A1,A2,A3,A4]
    },
    {
      group: 'b',
      id: 'b',
      images: [B1,B2,B3,B4,B5]
    },
    {
      group: 'c',
      id: 'c',
      images: [C1,C2,C3,C4,C5,C6]
    },
    {
      group: 'd',
      id: 'd',
      images: [D1,D2,D3,D4,D5]
    },
    {
      group: 'e',
      id: 'e',
      images: [E1,E2,E3]
    },
    {
      group: 'f',
      id: 'f',
      images: [F1,F2,F3,F4,F5]
    },
    {
      group: 'g',
      id: 'g',
      images: [G1,G2,G3,G4,F5]
    },
    {
      group: 'h',
      id: 'h',
      images: [H1,H2]
    },
    {
      group: 'i',
      id: 'i',
      images: [I1,I2,I3]
    },
    {
      group: 'j',
      id: 'j',
      images: [J1,J2,J3,J4,J5,J6]
    },
    {
      group: 'k',
      id: 'k',
      images: [K1,K2,K3,K4]
    },
  ]

  useEffect(() => {
    for (let i = 0; i < groups.length; i++) {
      for(let j = 0 ; j < groups[i].images.length; j++) {
        console.log(groups[i].images[j].width)
      }
  }
  },[])

  // const size = imageSize(K4);
  // console.log(size);

  const defaultColor = Object.values(colorMap)[0];

  useLayoutEffect(() => {
    photosRef.current.style.backgroundColor = defaultColor
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          photosRef.current.style.backgroundColor = colorMap[entry.target.id];
        }
      });
    },{
      threshold: 0.1
    });
    const photosGroups = document.querySelectorAll('.photos__group');
    photosGroups.forEach(group => {
      observer.observe(group);
    });
  }, []);
  

  useEffect(() => {
    let lightbox = new PhotoSwipeLightBox({
      gallery: ".photos",
      children: 'a',
      pswpModule: () => import('photoswipe'),
    })
    lightbox.init()
    return () => {
      lightbox.destroy()
      lightbox = null
    }
  }, [])
  

  return (
    <div className="photos" ref={photosRef} style={{ backgroundColor: colorMap.a }}>
    {groups.map(({ group, images, id }) => (
      <PhotoGroup group={group} images={images} id={id} />
    ))}
  </div>
  );
};

export default Photos;
