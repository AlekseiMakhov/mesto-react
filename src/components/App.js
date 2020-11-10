import { useState, useEffect } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import AddPlacePopup from './AddPlacePopup';
import EditAvatarPopup from './EditAvatarPopup';
import EditProfilePopup from './EditProfilePopup';
import PopupWithImage from './PopupWithImage';
import { CurrentUserContext } from '../contexts/CurrentUserContext'
import api from '../utils/Api';

function App() {

    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState(false);
    const [cardData, setCardData] = useState({name: '', link: ''});
    const [cards, setCards] = useState([]);
    const [currentUser, setCurrentUser] = useState({});

    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(true);
    }

    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true);
    }

    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true);
    }

    function handleCardClick(item) {
        setSelectedCard(true);
        setCardData({name: item.name, link: item.link});
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
        console.log(userInfo)
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
        console.log(user.avatar);
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

            <EditProfilePopup 
                isOpen={isEditProfilePopupOpen} 
                onClose={closeAllPopups} 
                onUpdateUser={handleUpdateUser} 
            />

            <EditAvatarPopup 
                isOpen={isEditAvatarPopupOpen} 
                onClose={closeAllPopups} 
                onUpdateAvatar={handleUpdateAvatar} 
            />

            <AddPlacePopup 
                isOpen={isAddPlacePopupOpen} 
                onClose={closeAllPopups} 
                onAddPlace={handleAddPlace} 
            />
            
            {/* <PopupWithForm name='image' title='Вы уверены?' /> */}

            <PopupWithImage 
                isOpen={selectedCard}
                onClose={closeAllPopups}
                cardData={cardData}
            />
        </CurrentUserContext.Provider>
    );
}

export default App;