import React from 'react'
import '../components/soapcomponents.css'

export default function SoapComponets(props) {

  const imageUrl = require(`../image/${props.carpet}/${props.imagen}.png`);


  return (
    <div className='conteiner-soap'>
      <img src={imageUrl} alt={props.name} />
        <p>{props.name}</p>
        <button>{props.precio}</button>

      </div>

  )
}
