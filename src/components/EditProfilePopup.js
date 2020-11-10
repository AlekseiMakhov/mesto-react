import { useContext, useEffect, useState } from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditProfilePopup({ 
                            isOpen, 
                            onClose, 
                            onUpdateUser 
                        }) 
    {
    const currentUser = useContext(CurrentUserContext);

    const [name, setName] = useState(currentUser.name);
    const [about, setAbout] = useState(currentUser.about);

    useEffect(_ => {
        setName(currentUser.name);
        setAbout(currentUser.about);
        }, [currentUser]
    );

    function handleSubmit(e) {
        e.preventDefault();

        onUpdateUser({
            name,
            about
        });
    }

    return (
        <PopupWithForm 
            name='profile' 
            title='Редактировать профиль' 
            children={
            <>
                <input name="name" id="name-input" type="text" minLength="2" maxLength="40" value={name} onChange={(e) => setName(e.target.value)} className="popup-form__text-input" placeholder="Имя" required />
                <span id="name-input-error" className="popup-form__error-text"></span>
                <input name="about" id="about-input" type="text" minLength="2" maxLength="200" value={about} onChange={(e) => setAbout(e.target.value)} className="popup-form__text-input" placeholder="О себе" required />
                <span id="about-input-error" className="popup-form__error-text"></span>
            </>
            }
            isOpen={isOpen}
            onClose={onClose}
            buttonText='Сохранить'
            onSubmit={handleSubmit}
        />
    );
}    

export default EditProfilePopup;