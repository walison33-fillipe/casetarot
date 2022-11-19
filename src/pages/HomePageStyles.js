import styled from 'styled-components';
export const HomePageContainer = styled.div`
`;
export const CardsContainer = styled.div`
    height: 90vh;
    background: linear-gradient(to top left, rgba(31, 1, 62, 1.0), rgba(138, 138, 176, 1.0));
    overflow: scroll;
    padding: 5px;
    text-align: center;

`;
export const FooterContainer = styled.div`
    height: 10vh;
    background: rgba(31, 1, 62, 1.0);
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const CardStyled = styled.img`
    margin: 1%;
    border-radius: 5px;
    border: 6px solid white;
    height: 50%;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
    :hover {
        transform: scale(1.1);
        cursor: pointer;
        box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
    }
    transition: 0.5s;
`;

export const BackCardStyled = styled.img`
    margin: 1%;
    height: 50%;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
         :hover {
        transform: scale(1.1);
        cursor: pointer;
    }
    transition: 0.5s;
`;

export const ActionButtonStyled = styled.button`
    width: 200px;
    height: 35px;
    margin-top: -10px;
    border-radius: 30px;
    background: rgba(31, 1, 62, 1.0);
    border: 1px solid white;
    color: white;
    :disabled{
        background-color: rgba(50,155,50,0.5);
        cursor: not-allowed;
    };
    :hover:not(:disabled) {
        transform: scale(1.2);
        cursor: pointer;
    };
`;
