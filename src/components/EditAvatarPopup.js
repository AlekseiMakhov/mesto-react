import { useRef } from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup({ 
                        isOpen, 
                        onClose, 
                        onUpdateAvatar 
                    }) 
    {

    const avatar = useRef('');

    function handleSubmit(e) {
        e.preventDefault();
        
        onUpdateAvatar({
            avatar: avatar.current.value
        });
        console.log(avatar.current.value)
      } 

    return (
        <PopupWithForm 
            name='avatar' 
            title='Обновить аватар' 
            children={
                <>
                    <input name="avatar" ref={avatar} id="avatar" type="url" className="popup-form__text-input" placeholder="Ссылка на картинку" required />
                    <span id="avatar-error" className="popup-form__error-text"></span>
                </>
            }
            isOpen={isOpen}
            onClose={onClose}
            buttonText='Сохранить'
            onSubmit={handleSubmit}
        />
    );
}    

export default EditAvatarPopup;