import React from "react";
import SoapComponets from "../components/SoapComponets";
import "./soaps.css";
export default function Soap() {
  return (
    <div className="soaps">
      <div className="container-soap">
        <SoapComponets
          carpet="soap"
          imagen="jabon-tinto"
          description=" aporta luminosidad a la piel, la protege contra los radicales libres y puede ayudar a mantener una apariencia juvenil. "
          name="jabón de vino tinto"
          price="$$$"
        />

        <SoapComponets
          carpet="soap"
          imagen="jabon-chia"
          description="Ofrece una exfoliación efectiva, una limpieza profunda y beneficios adicionales para la piel, gracias a las propiedades de las semillas de Chía."
          name="Jabón corporal semilla de chia "
          price="$$$"
        />

        <SoapComponets
          carpet="soap"
          imagen="jabon-aloe"
          description="Este producto rejuvenecedor actúa como un exfoliante suavizante que ayuda a eliminar células muertas de la piel, reduciendo arrugas y manchas."
          name="JABóN DE ALOE CON AVENA DOBLE"
          price="$$$"
        />

        <SoapComponets
          carpet="soap"
          imagen="jabon-arena"
          description="Ofrece beneficios que incluyen exfoliación suave, limpieza profunda, mejora de la circulación, tratamiento de la celulitis, suavizado de la piel áspera, prevención de pelos encarnados y un aspecto más radiante de la piel."
          name="jabón de arena"
          price="$$$"
        />

        <SoapComponets
          carpet="soap"
          imagen="jabon-cafe"
          description="El jabón de café brinda exfoliación natural, mejora la circulación y reduce la hinchazón. También combate la celulitis, elimina olores no deseados, aporta antioxidantes a la piel, hidrata y ofrece un aroma agradable."
          name="jabón de cafe"
          price="$$$"
        />

        <SoapComponets
          carpet="soap"
          imagen="jabon-calendula"
          description="es un excelente exfoliante que ayuda a eliminar las células muertas de la piel en el rostro y el cuerpo. Es especialmente útil para personas con acné o piel grasa. "
          name="jabón de calendula en polvo"
          price="$$$"
        />

        <SoapComponets
          carpet="soap"
          imagen="jabon-conditiomer"
          description="proporcionar hidratación y mejorar la textura del cabello, haciéndolo 
                   más fácil de peinar. Es una opción práctica y versátil para el cuidado capilar de la familia."
          name="jabón solido de acondicionador"
          price="$$$"
        />

        <SoapComponets
          carpet="soap"
          imagen="jabon-linaza"
          description="es un excelente exfoliante, tiene propiedades antiinflamatorias y es rico en ácidos grasos esenciales como el omega-3. Su uso suaviza la piel, proporciona un aspecto aterciopelado, alivia el ardor de las quemaduras solares y ayuda a eliminar el exceso de grasa en la piel."
          name="JABóN DE LINAZA SOLIDO DE GLICERINA"
          price="$$$"
        />

        <SoapComponets
          carpet="soap"
          imagen="jabon-mentol"
          description="tiene la capacidad de activar la circulación sanguínea y eliminar las células muertas de la piel."
          name="jabón de mentol"
          price="$$$"
        />

        <SoapComponets
          carpet="soap"
          imagen="jabon-miel"
          description="es beneficioso para afecciones como el eczema, la psoriasis y la rosácea, ya que contribuye a la regeneración celular de la piel."
          name="jabón de polen y miel"
          price="$$$"
        />

        <SoapComponets
          carpet="soap"
          imagen="jabon-perejil"
          description="El jabón de perejil con harina de arroz es un producto aclarante para la piel."
          name="jabón de perejil con harina"
          price="$$$"
        />

        <SoapComponets
          carpet="soap"
          imagen="jabon-platano"
          description="es hidratante y antioxidante, lo que lo hace efectivo para combatir el envejecimiento de la piel."
          name="jabón de platano con miel"
          price="$$$"
        />

        <SoapComponets
          carpet="soap"
          imagen="jabon-pomez"
          description='Para exfoliar suavemente la piel al eliminar las células muertas, dejando la piel más suave y renovada."'
          name="jabón de pomez"
          price="$$$"
        />

        <SoapComponets
          carpet="soap"
          imagen="jabon-romero"
          description=" es beneficioso para tratar el acné en la piel."
          name="jabón de romero con limon"
          price="$$$"
        />

        <SoapComponets
          carpet="soap"
          imagen="jabon-sandalo"
          description="proporciona hidratación, alivia la inflamación, estimula la producción de colágeno, tiene un aroma agradable y ofrece una limpieza suave para la piel."
          name="jabón de gliceria con sandalo"
          price="$$$"
        />
      </div>
    </div>
  );
}
