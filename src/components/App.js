import { useState, useEffect } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import AddPlacePopup from './AddPlacePopup';
import EditAvatarPopup from './EditAvatarPopup';
import EditProfilePopup from './EditProfilePopup';
import PopupWithImage from './PopupWithImage';
import PopupWithSubmit from './PopupWithSubmit';
import { CurrentUserContext } from '../contexts/CurrentUserContext'
import { ValidationContext } from '../contexts/ValidationContext'
import api from '../utils/Api';

function App() {

    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
    const [isPopupWithSubmitOpen, setIsPopupWithSubmitOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState(false);
    const [cardData, setCardData] = useState({name: '', link: ''});
    const [card, setCard] = useState({});
    const [cards, setCards] = useState([]);
    const [currentUser, setCurrentUser] = useState({});
    const [validationContext, setvalidationContext] = useState({ validation: [], validationText: [], isValid: false});

    let resValid = false;

    function handleInput(e) {
        const validArr = validationContext.validation;
        const textArr = validationContext.validationText;
        let index = Number(e.target.id);
        resValid = 0;

        validArr[index] = e.target.validity.valid;
        textArr[index] = e.target.validationMessage;
        
        for (let i = 0; i < validArr.length; i++) {
            resValid += Number(validArr[i]);
        }
        setvalidationContext({ validation: validArr, validationText: textArr, isValid: (resValid === validArr.length)})
    }
    
    function handleEscButton(e) {
        if (e.key === 'Escape') {
            closeAllPopups();
        }
    }

    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(true);
        setvalidationContext({ validation: [true], validationText: [''], isValid: false});
        document.addEventListener('keydown', handleEscButton);
    }

    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true);
        setvalidationContext({ validation: [true, true], validationText: ['',''], isValid: true});
        document.addEventListener('keydown', handleEscButton);
    }

    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true);
        setvalidationContext({ validation: [true, true], validationText: ['',''], isValid: false});
        document.addEventListener('keydown', handleEscButton);
    }

    function noClose(e) {
        e.stopPropagation();
    }

    function handleCardClick(item) {
        setSelectedCard(true);
        setCardData({name: item.name, link: item.link});
        document.addEventListener('keydown', handleEscButton);
    }

    function handleDeleteCardClick(card) {
        setIsPopupWithSubmitOpen(true);
        setvalidationContext({ validation: [], validationText: [], isValid: true});
        setCard(card);
        document.addEventListener('keydown', handleEscButton);
    }

    useEffect(() => {   
        Promise.all([ 
            api.getProfileInfo(),    
            api.getInitialCards()
        ])
        .then((values) => {    
            const [profileInfo, cardList] = values;
            setCurrentUser(profileInfo);
            setCards(cardList);
        })
        .catch((err) => {
            console.log(err);
        });
    }, [])

    function handleCardLike(card) {
        const isLiked = card.likes.some(i => i._id === currentUser._id);
        api.changeLikeStatus(card._id, !isLiked)
        .then((newCard) => {
            const newCards = cards.map((c) => c._id === card._id ? newCard : c);
            setCards(newCards);
        })
        .catch((err) => {
            console.log(err);
        });
    } 

    function handleDeleteCard(card) {
        api.deleteCard(card._id)
        .then(() => {
            const newCards = cards.filter((c) => c._id !== card._id);
            setCards(newCards);
            closeAllPopups();
        })
        .catch((err) => {
            console.log(err);
        });
    }

    function handleUpdateUser(userInfo) {
        api.editProfileInfo(userInfo)
        .then((userInfo) => {
            setCurrentUser(userInfo);
            closeAllPopups();
        })
        .catch((err) => {
            console.log(err);
        });
    }

    function handleUpdateAvatar(user) {
        api.editAvatar(user.avatar)
        .then((userInfo) => {
            setCurrentUser(userInfo);
            closeAllPopups();
        })
        .catch((err) => {
            console.log(err);
        });
    }

    function handleAddPlace(newCard) {
        api.createNewCard(newCard)
        .then((newCard) => {
            setCards([newCard, ...cards]);
            closeAllPopups();
        })
        .catch((err) => {
            console.log(err);
        });
    }

    function closeAllPopups() {
        setIsEditAvatarPopupOpen(false);
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setIsPopupWithSubmitOpen(false);
        setCardData({name: '', link: ''});
        setCard({});
        setSelectedCard(false);
        document.removeEventListener('keydown', handleEscButton);
        setvalidationContext({ validation: [], validationText: [], isValid: false});
    }

    return (
      
        <CurrentUserContext.Provider value={currentUser}>
            <Header />

            <Main 
                onEditProfile={handleEditProfileClick} 
                onEditAvatar={handleEditAvatarClick} 
                onAddPlace={handleAddPlaceClick}
                onCardClick={handleCardClick}
                onCardLike={handleCardLike}
                onDeleteCard={handleDeleteCardClick}
                cards={cards}
            />

            <Footer />
            <ValidationContext.Provider value={validationContext}>
                    
                <EditProfilePopup 
                    isOpen={isEditProfilePopupOpen} 
                    onClose={closeAllPopups} 
                    onUpdateUser={handleUpdateUser} 
                    noClose={noClose}
                    onInput={handleInput}
                />

                <EditAvatarPopup 
                    isOpen={isEditAvatarPopupOpen} 
                    onClose={closeAllPopups} 
                    onUpdateAvatar={handleUpdateAvatar} 
                    noClose={noClose}
                    onInput={handleInput}
                />

                <AddPlacePopup 
                    isOpen={isAddPlacePopupOpen} 
                    onClose={closeAllPopups} 
                    onAddPlace={handleAddPlace}
                    noClose={noClose}
                    onInput={handleInput}
                />
                
                <PopupWithSubmit  
                    isOpen={isPopupWithSubmitOpen} 
                    onClose={closeAllPopups}
                    noClose={noClose}
                    onDeleteCard={handleDeleteCard}
                    card={card}
                />

            </ValidationContext.Provider>

            <PopupWithImage 
                isOpen={selectedCard}
                onClose={closeAllPopups}
                cardData={cardData}
                noClose={noClose}
            />
        </CurrentUserContext.Provider>
    );
}

export default App;