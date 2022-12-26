import { ReactDOM } from 'react';
import { Fragment } from 'react';
import classes from './Modal.module.css';


const Backdrop = props => {
    return (
        <div className={classes.backdrop} onHideCart={props.onHideCart}></div>
    )
};

const ModalOverlay = props => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    )
}

const portalElement = document.getElementById('overlays')

export default function Modal(props) {
    return (
        <Fragment>
            <Backdrop onHideCart={props.onHideCart}/>
            <ModalOverlay>{props.children}</ModalOverlay>
        </Fragment>
    )
}