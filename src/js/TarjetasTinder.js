/* eslint-disable no-unused-vars */

import React, {useState} from 'react'
import '../css/TarjetasTinder.css'
import TarjetaDog from 'react-tinder-card';

function TarjetasTinder() {

  const [dog,setDog] = useState([
  {
    nombre: 'Donna',
    URL: 'https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2020/5/29/1/Orig_MalloryZiglar_PoochSelfie_HenryPortrait.jpg.rend.hgtvcom.616.770.suffix/1590784120948.jpeg'
  },
  {
    nombre: 'Pancho',
    URL: 'https://i.pinimg.com/originals/33/d8/5b/33d85b60330c9037ea88f7e408e409de.jpg'
  },
  {
    nombre: 'Firulais',
    URL: 'https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2020/5/29/1/Orig_DanielleBoaz_PoochSelfie_AtlasPortrait.JPG.rend.hgtvcom.616.822.suffix/1590785816190.jpeg'
  },
  {
    nombre: 'Pinocho',
    URL: 'https://i.pinimg.com/originals/6a/e5/6f/6ae56f74187dc4726069b745352668c3.jpg'
  },
  {
    nombre: 'Lencie',
    URL: 'https://i.etsystatic.com/12750423/r/il/9b9107/4148181034/il_fullxfull.4148181034_dfne.jpg'
  },
  {
    nombre: 'Bonita',
    URL: 'https://64.media.tumblr.com/e4126fa25fbf603a93b78d9d665342fa/4abcb4cecd7f08ae-33/s500x750/b67f79f7e3b046cab35e4cb1ebb583f34b8e8f2b.jpg'
  },
  {
    nombre: 'Juan',
    URL: 'https://nutrisourcepetfoods.com/wp-content/uploads/2021/09/rosy-close-up-face-3-768x1024-1.jpg'
  },
  ])

  return (
    <div className="tarjetasTinder">
        <div className="tarjetasTinder_contenedor ">
            {dog.map(dog => (

                <TarjetaDog
                className="swipe"
                key={dog.name}
                preventSwipe={['up','down']}
                >
                    <div className="tarjeta"
                    style={{backgroundImage:`url(${dog.URL})`}}
                    >
                        <h1>{dog.nombre}</h1>
                    </div>

                </TarjetaDog>
            ))}
        </div>
    </div>
  )
}

export default TarjetasTinder