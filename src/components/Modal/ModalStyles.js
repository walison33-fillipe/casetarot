import styled from 'styled-components';

export const ModalBackdrop = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(13px);
`;

export const ModalFrame = styled.div`
    border-radius: 10px;
    border: 4px solid white;
    background-color: #8A8AB0;
`;

export const ModalHeader = styled.div`
    display: flex;
    justify-content: end;
    align-items: center;
`;

export const CloseIconContainer = styled.span`
    padding: 15px;
    color: red;
    cursor: pointer;
`;
export const ModalContent = styled.div`
    padding: 10px;
    display: grid;
    max-width: 80vw;
    max-height: 80vh;
    grid-template-areas:
        "header header header"
        "img desc desc"
        "img desc desc" 
        "img desc desc" 
        "img desc desc" 
        "img desc desc";
    
    h3 {
        margin-top: -50px;
        grid-area: header;
        align-self: center;
        color: white;
        justify-self: center;
    }
    img {
        grid-area: img;
        justify-self: center;
        border-radius: 5px;
        border: 6px solid white;
        margin-bottom: 20px;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
        
    }
    h4 {
        font-weight: 500;
        grid-area: desc;
        color: white;
        margin-right: 10%;
    }
    grid-template-rows: 1fr 4fr;
    grid-template-columns: 2fr 4fr;

    @media screen and (max-width:1000px){
        img {
            display:none;
        }

        h3 {
        grid-area: header;
        align-self: start;
        color: white;
        justify-self: center;
        margin-top: -50px;
    }

    h4 {
        margin-top: -50px;
        color: white;
        margin-right: 5%;
    }
        grid-template-rows: 1fr 9fr;
        grid-template-columns: 1fr 6fr;
    }
`;