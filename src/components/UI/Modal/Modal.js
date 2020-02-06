import React from "react";
import "./Modal.css";
import Aux from "../../../hoc/Aux";
import Backdrop from "../../UI/Backdrop/Backdrop";

//this  component is used to blur the background of the modal
const modal = props => (
  <Aux>
    <Backdrop show={props.show} clicked={props.modalClosed}/>{" "}
    {/*if the modal is shown, the backdrop should be shown */}
    <div
      className="Modal"
      style={{
        transform: props.show ? "translateY(0)" : "translateY(-100vh)",
        opacity: props.show ? "1" : "0"
      }}
    >
      {props.children}
    </div>
  </Aux>
);

export default modal;
