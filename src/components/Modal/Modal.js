import {ModalBackdrop, 
    ModalFrame, 
    ModalHeader, 
    CloseIconContainer, 
    ModalContent} from "./ModalStyles";


export const Modal = ({ children, onClose }) => {
    const onClickClose = (event) => {
        if(event.target.id === 'outside' || event.target.id === 'close-button') {
            onClose();
        }
    }
    return (
        <ModalBackdrop id="outside" onClick={onClickClose}>
            <ModalFrame>
                <ModalHeader>
                    <CloseIconContainer id="close-button" onClick={onClickClose}>X</CloseIconContainer>
                </ModalHeader>
                <ModalContent>
                    {children}
                </ModalContent>
            </ModalFrame>
        </ModalBackdrop>
    )
}
