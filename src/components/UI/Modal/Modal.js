import React, {Component} from "react";
import "./Modal.css";
import Aux from "../../../hoc/Aux";
import Backdrop from "../../UI/Backdrop/Backdrop";

//this  component is used to blur the background of the modal
class Modal extends Component {

  shouldComponentUpdate(nextProps, nextState){
    return (nextProps.show !== this.props.show);
    //this method is assigned to avoid unneccessary updating
  }

  componentWillUpdate(){
    console.log('[Modal] WillUpdate');
    
  }

  render(){
    return(
      <Aux>
    <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>{" "}
    {/*if the modal is shown, the backdrop should be shown */}
    <div
      className="Modal"
      style={{
        transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
        opacity: this.props.show ? "1" : "0"
      }}
    >
      {this.props.children}
    </div>
  </Aux>
    )
  }
}
  


export default Modal;
