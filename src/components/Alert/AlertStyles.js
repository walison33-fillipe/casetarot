import styled from 'styled-components';

export const AlertContainer = styled.div`
    /* position: rel; */
    top: 5;
    left: 80vw;
    height: 30px;
    width: 15vw;
    background: rgb(255, 55, 55);
    transition: left 50s;
    animation: go-front 1s ;

    @keyframes go-front {
        from {
            transform: translateX(25vw);
        }
        to {
            transform: translateX(0);
        }
    }
`;