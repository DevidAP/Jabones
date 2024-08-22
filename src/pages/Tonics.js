import React from "react";
import SoapComponets from "../components/SoapComponets";
export default function Tonics() {
  return (
    <div className="soaps">
      <div className="container-soap">
        <SoapComponets
          carpet="tonics"
          imagen="tonic-poros"
          name="tonico para cerrar los poros"
          price="$$$"
          description="MEJORAN LA PIEL DÍA A DÍA, OBTENDRÍAMOS RESULTADOS
ESPECTACULARES EN EL ESTADO DE NUESTROS POROS"
        />
        <SoapComponets
          carpet="tonics"
          imagen="tonic-cabello"
          name="Tónico SUAVISANTE para el cabello"
          price="$$$"
          description="ESTE TÓNICO SIRVE COMO SUSTITUTO DEL SUAVIZANTE, ESTE TÓNICO ES APTO PARA TODOS TIPOS DE
CABELLOS, EN ESPECIAL; PARA PERSONAS QUE SUFREN DERMATITIS"
        />
        <SoapComponets
          carpet="tonics"
          imagen="tonic-grasa"
          name="Tónico casero para piel grasa - Controla grasa,"
          price="$$$"
          description="ESTE TÓNICO CASERO PARA PIEL GRASA. TIENE PROPIEDADES ASTRINGENTES, ANTIACNÉICAS Y
CONTROLA SUAVEMENTE LA GRASA.

 (NO USAR SI SE EXPONEN AL SOL SIN
USAR PROTECCIÓN SOLAR)
"
        />
        <SoapComponets
          carpet="tonics"
          imagen="tonic-aclarar"
          name="TÓNICO PARA ACLARAR EL CABELLO"
          price="$$$"
          description="ACLARAR EL CABELLO CLARO Y DARLE
REFLEJOS RUBIOS."
        />
        <SoapComponets
          carpet="tonics"
          imagen="tonic-rosacea"
          name="TONICO PARA PIEL CON ROSACEA"
          price="$$$"
          description="Este tónico calmante está especialmente formulado para pieles con rosácea, 
      ayudando a reducir el enrojecimiento, hidratar profundamente y fortalecer la barrera cutánea"
        />
      </div>
    </div>
  );
}
