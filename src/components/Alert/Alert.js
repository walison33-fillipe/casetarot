import { useEffect } from 'react';
import { AlertContainer } from "./AlertStyles"

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  };

export const Alert = ({text, onClose}) => {

    const startProgress = () => {
        sleep(100)
        onClose()
    }
    useEffect(()=>{
        startProgress()
    }, []);
    return (
        <AlertContainer>
            <strong>{text}</strong>
        </AlertContainer>
    )
}


