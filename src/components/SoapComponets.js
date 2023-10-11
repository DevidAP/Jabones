import React from 'react'
import '../components/soapcomponents.css'

export default function SoapComponets(props) {

  const imageUrl = require(`../image/${props.carpet}/${props.imagen}.png`);


  return (
    <div className='conteiner-soap'>
      <div className="container">
      <img src={imageUrl} alt={props.name} />
        <div className="capa">
        <p className='text-description'>{props.description}</p>

        </div>
      </div>
        <p>{props.name}</p>
        <button>{props.precio}</button>

      </div>

  )
}
