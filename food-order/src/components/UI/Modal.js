import { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css"
const BackDrop = ({ onClick }) => <div className={classes.backdrop} onClick={onClick} />

const ModalOverlay = (props) => {
    return (<div className={classes.modal}>
        <div className={classes.content}>  {props.children}</div>
    </div>)
}
const portalElement = document.getElementById("overlays")
const Modal = (props) => {
    return (
        <Fragment>
            {ReactDOM.createPortal(<BackDrop onClick={props.onClick} />, portalElement)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
        </Fragment>
    );
}

export default Modal;
