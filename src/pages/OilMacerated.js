import React from "react";
import SoapComponets from "../components/SoapComponets";

export default function OilMacerated() {
  return (
    <div className="soaps">
      <div className="container-soap">
        <SoapComponets
          carpet="macerated"
          imagen="macerated-hiperico"
          name="Macerado de aceite de hiperico"
          price="$$$"
          description="Calma la piel, acelera la cicatrización, alivia el dolor muscular y promueve la regeneración celular. Ideal para pieles irritadas y con inflamación."
        />
        <SoapComponets
          carpet="macerated"
          imagen="macerated-te"
          name="Aceite de te verde"
          description="Revitaliza la piel, controla el exceso de grasa y reduce la inflamación. También ofrece protección antioxidante contra el daño ambiental."
          price="$$$"
        />
        <SoapComponets
          carpet="macerated"
          imagen="macerated-jamaica"
          description="Hidrata, mejora la elasticidad, y combate los signos del envejecimiento. Ideal para una piel radiante y un cabello suave y brillante."
          name="Aceite de Jamaica"
          price="$$$"
        />
        <SoapComponets
          carpet="macerated"
          imagen="macerated-calendula"
          description="Calma y suaviza la piel, reduce la irritación y favorece la cicatrización. Ideal para pieles sensibles o dañadas."
          name="Extracto glicerinado de calendula "
          price="$$$"
        />
        <SoapComponets
          carpet="macerated"
          imagen="macerated-romero"
          description="Estimula el crecimiento del cabello, mejora la circulación y revitaliza la piel. Ideal para masajes y tratamientos capilares."
          name="Aceite de romero"
          price="$$$"
        />
      </div>
    </div>
  );
}
