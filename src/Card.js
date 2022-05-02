import React from "react";

const Card = ({header, temp}) => {
  return (
    <div className='tc br3 pa3 ma3 dib bw2 shadow-5 card'>
      <h4>{header}</h4>
      <p className="bold">{temp}°</p>
      
    </div>
  );
}
//{this.props.temp}
export default Card;