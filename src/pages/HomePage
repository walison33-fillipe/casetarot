import {
    HomePageContainer,
    FooterContainer,
    CardsContainer,
    CardStyled,
    ActionButtonStyled,
    BackCardStyled
} from './HomePageStyles';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Modal } from '../components/Modal/Modal';
import { Alert } from '../components/Alert/Alert';

export const HomePage = () => {
    const [imgBaseCardUrl, setImgBaseCardUrl] = useState();
    const [imgBackCardUrk, setImgBackCardUrl] = useState();
    const [cards, setCards] = useState([]);
    const [selectedCard, setSelectedCard] = useState();
    const [modalVisible, setModalVisible] = useState(false);
    const [alertVisible, setAlertVisible] = useState(false);
    const [titleButton, setTitleButton] = useState("COMEÇAR");

    
    useEffect(()=>{
        axios.get('tarot.json')
            .then(({data}) => {
                setCards(data.cards.map((card)=>{
                    return ({...card, visible: true})
                }));
                setImgBackCardUrl(data.imageBackCard);
                setImgBaseCardUrl(data.imagesUrl)
            })
            .catch(err => console.log(err))
    },[]);

    const shufflingCards = (cards) => {
        const numeredCards = cards.map((card)=>{
            return {...card, number: Math.random()}
        })
        const shuffledCards = numeredCards.sort((a, b)=> a.number - b.number);
        return shuffledCards
    };
    const makeBackSideCards = (cards) => {
        
        const newCards = cards.map((card)=>{
            return ({...card, visible: false})
        })
        return newCards
    };
    const onClickStartButton = () => {
        if(titleButton === "COMEÇAR"){
            const shuffledCards = shufflingCards(cards);
            const backSideCards = makeBackSideCards(shuffledCards);
            setCards(backSideCards);
            setTitleButton("RESET");
            setAlertVisible(true)
        } else {
            axios.get('tarot.json')
            .then(({data}) => {
                setCards(data.cards.map((card)=>{
                    return ({...card, visible: true})
                }));
                setImgBackCardUrl(data.imageBackCard);
                setImgBaseCardUrl(data.imagesUrl)
            })
            .catch(err => console.log(err));
            setTitleButton("COMEÇAR");
        }
    }
    const onClickCard = (cardSelected) => {
        const newCards = cards.map((card)=>{
            if(cardSelected.name === card.name){
                return {...card, visible: true}
            };
            return card;
        })
        setCards(newCards);
        setSelectedCard(cardSelected);
        setModalVisible(true);
    }
    return (
        <HomePageContainer>
            
            <CardsContainer>
                {alertVisible && <Alert text="Cartas embaralhadas!" onClose={()=>setAlertVisible(false)} />}
                {cards.map(card => card.visible 
                    ? <CardStyled key={card.name} src={`${imgBaseCardUrl}${card.image}`} /> 
                    : <BackCardStyled src={imgBackCardUrk} onClick={()=>onClickCard(card)} />)} 
                
            </CardsContainer>
            {modalVisible && <Modal onClose={()=>setModalVisible(false)} >
                                <h3>{selectedCard.name}</h3>
                                <img src={`${imgBaseCardUrl}${selectedCard.image}`} />
                                <h4>{selectedCard.description}</h4>
                            </Modal>
            }
            <FooterContainer>
                    <ActionButtonStyled onClick={()=>onClickStartButton()}>{titleButton}</ActionButtonStyled>
            </FooterContainer>
        </HomePageContainer>
    )
}
