import React from "react";
import { Link } from "react-router-dom";
import "./homecomponents.css";

export default function HomeComponent(props) {
  const imageUrl = require(`../image/${props.carpet}/${props.imagen}.png`);

  return (
    <div className="container-home2">
      <div className="container-cards-home">
        <Link to={props.url}>
          <div className="">
            <img className="imagenes-home" src={imageUrl} alt={props.name} />
          </div>
          <p className="info-home">{props.info}</p>
        </Link>
      </div>
    </div>
  );
}
