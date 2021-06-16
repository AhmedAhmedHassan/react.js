import React, {Fragment} from 'react'
import ReactDom from 'react-dom'
import './modal.css'

const BackDrop = (props) =>{
    return (
       <div class="modal-container" onClick={props.onConfirm} />
    )
}

const OverlayModal = (props) =>{
    return(
        <div class="modal">

        <div class="modal__details">
        <h1 class="modal__title">{props.title}</h1>
        <p class="modal__description">{props.message}</p>
        </div>
        <a href="" class="link-2" onClick={props.onConfirm} ></a>

    </div>
    )
}

const Modal=(props)=> {
    
        return (
            <Fragment>
                {ReactDom.createPortal(<BackDrop onConfirm={props.onConfirm}/>, document.getElementById('backdrop-root'))}
                {ReactDom.createPortal(<OverlayModal onConfirm={props.onConfirm} title={props.title} message={props.message}/>, document.getElementById('overlay-root'))}
                   
            </Fragment>
        )
    
}

export default Modal
