import React from 'react'
import SoapComponets from '../components/SoapComponets'

export default function OilMacerated() {
  return (
    <div className='soaps'>
      <SoapComponets 
      carpet='macerated'
      imagen='macerated-hiperico'
      name='Macerado de aceite de hiperico'
      precio='500'
      />
            <SoapComponets 
      carpet='macerated'
      imagen='macerated-te'
      name='Aceite de te verde'
      precio='500'
      />
            <SoapComponets 
      carpet='macerated'
      imagen='macerated-jamaica'
      name='Aceite de Jamaica'
      precio='500'
      />
            <SoapComponets 
      carpet='macerated'
      imagen='macerated-calendula'
      name='Extracto glicerinado de calendula '
      precio='500'
      />
            <SoapComponets 
      carpet='macerated'
      imagen='macerated-romero'
      name='Aceite de romero'
      precio='500'
      />


    </div>
  )
}
