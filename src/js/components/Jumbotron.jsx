import React from "react";
import PropTypes, { string } from 'prop-types';

const Jumbotron = (props) => {
    return (
    <div className="p-3 m-5 bg-body-tertiary rounded-3">
      <div className="container-fluid py-5">
        <h1 className="display-1 ">{props.title}</h1>
        <p className=" fs-5 py-2">{props.text}</p>
        <button className="btn btn-primary " type="button">{props.btnText}</button>
      </div>
    </div>
    );
};

Jumbotron.prototype = {
  title: PropTypes.string,
  text: PropTypes.string,
  btnText: PropTypes.string
}
export default Jumbotron;