
import React from 'react'
import HomeComponent from '../components/HomeComponent'
import '../components/homecomponents.css'

export default function Home() {
  return (
    <div className='container-home'  >
   
      <h1>bienvenido</h1>
      <div className="componentes-cards">
      <HomeComponent 
      carpet='home'
      imagen='soaphome'
      url='/soap'
      info='jabones'

/>
<HomeComponent 
      carpet='home'
      imagen='shampooshome'
      url='/shampoo'
      info='shampoo'

/>
            <HomeComponent 
            carpet='home'
            imagen='maceradoshome'
            url='/oilmacerated'
            info='macerados'
      
      />
      <HomeComponent 
      carpet='home'
      imagen='tonicos'
      url='/tonics'
      info='tonicos'
      />

</div>


    </div>
  )
}
