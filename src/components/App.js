import { useState, useEffect } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import AddPlacePopup from './AddPlacePopup';
import EditAvatarPopup from './EditAvatarPopup';
import EditProfilePopup from './EditProfilePopup';
import PopupWithImage from './PopupWithImage';
import { CurrentUserContext } from '../contexts/CurrentUserContext'
import { ValidationContext } from '../contexts/ValidationContext'
import api from '../utils/Api';

function App() {

    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState(false);
    const [cardData, setCardData] = useState({name: '', link: ''});
    const [cards, setCards] = useState([]);
    const [currentUser, setCurrentUser] = useState({});
    const [validationContext, setvalidationContext] = useState({ validation: [true, true], validationText: ['',''], isValid: false});

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
        document.addEventListener('keydown', handleEscButton);
    }

    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true);
        document.addEventListener('keydown', handleEscButton);
    }

    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true);
        document.addEventListener('keydown', handleEscButton);
    }

    function noClose(e) {
        e.stopPropagation()
    }

    function handleCardClick(item) {
        setSelectedCard(true);
        setCardData({name: item.name, link: item.link});
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
        api.changeLikeStatus(card._id, !isLiked).then((newCard) => {
        const newCards = cards.map((c) => c._id === card._id ? newCard : c);
        setCards(newCards);
        });
    } 

    function handleDeleteCard(card) {
        api.deleteCard(card._id)
        .then(() => {
        const newCards = cards.filter((c) => c._id !== card._id);
        setCards(newCards);
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

    function handleAddPlace(newPlace) {
        api.createNewCard(newPlace)
        .then((newPlace) => {
            setCards([newPlace, ...cards]);
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
        setCardData({name: '', link: ''});
        setSelectedCard(false);
        document.removeEventListener('keydown', handleEscButton);
        setvalidationContext({ validation: [true, true], validationText: ['',''], isValid: false});
    }

    return (
      
        <CurrentUserContext.Provider value={currentUser}>
            <Header />

            <Main 
                onEditProfile={handleEditProfileClick} 
                onEditAvatar={handleEditAvatarClick} 
                onAddPlace={handleAddPlaceClick}
                onCardClick={handleCardClick}
                handleCardLike={handleCardLike}
                handleDeleteCard={handleDeleteCard}
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
                
                {/* <PopupWithForm name='image' title='Вы уверены?' /> */}
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