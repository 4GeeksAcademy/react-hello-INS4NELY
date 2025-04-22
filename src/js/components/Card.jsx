import React from "react";
import PropTypes, { string } from 'prop-types';

const Card = (props) => {
	return (

  <div className="card rounded-3 overflow-hidden">
    <img src="https://neliosoftware.com/es/wp-content/uploads/sites/3/2018/07/aziz-acharki-549137-unsplash-1200x775.jpg" className="card-img-top" alt="..."/>
    <div className="card-body text-center">
      <h5 className="card-title">{props.title}</h5>
      <p className="card-text">{props.text}</p>
      <button type="button" className="btn btn-primary ">{props.buttonText}</button>
    </div>
  </div>

	);
};

Card.prototype = {
    title: PropTypes.string,
    text: PropTypes.string,
    buttonText: PropTypes.string
}

export default Card;