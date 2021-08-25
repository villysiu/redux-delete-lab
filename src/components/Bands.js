import React from "react";
import Band from "./Band";

const Bands = (props) => {
    console.log(props)
  return (
      props.bands.map((band) => <Band delete={props.delete} key={band.id} band= {band} />)
  )
};

export default Bands;