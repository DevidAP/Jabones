import React from 'react'
import SoapComponets from '../components/SoapComponets'

export default function OilMacerated() {
  return (
    <div className='soaps'>
        < div className="container-soap">
      <SoapComponets 
      carpet='macerated'
      imagen='macerated-hiperico'
      description=""
      name='Macerado de aceite de hiperico'
      precio='$$$'
      />
            <SoapComponets 
      carpet='macerated'
      imagen='macerated-te'
      description=""
      name='Aceite de te verde'
      precio='$$$'
      />
            <SoapComponets 
      carpet='macerated'
      imagen='macerated-jamaica'
      description=""
      name='Aceite de Jamaica'
      precio='$$$'
      />
            <SoapComponets 
      carpet='macerated'
      imagen='macerated-calendula'
      description=""
      name='Extracto glicerinado de calendula '
      precio='$$$'
      />
            <SoapComponets 
      carpet='macerated'
      imagen='macerated-romero'
      description="a"
      name='Aceite de romero'
      precio='$$$'
      />

</div>
    </div>
  )
}
