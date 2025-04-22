import React from "react";
import PropTypes, { string } from 'prop-types';

const Card = (props) => {
	return (

  <div className="card rounded-3 overflow-hidden">
    <img src={props.srcImage} className="card-img-top" alt="..."/>
    <div className="card-body text-center">
      <h5 className="card-title">{props.title}</h5>
      <p className="card-text">{props.text}</p>
      <button type="button" className="btn btn-primary ">{props.buttonText}</button>
    </div>
  </div>

	);
};

Card.prototype = {
    srcImage: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
    buttonText: PropTypes.string
}

export default Card;