import React from 'react'
import SoapComponets from '../components/SoapComponets'
export default function Tonics() {
  return (
    <div className='soaps'>
      <SoapComponets 
      carpet='tonics'
      imagen='tonic-poros'
      name='tonico para cerra los poros'
      precio='500'
      />
      <SoapComponets 
      carpet='tonics'
      imagen='tonic-cabello'
      name='Tónico SUAVISANTE para el cabello'
      precio='500'
      />
      <SoapComponets 
      carpet='tonics'
      imagen='tonic-grasa'
      name='Tónico casero para piel grasa - Controla grasa,'
      precio='500'
      />
      <SoapComponets 
      carpet='tonics'
      imagen='tonic-aclarar'
      name='TÓNICO PARA ACLARAR EL CABELLO'
      precio='500'
      />
      <SoapComponets 
      carpet='tonics'
      imagen='tonic-rosacea'
      name='TONICO PARA PIEL CON ROSACEA'
      precio='500'
      />



    </div>
  )
}
