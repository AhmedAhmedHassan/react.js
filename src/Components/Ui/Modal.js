import React from 'react'
import './modal.css'


const Modal=(props)=> {
    
        return (
            <div>
                <div class="modal-container" onClick={props.onConfirm} >
                    <div class="modal">

                        <div class="modal__details">
                        <h1 class="modal__title">{props.title}</h1>
                        <p class="modal__description">{props.message}</p>
                        </div>
                        <a href="" class="link-2" onClick={props.onConfirm} ></a>

                    </div>
                </div>

            </div>
        )
    
}

export default Modal
