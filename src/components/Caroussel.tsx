import React, { useState } from "react";

const images = [
  {url: "image1.jpg", alt: "Projet 1"},
  {url: "image2.jpg", alt: "Projet 2"},
  {url: "image3.jpg", alt: "Projet 3"}
];

const description = (
  <>
    <h2>Description générale</h2>
    <p>
      Ingénieur systèmes embarqués diplômé d’EFREI Paris, spécialisé dans le développement
      de solutions innovantes. Expérience en microcontrôleurs, protocoles de communication,
      modélisation 3D et conception de PCB.
    </p>
    <ul>
      <li>Développement en C, Python, VHDL…</li>
      <li>Maîtrise de STM32, Arduino, ESP32…</li>
      <li>Conception PCB & Modélisation 3D</li>
      <li>Travail collaboratif & apprentissage continu</li>
    </ul>
  </>
);

function Caroussel() {
  const [index, setIndex] = useState(0);

  const prevImg = () => setIndex((index - 1 + images.length) % images.length);
  const nextImg = () => setIndex((index + 1) % images.length);

  return (
    <div style={{display: "flex", width:"auto", height:"400px", background: "#181818", borderRadius: "12px", overflow: "hidden"}}>
      <div style={{flex: 1, display: "flex", alignItems: "center", justifyContent: "center", background: "#232323"}}>
        <button onClick={prevImg} style={{marginRight: 10}}>&lt;</button>
        <img src={images[index].url} alt={images[index].alt}
             style={{width: 350, maxHeight: 350, borderRadius: 10}}/>
        <button onClick={nextImg} style={{marginLeft: 10}}>&gt;</button>
      </div>
      <div style={{flex: 1, padding: 32, color: "#fff", background: "#21232b"}}>
        {description}
      </div>
    </div>
  );
}

export default Caroussel;
