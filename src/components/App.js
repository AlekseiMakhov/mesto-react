import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import PopupWithImage from './PopupWithImage.js';

function App() {

    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState(false);
    const [cardData, setCardData] = React.useState({name: '', link: ''});
    const [currentUser, setCurrentUser] = React.useState({name: '', about: '', avatar: ''});

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

    function closeAllPopups() {
        setIsEditAvatarPopupOpen(false);
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setCardData({name: '', link: ''});
        setSelectedCard(false);
    }

    return (
      
        <>
            <Header />

            <Main 
                onEditProfile={handleEditProfileClick} 
                onEditAvatar={handleEditAvatarClick} 
                onAddPlace={handleAddPlaceClick}
                onCardClick={handleCardClick}
            />

            <Footer />

            <PopupWithForm 
                name='avatar' 
                title='Обновить аватар' 
                children={
                    <>
                        <input name="avatar" id="avatar" type="url" className="popup-form__text-input" placeholder="Ссылка на картинку" required />
                        <span id="avatar-error" className="popup-form__error-text"></span>
                    </>
                }
                isOpen={isEditAvatarPopupOpen}
                onClose={closeAllPopups}
                buttonText='Сохранить'
            />
            <PopupWithForm 
                name='profile' 
                title='Редактировать профиль' 
                children={
                    <>
                        <input name="name" id="name-input" type="text" minLength="2" maxLength="40" className="popup-form__text-input" placeholder="Имя" required />
                        <span id="name-input-error" className="popup-form__error-text"></span>
                        <input name="about" id="about-input" type="text" minLength="2" maxLength="200" className="popup-form__text-input" placeholder="О себе" required />
                        <span id="about-input-error" className="popup-form__error-text"></span>
                    </>
                    }
                    isOpen={isEditProfilePopupOpen}
                    onClose={closeAllPopups}
                    buttonText='Сохранить'
            />
            <PopupWithForm 
                name='place' 
                title='Новое место' 
                children={
                    <>
                        <input name="name" id="image-input" type="text" minLength="1" maxLength="40" className="popup-form__text-input" placeholder="Название" required />
                        <span id="image-input-error" className="popup-form__error-text"></span>
                        <input name="link" id="link-input" type="url" className="popup-form__text-input" placeholder="Ссылка на картинку" required />
                        <span id="link-input-error" className="popup-form__error-text"></span>
                    </>
                }
                isOpen={isAddPlacePopupOpen}
                onClose={closeAllPopups}
                buttonText='Создать'
            />
            
            {/* <PopupWithForm name='image' title='Вы уверены?' /> */}

            <PopupWithImage 
                isOpen={selectedCard}
                onClose={closeAllPopups}
                cardData={cardData}
            />
        </>
  );
}

export default App;