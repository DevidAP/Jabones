import React from 'react'
import SoapComponets from '../components/SoapComponets'
export default function Tonics() {
  return (
    <div className='soaps'>
      <div className="container-soap">
      <SoapComponets 
      carpet='tonics'
      imagen='tonic-poros'
      name='tonico para cerra los poros'
      precio='$$$'
      />
      <SoapComponets 
      carpet='tonics'
      imagen='tonic-cabello'
      name='Tónico SUAVISANTE para el cabello'
      precio='$$$'
      />
      <SoapComponets 
      carpet='tonics'
      imagen='tonic-grasa'
      name='Tónico casero para piel grasa - Controla grasa,'
      precio='$$$'
      />
      <SoapComponets 
      carpet='tonics'
      imagen='tonic-aclarar'
      name='TÓNICO PARA ACLARAR EL CABELLO'
      precio='$$$'
      />
      <SoapComponets 
      carpet='tonics'
      imagen='tonic-rosacea'
      name='TONICO PARA PIEL CON ROSACEA'
      precio='$$$'
      />


      </div>

    </div>
  )
}
